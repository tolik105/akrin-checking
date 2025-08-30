'use client';
import { useRef } from 'react';

export default function MonogramReactor({ fast = false }: { fast?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative aspect-square w-full max-w-[600px] select-none" aria-hidden>
      <svg viewBox="0 0 400 400" className="absolute inset-0 block w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clipA" clipPathUnits="userSpaceOnUse">
            {/* Perfect geometric A letter - clean and sharp */}
            <path id="APath" d="
              M200 50 
              L320 350 
              L280 350 
              L260 300 
              L140 300 
              L120 350 
              L80 350 
              L200 50 Z
              
              M160 250 
              L240 250 
              L200 150 
              L160 250 Z
            " />
          </clipPath>
          {/* soft inner glow to separate dark video from white canvas */}
          <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="b" />
            <feComposite in="b" in2="SourceAlpha" operator="out" result="inner" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.60  0 0 0 0 0.62  0 0 0 0 0.85  0 0 0 0.35 0" />
          </filter>
        </defs>

        <foreignObject x="0" y="0" width="400" height="400" clipPath="url(#clipA)">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={'/video/AKRINKK.mp4'}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ 
              width: '400px', 
              height: '400px',
              imageRendering: 'crisp-edges',
              filter: 'none'
            }}
          />
        </foreignObject>

        {/* Inner glow render */}
        <use href="#APath" filter="url(#innerGlow)" style={{ fill: '#000', opacity: 0.55 }} />
      </svg>
    </div>
  );
}