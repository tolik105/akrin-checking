import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { prisma } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const leadData = await req.json()

    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
        { status: 400 }
      )
    }

    // Save lead to database
    const lead = await saveLead(leadData)

    // Send notification email
    await sendLeadNotification(leadData)

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      leadId: lead.id
    })

  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to capture lead'
      },
      { status: 500 }
    )
  }
}

async function saveLead(leadData: any) {
  try {
    const lead = await prisma.lead.create({
      data: {
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone || null,
        company: leadData.company,
        role: leadData.role || null,
        challenges: leadData.challenges || null,
        timeline: leadData.timeline || null,
        sessionId: leadData.sessionId,
        source: leadData.source || 'website_form',
        score: calculateLeadScore(leadData),
        status: 'new'
      }
    })
    
    console.log('Lead saved:', lead.id)
    return lead
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}

function calculateLeadScore(leadData: any): number {
  let score = 0
  
  // Company size indicators
  if (leadData.company) score += 10
  if (leadData.role && ['ceo', 'cto', 'it_manager'].includes(leadData.role)) score += 15
  
  // Timeline urgency
  const timelineScores: Record<string, number> = {
    'immediate': 20,
    'quarter': 15,
    'half_year': 10,
    'year': 5
  }
  score += timelineScores[leadData.timeline] || 0
  
  // Has specific challenges
  if (leadData.challenges && leadData.challenges.length > 20) score += 10
  
  return Math.min(score, 100)
}

async function sendLeadNotification(leadData: any) {
  if (!process.env.SMTP_HOST) {
    console.log('Email notification skipped - SMTP not configured')
    return
  }

  try {
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.BUSINESS_EMAIL || process.env.SALES_EMAIL,
      subject: `New Lead: ${leadData.company} - ${leadData.name}`,
      html: `
        <h2>New Lead from Website</h2>
        <p><strong>Name:</strong> ${leadData.name}</p>
        <p><strong>Company:</strong> ${leadData.company}</p>
        <p><strong>Email:</strong> ${leadData.email}</p>
        <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
        <p><strong>Role:</strong> ${leadData.role || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${leadData.timeline || 'Not specified'}</p>
        <p><strong>Challenges:</strong></p>
        <p>${leadData.challenges || 'Not provided'}</p>
        <p><strong>Lead Score:</strong> ${calculateLeadScore(leadData)}/100</p>
        <p><strong>Source:</strong> Website Form</p>
        <p><strong>Session ID:</strong> ${leadData.sessionId}</p>
        <hr>
        <p><small>This is an automated notification from the AKRIN website.</small></p>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log('Lead notification email sent')
  } catch (error) {
    console.error('Email notification error:', error)
    // Don't throw - email failure shouldn't break lead capture
  }
}