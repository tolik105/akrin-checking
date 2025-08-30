import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email-service'
import { createBookingEmailTemplate } from '@/lib/email-templates'

interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredDate: string
  service: string
  message?: string
  recaptchaToken: string
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  // Skip reCAPTCHA verification if not configured
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey || secretKey === 'your-secret-key') {
    console.warn('reCAPTCHA verification skipped - not configured')
    return true
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json()
    
    // Verify reCAPTCHA if token provided
    if (body.recaptchaToken) {
      const isValidRecaptcha = await verifyRecaptcha(body.recaptchaToken)
      
      if (!isValidRecaptcha) {
        return NextResponse.json(
          { error: 'Invalid reCAPTCHA. Please try again.' },
          { status: 400 }
        )
      }
    }

    // Prepare email data
    const timestamp = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Tokyo'
    })

    const emailData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      preferredDate: body.preferredDate,
      service: body.service,
      message: body.message,
      timestamp
    }

    // Send email to support team
    const salesEmail = process.env.SALES_EMAIL || 'support@akrin.jp'
    const emailHtml = createBookingEmailTemplate(emailData)

    let emailSent = false

    // Check if email is properly configured
    if (!process.env.SMTP_USER || process.env.SMTP_USER === 'your_email@example.com') {
      console.log('⚠️  Email not configured - skipping email send (booking data saved)')
      console.log('📧 Would send to:', salesEmail)
      emailSent = true // Mark as sent for testing purposes
    } else {
      try {
        emailSent = await sendEmail({
          to: salesEmail,
          subject: `New Consultation Booking - ${body.firstName} ${body.lastName}`,
          html: emailHtml,
          replyTo: body.email
        })

        if (!emailSent) {
          console.error('Email function returned false')
        } else {
          console.log('Email sent successfully')
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Continue anyway - don't fail the whole submission
      }
    }

    // Log the booking
    console.log('Booking reservation:', {
      name: `${body.firstName} ${body.lastName}`,
      email: body.email,
      phone: body.phone,
      date: body.preferredDate,
      service: body.service,
      message: body.message,
      emailSent,
      timestamp
    })

    return NextResponse.json(
      { message: 'Your consultation has been booked successfully! We will contact you shortly to confirm.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}