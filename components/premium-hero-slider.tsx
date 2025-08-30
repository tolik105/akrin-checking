'use client'

import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture, Html } from '@react-three/drei'
import * as THREE from 'three'
import Link from 'next/link'

const heroSlides = [
  {
    id: 1,
    title: "IT Managed Services",
    subtitle: "Comprehensive IT Management Solutions",
    description: "24/7 monitoring, proactive maintenance, and expert support to keep your business running smoothly with enterprise-grade reliability.",
    image: "/images/banners/it-managed-services/banner.avif",
    link: "/services/it-managed-services",
    ctaText: "Explore Managed Services"
  },
  {
    id: 2,
    title: "Cybersecurity Solutions", 
    subtitle: "Advanced Threat Protection",
    description: "Comprehensive security assessments, threat detection, and compliance solutions to safeguard your digital assets from evolving cyber threats.",
    image: "/images/banners/cybersecurity/banner1.jpeg",
    link: "/services/cybersecurity",
    ctaText: "Secure Your Business"
  },
  {
    id: 3,
    title: "IT Consulting & Project Management",
    subtitle: "Strategic Technology Leadership",
    description: "Expert guidance and project management that aligns technology with business goals for sustainable growth and digital transformation.",
    image: "/images/banners/it-consulting-project-management/hero-banner.webp", 
    link: "/services/it-consulting-project-management",
    ctaText: "Start Your Project"
  }
]

// Premium Shader Effects
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Fiber Mask Effect (like Splide Premium)
const fiberMaskFragmentShader = `
  uniform sampler2D texture1;
  uniform sampler2D texture2;
  uniform float progress;
  uniform float intensity;
  uniform vec2 resolution;
  uniform float time;
  varying vec2 vUv;

  // High-quality noise functions
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 0.0;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;

    // Create complex fiber pattern with multiple layers
    float scale = 12.0;
    vec2 fiberUv = uv * scale;

    // Multiple fiber layers for depth
    float fiber1 = fbm(fiberUv + vec2(time * 0.1, progress * 3.0));
    float fiber2 = fbm(fiberUv * 1.3 + vec2(progress * 2.0, time * 0.05));
    float fiber3 = noise(fiberUv * 2.1 + vec2(progress * 1.5, 0.0));

    // Combine fiber patterns
    float fiberPattern = (fiber1 * 0.5 + fiber2 * 0.3 + fiber3 * 0.2);

    // Create smooth transition mask
    float smoothProgress = smoothstep(0.0, 1.0, progress);
    float mask = smoothstep(smoothProgress - 0.4, smoothProgress + 0.4, fiberPattern);

    // Add some distortion for premium effect
    vec2 distortion = vec2(
      sin(uv.y * 10.0 + progress * 6.28) * 0.01,
      cos(uv.x * 8.0 + progress * 6.28) * 0.01
    ) * intensity;

    // Sample textures with slight distortion
    vec4 tex1 = texture2D(texture1, uv + distortion * (1.0 - progress));
    vec4 tex2 = texture2D(texture2, uv + distortion * progress);

    // Apply fiber mask transition with color enhancement
    vec4 finalColor = mix(tex1, tex2, mask);

    // Add subtle color grading for premium look
    finalColor.rgb = pow(finalColor.rgb, vec3(0.95));
    finalColor.rgb *= 1.05;

    gl_FragColor = finalColor;
  }
`

// Wave Mask Effect (Alternative premium effect)
const waveMaskFragmentShader = `
  uniform sampler2D texture1;
  uniform sampler2D texture2;
  uniform float progress;
  uniform float intensity;
  uniform vec2 resolution;
  uniform float time;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    // Create wave pattern
    float wave1 = sin(uv.x * 10.0 + progress * 6.28 + time) * 0.1;
    float wave2 = cos(uv.y * 8.0 + progress * 6.28 + time * 0.7) * 0.1;
    float wavePattern = wave1 + wave2;

    // Create smooth transition mask
    float mask = smoothstep(progress - 0.3 + wavePattern, progress + 0.3 + wavePattern, uv.x);

    // Add distortion
    vec2 distortion = vec2(wave1, wave2) * intensity * 0.5;

    // Sample textures
    vec4 tex1 = texture2D(texture1, uv + distortion * (1.0 - progress));
    vec4 tex2 = texture2D(texture2, uv + distortion * progress);

    // Apply wave mask transition
    vec4 finalColor = mix(tex1, tex2, mask);

    gl_FragColor = finalColor;
  }
`

interface SliderMeshProps {
  currentSlide: number
  nextSlide: number
  progress: number
  images: string[]
}

