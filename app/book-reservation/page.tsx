"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useTranslation } from "react-i18next"
import { useToast } from "@/hooks/use-toast"

export default function BookReservationPage() {
  const { t } = useTranslation('common')
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!date) {
      toast({
        title: "Error",
        description: "Please select a preferred date",
        variant: "destructive",
      })
      return
    }
    
    if (!selectedService) {
      toast({
        title: "Error",
        description: "Please select a service",
        variant: "destructive",
      })
      return
    }
    
    setIsSubmitting(true)
    
    // Store form reference before async operations
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      preferredDate: date.toISOString(),
      service: selectedService,
      message: formData.get('message') as string,
    }
    
    try {
      const response = await fetch('/api/book-reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: result.message,
        })
        // Reset form
        form.reset()
        setDate(undefined)
        setSelectedService('')
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book reservation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">{t('booking.title')}</h1>
          <p className="text-xl mb-8">{t('booking.subtitle')}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>{t('booking.formTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">{t('booking.form.firstName')}</Label>
                    <Input id="first-name" name="firstName" placeholder={t('booking.form.placeholders.firstName')} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">{t('booking.form.lastName')}</Label>
                    <Input id="last-name" name="lastName" placeholder={t('booking.form.placeholders.lastName')} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t('booking.form.email')}</Label>
                  <Input id="email" name="email" type="email" placeholder={t('booking.form.placeholders.email')} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('booking.form.phone')}</Label>
                  <Input id="phone" name="phone" type="tel" placeholder={t('booking.form.placeholders.phone')} required />
                </div>
                <div className="space-y-2">
                  <Label>{t('booking.form.preferredDate')}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>{t('booking.form.placeholders.date')}</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">{t('booking.form.service')}</Label>
                  <Select value={selectedService} onValueChange={setSelectedService} required>
                    <SelectTrigger>
                      <SelectValue placeholder={t('booking.form.placeholders.service')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="managed-it">{t('booking.form.services.managed')}</SelectItem>
                      <SelectItem value="cyber-security">{t('booking.form.services.cyber')}</SelectItem>
                      <SelectItem value="cloud-services">{t('booking.form.services.cloud')}</SelectItem>
                      <SelectItem value="it-consulting">{t('booking.form.services.consulting')}</SelectItem>
                      <SelectItem value="other">{t('booking.form.services.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t('booking.form.additionalInfo')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t('booking.form.placeholders.additionalInfo')}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting || !date || !selectedService}>
                  {isSubmitting ? 'Submitting...' : t('booking.form.submitButton')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

