"use client"

import { useEffect, useState } from 'react'

export function DataStream() {
  const [streams, setStreams] = useState<Array<{ id: number; left: string }>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setStreams(prev => {
        const newStreams = [...prev]

        // Add new stream
        if (Math.random() > 0.7) {
          newStreams.push({
            id: Date.now(),
            left: `${Math.random() * 100}%`
          })
        }

        // Remove old streams
        return newStreams.slice(-10)
      })
    }, 500)

    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streams.map(stream => (
        <div
          key={stream.id}
          className="absolute top-0 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent"
          style={{
            left: stream.left,
            animation: 'dataFlow 3s linear forwards'
          }}
        />
      ))}
      <style jsx>{`
        @keyframes dataFlow {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}