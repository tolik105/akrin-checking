"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendlyPopupButton } from "@/components/calendly-widget"

export default function ContactClient() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-light mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with our team.</p>
        </div>
      </section>
    </main>
  )
}