import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",

  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter Var", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "sans-serif"],
        serif: ["Lora Var", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        display: ["Inter Var", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        "plus-jakarta-sans-regular": "var(--plus-jakarta-sans-regular-font-family)",
        "semantic-heading-1": "var(--semantic-heading-1-font-family)",
        "semantic-heading-2": "var(--semantic-heading-2-font-family)",
        "semantic-heading-3": "var(--semantic-heading-3-font-family)",
      },
      fontSize: {
        // Fortitude-inspired typography scale
        'xs': ['clamp(0.75rem, 1.8vw, 0.8125rem)', { lineHeight: '1.5', letterSpacing: '-0.01em' }],    // 12-13px
        'sm': ['clamp(0.8125rem, 2.2vw, 0.875rem)', { lineHeight: '1.55', letterSpacing: '-0.011em' }], // 13-14px
        'base': ['clamp(0.875rem, 2.5vw, 1rem)', { lineHeight: '1.6', letterSpacing: '-0.011em' }],      // 14-16px
        'md': ['clamp(1rem, 3vw, 1.125rem)', { lineHeight: '1.55', letterSpacing: '-0.012em' }],        // 16-18px
        'lg': ['clamp(1.125rem, 3.5vw, 1.25rem)', { lineHeight: '1.5', letterSpacing: '-0.014em' }],    // 18-20px (Fortitude medium)
        'xl': ['clamp(1.25rem, 4vw, 1.5rem)', { lineHeight: '1.45', letterSpacing: '-0.017em' }],       // 20-24px
        '2xl': ['clamp(1.5rem, 4.5vw, 1.875rem)', { lineHeight: '1.4', letterSpacing: '-0.019em' }],   // 24-30px
        '3xl': ['clamp(1.875rem, 5.5vw, 2.25rem)', { lineHeight: '1.3', letterSpacing: '-0.021em' }],  // 30-36px (Fortitude large)
        '4xl': ['clamp(2.25rem, 6.5vw, 3rem)', { lineHeight: '1.25', letterSpacing: '-0.025em' }],     // 36-48px
        '5xl': ['clamp(3rem, 8vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.028em' }],          // 48-64px
        '6xl': ['clamp(3.75rem, 10vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.032em' }],       // 60-80px
        '7xl': ['clamp(4.5rem, 12vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.036em' }],       // 72-96px
        '8xl': ['clamp(6rem, 15vw, 8rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],             // 96-128px
        '9xl': ['clamp(8rem, 20vw, 10rem)', { lineHeight: '1', letterSpacing: '-0.045em' }],           // 128-160px
        // Fortitude preset sizes
        'fortitude-sm': ['0.8125rem', { lineHeight: '1.55' }],  // 13px
        'fortitude-md': ['1.25rem', { lineHeight: '1.5' }],     // 20px
        'fortitude-lg': ['2.25rem', { lineHeight: '1.3' }],     // 36px
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        'premium': '-0.011em',
        'display': '-0.025em',
        'headline': '-0.04em',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.1',
        'snug': '1.2',
        'normal': '1.5',
        'relaxed': '1.6',
        'loose': '1.7',
        'premium': '1.7',
        'display': '1.1',
        'headline': '1.2',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        // Fortitude-inspired spacing system
        'responsive-xs': 'clamp(0.25rem, 1vw, 0.5rem)',     // 4-8px
        'responsive-sm': 'clamp(0.44rem, 2vw, 0.75rem)',     // 7-12px
        'responsive-md': 'clamp(0.75rem, 3vw, 1.25rem)',     // 12-20px
        'responsive-lg': 'clamp(1rem, 4vw, 2rem)',           // 16-32px
        'responsive-xl': 'clamp(1.5rem, 6vw, 3rem)',         // 24-48px
        'responsive-2xl': 'clamp(2rem, 8vw, 4rem)',          // 32-64px
        'responsive-3xl': 'clamp(3rem, 12vw, 6rem)',         // 48-96px
        'responsive-4xl': 'clamp(4rem, 16vw, 8rem)',         // 64-128px
        'responsive-5xl': 'clamp(5.06rem, 20vw, 10rem)',     // 81-160px
        // Preset spacing values (Fortitude pattern)
        'preset-1': '0.44rem',   // 7px
        'preset-2': '0.75rem',   // 12px
        'preset-3': '1.19rem',   // 19px
        'preset-4': '1.56rem',   // 25px
        'preset-5': '2.25rem',   // 36px
        'preset-6': '3.19rem',   // 51px
        'preset-7': '5.06rem',   // 81px
      },
      maxWidth: {
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1400px',
        'container-wide': '1600px',
      },
      boxShadow: {
        derek: `0px 0px 0px 1px rgb(0 0 0 / 0.06),
        0px 1px 1px -0.5px rgb(0 0 0 / 0.06),
        0px 3px 3px -1.5px rgb(0 0 0 / 0.06),
        0px 6px 6px -3px rgb(0 0 0 / 0.06),
        0px 12px 12px -6px rgb(0 0 0 / 0.06),
        0px 24px 24px -12px rgb(0 0 0 / 0.06)`,
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "particle-trail": {
          "0%": { transform: "translateY(0) scale(0)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) scale(1)", opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slideDown": {
          "0%": { opacity: "0", transform: "translateY(-10px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "particle-trail": "particle-trail 2s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),

  ],
} satisfies Config

export default config

