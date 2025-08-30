"use client"

import { useEffect, useState } from "react"

interface BreakpointInfo {
  name: string
  width: number
  active: boolean
}

export function ResponsiveTest() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const breakpoints: BreakpointInfo[] = [
    { name: "xs", width: 475, active: windowWidth >= 475 },
    { name: "sm", width: 640, active: windowWidth >= 640 },
    { name: "md", width: 768, active: windowWidth >= 768 },
    { name: "lg", width: 1024, active: windowWidth >= 1024 },
    { name: "xl", width: 1280, active: windowWidth >= 1280 },
    { name: "2xl", width: 1536, active: windowWidth >= 1536 },
  ]

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "R") {
        e.preventDefault()
        setIsVisible(!isVisible)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isVisible])

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-[9999] opacity-30 hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-purple-600 text-white px-3 py-1 rounded text-xs font-mono"
          title="Show responsive debug info (Ctrl+Shift+R)"
        >
          📱
        </button>
      </div>
    )
  }

  return (
    <div className="fixed top-4 right-4 z-[9999] bg-black/90 text-white p-4 rounded-lg shadow-xl font-mono text-sm backdrop-blur">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold">Responsive Debug</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="text-green-400">
          Width: {windowWidth}px
        </div>
        
        <div className="space-y-1">
          {breakpoints.map((bp) => (
            <div
              key={bp.name}
              className={`flex justify-between ${
                bp.active ? "text-green-400" : "text-gray-500"
              }`}
            >
              <span>{bp.name}:</span>
              <span>{bp.width}px {bp.active ? "✓" : ""}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-gray-600 space-y-1">
          <div className="text-xs text-gray-400">Current classes:</div>
          <div className="text-xs">
            <span className="inline lg:hidden text-blue-400">Mobile/Tablet</span>
            <span className="hidden lg:inline text-green-400">Desktop</span>
          </div>
        </div>

        <div className="text-xs text-gray-500 pt-2 border-t border-gray-600">
          Press Ctrl+Shift+R to toggle
        </div>
      </div>
    </div>
  )
}

// Component to test responsive spacing
export function ResponsiveSpacingTest() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-responsive-md">
      <div className="container">
        <div className="space-y-responsive-md">
          <h2 className="text-2xl font-bold">Responsive Spacing Test</h2>
          
          <div className="grid-responsive-3">
            <div className="bg-white p-responsive-sm rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-responsive-sm">Card 1</h3>
              <p className="text-gray-600">This tests responsive grid and spacing.</p>
            </div>
            <div className="bg-white p-responsive-sm rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-responsive-sm">Card 2</h3>
              <p className="text-gray-600">Resize the window to see changes.</p>
            </div>
            <div className="bg-white p-responsive-sm rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-responsive-sm">Card 3</h3>
              <p className="text-gray-600">All spacing scales with viewport.</p>
            </div>
          </div>

          <div className="section-padding bg-white rounded-lg">
            <h3 className="text-xl font-bold mb-responsive-md">Section Padding Test</h3>
            <p className="text-gray-600">This section uses responsive padding that scales from 2rem to 6rem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}