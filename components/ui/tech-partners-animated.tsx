"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import { generateLogosForCarousel } from "@/lib/logo-utils";

interface TechPartnerIconProps {
  logo: {
    name: string;
    logo?: string;
    className?: string;
  };
}

const TechPartnerIcon: React.FC<TechPartnerIconProps> = ({ logo }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center h-20 w-20 lg:h-24 lg:w-24 rounded-2xl border-2 bg-white dark:bg-gray-800 relative",
        "border-white/20 dark:border-gray-700/50",
        "shadow-[0px_0px_20px_0px_rgba(59,130,246,0.15)_inset,0px_8px_32px_-8px_rgba(0,0,0,0.3)]",
        "backdrop-blur-xl bg-white/90 dark:bg-gray-800/90",
        "flex-shrink-0",
        "hover:scale-110 transition-all duration-500 ease-out",
        "hover:border-blue-300/40 dark:hover:border-blue-500/40",
        "hover:shadow-[0px_0px_30px_0px_rgba(59,130,246,0.25)_inset,0px_12px_40px_-8px_rgba(0,0,0,0.4)]",
        "group cursor-pointer"
      )}
    >
      {/* Animated glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-[hsl(var(--primary))]/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

      <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-xl overflow-hidden flex items-center justify-center relative z-10">
        {logo.logo ? (
          <img
            src={logo.logo}
            alt={logo.name}
            className={cn(
              "h-10 lg:h-12 w-auto max-w-[90%] object-contain transition-all duration-500",
              "group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110",
              logo.className
            )}
            style={{
              imageRendering: 'crisp-edges',
              WebkitImageRendering: '-webkit-optimize-contrast',
              filter: 'contrast(1.1) saturate(1.3) brightness(1.05)'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<span class="text-xs lg:text-sm font-bold text-gray-800 dark:text-gray-200 text-center px-2" style="font-family: Inter, sans-serif; font-weight: 700;">${logo.name}</span>`;
              }
            }}
          />
        ) : (
          <span className="text-xs lg:text-sm font-bold text-gray-800 dark:text-gray-200 text-center px-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '700'
                }}>
            {logo.name}
          </span>
        )}
      </div>


    </div>
  );
};

export const TechPartnersSkeleton = () => {
  const logos = generateLogosForCarousel();

  // Split logos into two rows for better visual balance
  const firstRowLogos = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRowLogos = logos.slice(Math.ceil(logos.length / 2));

  return (
    <div className="p-8 overflow-hidden h-full relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-[hsl(var(--primary))]/10 to-cyan-50/30 dark:from-blue-900/10 dark:via-[hsl(var(--primary))]/10 dark:to-cyan-900/10 rounded-xl" />

      <div className="flex flex-col gap-8 items-center justify-center h-full relative z-10">
        {/* Enhanced animated connecting lines */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="120"
          viewBox="0 0 80 120"
          fill="none"
          className="absolute left-1/2 -translate-x-[70px] -top-12 text-blue-300/60 dark:text-blue-400/40"
        >
          <path
            d="M1 -80L1 60C1 68.284 7.716 75 16 75H64C72.284 75 79 81.716 79 90L79 120"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.4"
          />
          <motion.path
            d="M1 -80L1 60C1 68.284 7.716 75 16 75H64C72.284 75 79 81.716 79 90L79 120"
            stroke="url(#gradient-1)"
            strokeWidth="3"
          />
          <defs>
            <motion.linearGradient
              initial={{ x1: "0%", y1: "0%", x2: "0%", y2: "0%" }}
              animate={{ x1: "100%", y1: "100%", x2: "120%", y2: "120%" }}
              id="gradient-1"
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <stop stopColor="#3B82F6" stopOpacity={0} />
              <stop offset="0.5" stopColor="#8B5CF6" stopOpacity={0.8} />
              <stop offset="1" stopColor="#06B6D4" stopOpacity={0} />
            </motion.linearGradient>
          </defs>
        </svg>

        {/* Bottom connecting line */}
        <svg
          width="140"
          height="80"
          viewBox="0 0 140 80"
          fill="none"
           className="absolute left-1/2 translate-x-6 -bottom-4 text-[hsl(var(--primary))]/50 dark:text-[hsl(var(--primary))]/40"
        >
          <path
            d="M1 0L1 35C1 43.284 7.716 50 16 50H124C132.284 50 139 56.716 139 65L139 80"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.4"
          />
          <motion.path
            d="M1 0L1 35C1 43.284 7.716 50 16 50H124C132.284 50 139 56.716 139 65L139 80"
            stroke="url(#gradient-2)"
            strokeWidth="3"
          />
          <defs>
            <motion.linearGradient
              initial={{ x1: "0%", y1: "0%", x2: "0%", y2: "0%" }}
              animate={{ x1: "100%", y1: "100%", x2: "120%", y2: "120%" }}
              id="gradient-2"
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
              }}
            >
               <stop stopColor="hsl(var(--primary))" stopOpacity={0} />
              <stop offset="0.5" stopColor="#EC4899" stopOpacity={0.8} />
              <stop offset="1" stopColor="#F59E0B" stopOpacity={0} />
            </motion.linearGradient>
          </defs>
        </svg>

        {/* First row of technology partner icons */}
        <motion.div
          className="flex gap-6 lg:gap-8 items-center justify-center flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {firstRowLogos.map((logo, index) => (
            <motion.div
              key={`first-${index}`}
              initial={{ opacity: 0, scale: 0.6, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4 + (index * 0.1),
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <TechPartnerIcon logo={logo} />
            </motion.div>
          ))}
        </motion.div>

        {/* Second row of technology partner icons */}
        <motion.div
          className="flex gap-6 lg:gap-8 items-center justify-center flex-wrap ml-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {secondRowLogos.map((logo, index) => (
            <motion.div
              key={`second-${index}`}
              initial={{ opacity: 0, scale: 0.6, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.8 + (index * 0.1),
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <TechPartnerIcon logo={logo} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};