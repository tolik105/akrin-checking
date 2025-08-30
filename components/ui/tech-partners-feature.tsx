"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { TechPartnersSkeleton } from "./tech-partners-animated";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50",
        "bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-800/80 dark:to-gray-900",
        "shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]",
        "backdrop-blur-xl",
        "transition-all duration-500 ease-out",
        "group relative overflow-hidden",
        className
      )}
    >
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h3 
      className={cn(
        "text-2xl font-semibold text-gray-900 dark:text-white py-2 mb-4",
        className
      )}
      style={{
        fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
        fontWeight: '600',
        letterSpacing: '-0.01em'
      }}
    >
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription = ({ children, className }: CardDescriptionProps) => {
  return (
    <p
      className={cn(
        "text-base font-normal text-gray-600 dark:text-gray-400 max-w-2xl mb-8",
        className
      )}
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: '400',
        lineHeight: '1.6'
      }}
    >
      {children}
    </p>
  );
};

interface CardSkeletonContainerProps {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: CardSkeletonContainerProps) => {
  return (
    <div
      className={cn(
        "min-h-[24rem] rounded-2xl z-40 relative overflow-hidden",
        "bg-gradient-to-br from-gray-50/30 via-white/50 to-gray-50/30 dark:from-gray-800/50 dark:via-gray-900/30 dark:to-gray-800/50",
        "border border-gray-100/50 dark:border-gray-700/30",
        "backdrop-blur-sm",
        className,
        showGradient &&
          "[mask-image:radial-gradient(ellipse_at_center,white_0%,white_70%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

export const TechPartnersFeature = () => {
  return (
    <Card className="lg:col-span-2">
      <CardTitle>Technology Partners & Integrations</CardTitle>
      <CardDescription>
        We collaborate with leading technology providers to deliver best-in-class solutions
        that leverage the latest innovations and industry standards.
      </CardDescription>
      <CardSkeletonContainer>
        <TechPartnersSkeleton />
      </CardSkeletonContainer>
    </Card>
  );
};
