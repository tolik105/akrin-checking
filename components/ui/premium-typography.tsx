"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface PremiumTypographyProps {
  children: ReactNode
  className?: string
  variant?: "display" | "headline" | "body" | "caption" | "overline"
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  weight?: "light" | "normal" | "medium" | "semibold" | "bold"
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"
}

const variantStyles = {
  display: "text-display font-light tracking-headline leading-display",
  headline: "text-headline font-medium tracking-tight leading-headline",
  body: "text-body-premium font-normal tracking-premium leading-premium",
  caption: "text-sm font-normal tracking-premium leading-relaxed opacity-75",
  overline: "text-xs font-medium tracking-wide leading-normal uppercase opacity-60"
}

const weightStyles = {
  light: "font-light",
  normal: "font-normal", 
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
}

export function PremiumTypography({
  children,
  className,
  variant = "body",
  element = "p",
  weight,
  size,
  ...props
}: PremiumTypographyProps & React.HTMLAttributes<HTMLElement>) {
  const Component = element as keyof JSX.IntrinsicElements

  const baseClasses = variant === "display" || variant === "headline"
    ? "text-premium-serif text-crisp font-feature-premium"
    : "text-premium text-crisp font-feature-premium"
  const variantClasses = variantStyles[variant]
  const weightClasses = weight ? weightStyles[weight] : ""
  const sizeClasses = size ? `text-${size}` : ""

  return (
    <Component
      className={cn(
        baseClasses,
        variantClasses,
        weightClasses,
        sizeClasses,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

// Specific typography components for common use cases
export function DisplayText({ children, className, ...props }: Omit<PremiumTypographyProps, "variant" | "element">) {
  return (
    <PremiumTypography
      variant="display"
      element="h1"
      className={cn("text-6xl md:text-7xl lg:text-8xl", className)}
      style={{
        fontFamily: "'Lora Var', 'Lora', Georgia, 'Times New Roman', serif",
        fontFeatureSettings: '"kern" 1, "liga" 1, "clig" 1, "calt" 1',
        fontVariationSettings: '"opsz" 32',
        ...props.style
      }}
      {...props}
    >
      {children}
    </PremiumTypography>
  )
}

export function HeadlineText({ children, className, element = "h2", ...props }: Omit<PremiumTypographyProps, "variant">) {
  return (
    <PremiumTypography
      variant="headline"
      element={element}
      className={cn("text-3xl md:text-4xl lg:text-5xl", className)}
      style={{
        fontFamily: "'Lora Var', 'Lora', Georgia, 'Times New Roman', serif",
        fontFeatureSettings: '"kern" 1, "liga" 1, "clig" 1, "calt" 1',
        fontVariationSettings: '"opsz" 32',
        ...props.style
      }}
      {...props}
    >
      {children}
    </PremiumTypography>
  )
}

export function BodyText({ children, className, ...props }: Omit<PremiumTypographyProps, "variant" | "element">) {
  return (
    <PremiumTypography
      variant="body"
      element="p"
      className={cn("text-base md:text-lg", className)}
      style={{
        fontFamily: "'Inter Var', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontFeatureSettings: '"kern" 1, "liga" 1, "clig" 1, "calt" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv11" 1',
        ...props.style
      }}
      {...props}
    >
      {children}
    </PremiumTypography>
  )
}

export function CaptionText({ children, className, ...props }: Omit<PremiumTypographyProps, "variant" | "element">) {
  return (
    <PremiumTypography
      variant="caption"
      element="span"
      className={className}
      {...props}
    >
      {children}
    </PremiumTypography>
  )
}

export function OverlineText({ children, className, ...props }: Omit<PremiumTypographyProps, "variant" | "element">) {
  return (
    <PremiumTypography
      variant="overline"
      element="span"
      className={className}
      {...props}
    >
      {children}
    </PremiumTypography>
  )
}

// Premium button component with enhanced typography
export function PremiumButton({ 
  children, 
  className, 
  variant = "default",
  size = "default",
  ...props 
}: {
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background text-premium text-crisp font-feature-premium"
  
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary"
  }
  
  const sizeStyles = {
    default: "h-10 py-2 px-4 text-sm tracking-premium",
    sm: "h-9 px-3 rounded-md text-xs tracking-premium",
    lg: "h-11 px-8 rounded-md text-base tracking-premium",
    icon: "h-10 w-10"
  }

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

// Premium input component with enhanced typography
export function PremiumInput({ 
  className, 
  type = "text",
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "text-premium text-crisp font-feature-premium tracking-premium",
        className
      )}
      {...props}
    />
  )
}

// Premium textarea component
export function PremiumTextarea({ 
  className, 
  ...props 
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "text-premium text-crisp font-feature-premium tracking-premium leading-premium",
        className
      )}
      {...props}
    />
  )
}