function SliderMesh({ currentSlide, nextSlide, progress, images }: SliderMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport, clock } = useThree()
  const [shaderType, setShaderType] = useState(0)

  // Load textures
  const textures = useTexture(images)

  // Shader effects array
  const shaderEffects = [fiberMaskFragmentShader, waveMaskFragmentShader]

  // Create shader material with enhanced uniforms
  const shaderMaterial = useRef(
    new THREE.ShaderMaterial({
      uniforms: {
        texture1: { value: textures[currentSlide] },
        texture2: { value: textures[nextSlide] },
        progress: { value: 0 },
        intensity: { value: 0.3 },
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(viewport.width, viewport.height) }
      },
      vertexShader: vertexShader,
      fragmentShader: shaderEffects[shaderType],
    })
  )

  // Change shader effect when slide changes
  useEffect(() => {
    if (progress === 0) {
      const newShaderType = Math.floor(Math.random() * shaderEffects.length)
      setShaderType(newShaderType)
      if (shaderMaterial.current) {
        shaderMaterial.current.fragmentShader = shaderEffects[newShaderType]
        shaderMaterial.current.needsUpdate = true
      }
    }
  }, [currentSlide])

  useFrame(() => {
    if (shaderMaterial.current) {
      shaderMaterial.current.uniforms.progress.value = progress
      shaderMaterial.current.uniforms.texture1.value = textures[currentSlide]
      shaderMaterial.current.uniforms.texture2.value = textures[nextSlide]
      shaderMaterial.current.uniforms.time.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef} material={shaderMaterial.current}>
      <planeGeometry args={[viewport.width, viewport.height]} />
    </mesh>
  )
}

function SliderContent({ slide, isActive }: { slide: typeof heroSlides[0], isActive: boolean }) {
  return (
    <div className={`absolute inset-0 z-10 flex items-center transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[hsl(var(--primary))]/90 text-white text-xs sm:text-sm font-semibold rounded-full backdrop-blur-sm">
              {slide.subtitle}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl">
            {slide.description}
          </p>

          {/* CTA Button */}
          <Link
            href={slide.link}
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base"
          >
            {slide.ctaText}
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function PremiumHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlide, setNextSlide] = useState(1)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [webglSupported, setWebglSupported] = useState(true)

  const images = heroSlides.map(slide => slide.image)

  // Check WebGL support
  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    setWebglSupported(!!gl)
  }, [])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        advanceSlide()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [currentSlide, isTransitioning])

  const advanceSlide = () => {
    setIsTransitioning(true)
    const next = (currentSlide + 1) % heroSlides.length
    setNextSlide(next)
    
    // Animate progress
    let startTime = Date.now()
    const duration = 1000
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min(elapsed / duration, 1)
      setProgress(newProgress)
      
      if (newProgress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCurrentSlide(next)
        setProgress(0)
        setIsTransitioning(false)
      }
    }
    
    requestAnimationFrame(animate)
  }

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true)
      setNextSlide(index)
      
      let startTime = Date.now()
      const duration = 1000
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const newProgress = Math.min(elapsed / duration, 1)
        setProgress(newProgress)
        
        if (newProgress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCurrentSlide(index)
          setProgress(0)
          setIsTransitioning(false)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] overflow-hidden bg-black">
      {/* WebGL Canvas or Fallback */}
      <div className="absolute inset-0 z-0">
        {webglSupported ? (
          <Canvas
            camera={{ position: [0, 0, 1], fov: 75 }}
            style={{ width: '100%', height: '100%' }}
            gl={{ antialias: true, alpha: false }}
            dpr={[1, 2]}
          >
            <Suspense fallback={
              <Html center>
                <div className="text-white">Loading premium effects...</div>
              </Html>
            }>
              <SliderMesh
                currentSlide={currentSlide}
                nextSlide={nextSlide}
                progress={progress}
                images={images}
              />
            </Suspense>
          </Canvas>
        ) : (
          // Fallback for non-WebGL devices
          <div className="relative w-full h-full">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content Overlay */}
      {heroSlides.map((slide, index) => (
        <SliderContent 
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
        />
      ))}

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 group ${
                index === currentSlide
                  ? 'text-white'
                  : 'text-white/60 hover:text-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Arrow Icon */}
              <svg
                className={`w-6 h-6 transition-all duration-300 ${
                  index === currentSlide ? 'scale-110' : 'scale-100 group-hover:scale-105'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {/* Underline */}
              <div className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-x-100'
                  : 'bg-white/50 scale-x-0 group-hover:scale-x-75'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 md:hidden">
        <div className="flex items-center space-x-2 text-white/70 text-xs">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Tap arrows to navigate</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
