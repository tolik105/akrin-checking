/**
 * Production-safe logger utility
 * Only logs in development mode to avoid performance overhead and information leakage
 */

const isDev = process.env.NODE_ENV !== 'production'

export const logger = {
  log: (...args: unknown[]) => {
    if (isDev) console.log(...args)
  },
  info: (...args: unknown[]) => {
    if (isDev) console.info(...args)
  },
  warn: (...args: unknown[]) => {
    // Warnings are logged in both dev and prod for debugging
    console.warn(...args)
  },
  error: (...args: unknown[]) => {
    // Errors are always logged
    console.error(...args)
  },
  debug: (...args: unknown[]) => {
    if (isDev) console.debug(...args)
  },
}

export default logger
