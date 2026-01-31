import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email-service'
import { createContactEmailTemplate, createContactEmailTextTemplate } from '@/lib/email-templates'
import { logger } from '@/lib/logger'

interface ContactFormData {
  name: string
  email: string
  message: string
  [key: string]: any
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let body: ContactFormData = { name: '', email: '', message: '' }

    if (contentType.includes('application/json')) {
      body = await request.json()
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData()
      form.forEach((v, k) => (body[k] = v as string))
    } else {
      try { body = await request.json() } catch {
        const form = await request.formData()
        form.forEach((v, k) => (body[k] = v as string))
      }
    }

    const token = body['cf-turnstile-response'] || body['cfTurnstileResponse']
    if (!token) {
      return NextResponse.json({ success: false, error: 'Missing CAPTCHA token' }, { status: 400 })
    }

    const secret = process.env.TURNSTILE_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ success: false, error: 'Server CAPTCHA secret not set' }, { status: 500 })
    }

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token as string })
    })

    const verify = await verifyRes.json()

    if (!verify.success) {
      return NextResponse.json({ success: false, error: 'Invalid CAPTCHA' }, { status: 400 })
    }

    // Existing logic continues
    const timestamp = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Tokyo'
    })

    const emailData = {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp
    }

    const salesEmail = process.env.SALES_EMAIL || 'support@akrin.jp'
    const emailHtml = createContactEmailTemplate(emailData)
    const emailText = createContactEmailTextTemplate(emailData)

    let emailSent = false

    if (!process.env.SMTP_USER || process.env.SMTP_USER === 'your_email@example.com') {
      logger.log('Email not configured - skipping email send')
      emailSent = true
    } else {
      try {
        emailSent = await sendEmail({
          to: salesEmail,
          subject: `AKRIN Contact Form - ${body.name}`,
          html: emailHtml,
          text: emailText,
          replyTo: body.email
        })

        if (!emailSent) {
          logger.error('Email function returned false')
        } else {
          logger.log('Email sent successfully')
        }
      } catch (emailError) {
        logger.error('Email sending error:', emailError)
        // Continue anyway - don't fail the whole submission
      }
    }

    logger.log('Contact form submission received')

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you soon!' },
      { status: 200 }
    )
  } catch (error) {
    logger.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}