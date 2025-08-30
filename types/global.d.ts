// Global type declarations

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'consent',
      targetId: string,
      config?: {
        [key: string]: any
      }
    ) => void
  }
}

export {}
