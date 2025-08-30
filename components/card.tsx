"use client"
import type React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm"
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const CardHeader = ({ children, ...props }: CardHeaderProps) => {
  return (
    <div className="flex flex-col p-6" {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const CardTitle = ({ children, ...props }: CardTitleProps) => {
  return (
    <h2 className="text-xl font-semibold mb-2" {...props}>
      {children}
    </h2>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const CardContent = ({ children, ...props }: CardContentProps) => {
  return (
    <div className="flex-grow p-6" {...props}>
      {children}
    </div>
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export const CardDescription = ({ children, ...props }: CardDescriptionProps) => {
  return (
    <p className="text-sm text-muted-foreground" {...props}>
      {children}
    </p>
  )
}

