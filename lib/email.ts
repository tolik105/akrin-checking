import * as nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

// Email configuration type
interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

// Email options type
interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

// Create reusable transporter
const createTransporter = (): Transporter => {
  // You can use Gmail, SendGrid, AWS SES, or any SMTP service
  // For now, I'll set up a generic SMTP configuration
  
  const config: EmailConfig = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  }

  return nodemailer.createTransport(config)
}

// Send email function
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // Check if email config exists
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing email configuration in .env.local:')
      console.error('SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'Missing')
      console.error('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Missing')
      console.error('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Missing')
      return false
    }
    
    console.log('Email configuration:')
    console.log('- SMTP Host:', process.env.SMTP_HOST)
    console.log('- SMTP Port:', process.env.SMTP_PORT || '587')
    console.log('- SMTP User:', process.env.SMTP_USER)
    console.log('- Sending to:', options.to)
    
    const transporter = createTransporter()
    
    // Test the connection first
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP connection failed:', verifyError)
      console.error('This usually means:')
      console.error('1. Wrong SMTP credentials (check App Password for Gmail)')
      console.error('2. Firewall blocking the connection')
      console.error('3. Wrong SMTP host or port')
      return false
    }
    
    const mailOptions = {
      from: `"Akrin Website" <${process.env.SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully!')
    console.log('Message ID:', info.messageId)
    console.log('Response:', info.response)
    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    if (error instanceof Error) {
      console.error('Error details:', error.message)
      if (error.message.includes('auth')) {
        console.error('Authentication error - check your Gmail App Password')
      }
    }
    return false
  }
}

// Contact form email template
export function createContactEmailTemplate(data: {
  name: string
  email: string
  message: string
  timestamp: string
}) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #6B46C1; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background-color: white; border: 1px solid #ddd; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
          <div class="field">
            <div class="label">Submitted at:</div>
            <div class="value">${data.timestamp}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the Akrin website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Booking consultation email template
export function createBookingEmailTemplate(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredDate: string
  service: string
  message?: string
  timestamp: string
}) {
  const serviceName = {
    'managed-it': 'Managed IT Services',
    'cyber-security': 'Cyber Security',
    'cloud-services': 'Cloud Services',
    'it-consulting': 'IT Consulting',
    'other': 'Other'
  }[data.service] || data.service

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #6B46C1; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background-color: white; border: 1px solid #ddd; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
        .highlight { background-color: #e7f3ff; border-left: 4px solid #2196F3; padding: 10px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Consultation Booking</h1>
        </div>
        <div class="content">
          <div class="highlight">
            <strong>New consultation request received!</strong><br>
            Please follow up with the client within 24 hours.
          </div>
          
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${data.firstName} ${data.lastName}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          <div class="field">
            <div class="label">Preferred Date:</div>
            <div class="value">${new Date(data.preferredDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</div>
          </div>
          <div class="field">
            <div class="label">Service Interested In:</div>
            <div class="value">${serviceName}</div>
          </div>
          ${data.message ? `
          <div class="field">
            <div class="label">Additional Information:</div>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="label">Submitted at:</div>
            <div class="value">${data.timestamp}</div>
          </div>
        </div>
        <div class="footer">
          <p>This booking was submitted through the Akrin website.</p>
        </div>
      </div>
    </body>
    </html>
  `
}