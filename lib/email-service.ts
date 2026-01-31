import { logger } from './logger'

// Helper function to extract plain text from HTML
function extractTextFromHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
    .replace(/&amp;/g, '&') // Replace &amp; with &
    .replace(/&lt;/g, '<') // Replace &lt; with <
    .replace(/&gt;/g, '>') // Replace &gt; with >
    .replace(/&quot;/g, '"') // Replace &quot; with "
    .replace(/&#39;/g, "'") // Replace &#39; with '
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim()
}

// Simple email service for Next.js
export async function sendEmail(options: {
  to: string
  subject: string
  html: string
  text?: string
  replyTo?: string
}): Promise<boolean> {
  try {
    // Dynamic import to avoid Next.js bundling issues
    const { default: nodemailer } = await import('nodemailer')
    
    // Check if email config exists
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing email configuration in .env.local:')
      console.error('SMTP_HOST:', process.env.SMTP_HOST ? 'Set' : 'Missing')
      console.error('SMTP_USER:', process.env.SMTP_USER ? 'Set' : 'Missing')
      console.error('SMTP_PASS:', process.env.SMTP_PASS ? 'Set' : 'Missing')
      return false
    }
    
    logger.log('Email configuration:')
    logger.log('- SMTP Host:', process.env.SMTP_HOST)
    logger.log('- SMTP Port:', process.env.SMTP_PORT || '587')
    logger.log('- SMTP User:', process.env.SMTP_USER ? '[SET]' : '[MISSING]')
    logger.log('- Sending to:', options.to)
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
    
    // Test the connection first
    try {
      await transporter.verify()
      logger.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP connection failed:', verifyError)
      console.error('This usually means:')
      console.error('1. Wrong SMTP credentials (check App Password for Gmail)')
      console.error('2. Firewall blocking the connection')
      console.error('3. Wrong SMTP host or port')
      return false
    }
    
    // Send email with improved headers for better deliverability
    const mailOptions = {
      from: `"AKRIN Contact Form" <${process.env.SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || extractTextFromHtml(options.html), // Add plain text version
      replyTo: options.replyTo,
      // Add headers to improve deliverability
      headers: {
        'X-Mailer': 'AKRIN Website Contact Form',
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal',
        'List-Unsubscribe': '<mailto:unsubscribe@akrin.jp>',
        'Return-Path': process.env.SMTP_USER,
        'Message-ID': `<${Date.now()}.${Math.random().toString(36).substr(2, 9)}@akrin.jp>`,
        'Auto-Submitted': 'auto-generated',
      },
      // Add envelope settings
      envelope: {
        from: process.env.SMTP_USER,
        to: options.to
      }
    }

    logger.log('Sending email:', { to: mailOptions.to, subject: mailOptions.subject })

    // Check if the recipient domain exists
    const recipientDomain = options.to.split('@')[1]
    logger.log('Recipient domain:', recipientDomain)

    const info = await transporter.sendMail(mailOptions)

    logger.log('Email sent successfully, Message ID:', info.messageId)
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
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          margin: 0;
          padding: 0;
          background-color: #f5f5f7;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        .wrapper {
          background-color: #f5f5f7;
          padding: 40px 20px;
        }
        .container { 
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          overflow: hidden;
        }
        .header { 
          background: #ffffff;
          padding: 40px 40px 30px;
          border-bottom: 1px solid #e5e5e7;
        }
        .logo-container {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          max-width: 150px;
          height: auto;
        }
        .header-text {
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }
        .header .subtitle {
          margin: 8px 0 0;
          font-size: 16px;
          color: #6e6e73;
        }
        .content { 
          padding: 40px;
          background: #ffffff;
        }
        .section {
          margin-bottom: 32px;
        }
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }
        .section-icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          flex-shrink: 0;
        }
        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }
        .info-card {
          background: #f5f5f7;
          border: 1px solid #e5e5e7;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 16px;
        }
        .info-label {
          font-size: 12px;
          font-weight: 600;
          color: #6e6e73;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .info-value {
          font-size: 16px;
          color: #1a1a1a;
          font-weight: 500;
        }
        .info-value a {
          color: #7A28FF;
          text-decoration: none;
        }
        .info-value a:hover {
          text-decoration: underline;
        }
        .message-section {
          background: #f5f5f7;
          border: 1px solid #e5e5e7;
          border-radius: 8px;
          padding: 24px;
        }
        .message-content {
          font-size: 15px;
          line-height: 1.8;
          color: #1a1a1a;
        }
        .action-section {
          margin: 40px 0;
          text-align: center;
        }
        .button {
          display: inline-block;
          padding: 14px 32px;
          background: #7A28FF;
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: background 0.2s ease;
        }
        .button:hover {
          background: #6B24E6;
        }
        .metadata {
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid #e5e5e7;
        }
        .metadata-grid {
          display: table;
          width: 100%;
        }
        .metadata-row {
          display: table-row;
        }
        .metadata-label,
        .metadata-value {
          display: table-cell;
          padding: 8px 0;
          font-size: 14px;
        }
        .metadata-label {
          color: #6e6e73;
          width: 140px;
        }
        .metadata-value {
          color: #1a1a1a;
        }
        .footer { 
          background: #1a1a1a;
          color: #ffffff;
          padding: 40px;
          text-align: center;
        }
        .footer-logo {
          margin-bottom: 20px;
        }
        .footer-text {
          font-size: 14px;
          color: #a1a1a6;
          margin: 0 0 8px;
        }
        .footer-links {
          margin-top: 20px;
        }
        .footer-links a {
          color: #7A28FF;
          text-decoration: none;
          margin: 0 12px;
          font-size: 14px;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .company-info {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #333;
          font-size: 12px;
          color: #6e6e73;
        }
        @media only screen and (max-width: 600px) {
          .header, .content, .footer {
            padding: 24px;
          }
          .button {
            display: block;
            width: 100%;
            box-sizing: border-box;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="logo-container">
              <svg width="150" height="24" viewBox="0 0 499 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.766 53.642H42.452L28.235 78.074H0.998L14.766 53.642Z" fill="#7A28FF" fill-opacity="0.9"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5 0.975L88.098 77.928H56.969L27.936 28.187L43.5 0.975Z" fill="#1a1a1a"/>
                  <path d="M98.966 79.561V33.016H111.603V51.834H112.239L126.239 33.016H140.966L125.239 53.743L141.33 79.561H126.239L115.785 62.106L111.603 67.561V79.561H98.966ZM144.716 79.561V33.016H164.807C168.262 33.016 171.285 33.644 173.876 34.902C176.467 36.159 178.482 37.97 179.921 40.334C181.36 42.697 182.08 45.531 182.08 48.834C182.08 52.167 181.338 54.978 179.853 57.266C178.383 59.553 176.315 61.281 173.648 62.447C170.997 63.614 167.898 64.197 164.353 64.197H152.353V54.379H161.807C163.292 54.379 164.557 54.197 165.603 53.834C166.663 53.455 167.474 52.856 168.035 52.038C168.61 51.22 168.898 50.152 168.898 48.834C168.898 47.5 168.61 46.417 168.035 45.584C167.474 44.735 166.663 44.114 165.603 43.72C164.557 43.311 163.292 43.106 161.807 43.106H157.353V79.561H144.716ZM171.989 58.197L183.626 79.561H169.898L158.535 58.197H171.989ZM200.103 33.016V79.561H187.466V33.016H200.103ZM246.364 33.016V79.561H235.819L219.001 55.106H218.728V79.561H206.091V33.016H216.819L233.364 57.379H233.728V33.016H246.364Z" fill="#1a1a1a"/>
                </g>
              </svg>
            </div>
            <div class="header-text">
              <h1>New Contact Form Submission</h1>
              <p class="subtitle">Website inquiry received at akrin.jp</p>
            </div>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 class="section-title">Contact Information</h2>
              </div>
              
              <div class="info-card">
                <div class="info-label">Name</div>
                <div class="info-value">${data.name}</div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Email Address</div>
                <div class="info-value">
                  <a href="mailto:${data.email}">${data.email}</a>
                </div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-header">
                <svg class="section-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 9L12 13L17 9M21 16.5C21 17.9045 21 18.6067 20.7822 19.1528C20.5905 19.6422 20.2837 20.0799 19.886 20.4276C19.4306 20.8243 18.8168 20.9869 17.5892 21.3121L13.5892 22.3121C12.8221 22.5197 12.4385 22.6236 12.046 22.6207C11.6981 22.6181 11.3546 22.5432 11.0365 22.4006C10.6767 22.2392 10.3515 21.9767 9.70104 21.4518L6.11396 18.5482C5.46351 18.0233 5.13828 17.7608 4.88902 17.4343C4.66784 17.1442 4.49638 16.8195 4.38134 16.473C4.25 16.077 4.20337 15.6445 4.11011 14.7796L3.68011 10.7796C3.56722 9.73246 3.51078 9.20891 3.61184 8.73004C3.70106 8.30629 3.88147 7.9072 4.14114 7.56031C4.43671 7.16378 4.86387 6.86571 5.71818 6.26956L8.50441 4.33464C9.15513 3.87673 9.48049 3.64778 9.83546 3.51641C10.1477 3.40023 10.4769 3.33804 10.8098 3.33246C11.1882 3.32617 11.5691 3.42243 12.3308 3.61494L16.3308 4.61494C17.5585 4.92425 18.1723 5.07891 18.6277 5.41403C19.0254 5.70703 19.3455 6.09053 19.5607 6.53063C19.8054 7.02832 19.8491 7.63769 19.9366 8.85641L20 9.77277" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 class="section-title">Message</h2>
              </div>
              
              <div class="message-section">
                <div class="message-content">
                  ${data.message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            
            <div class="action-section">
              <a href="mailto:${data.email}?subject=Re: Your inquiry to Akrin Technologies&body=Dear ${data.name},%0D%0A%0D%0AThank you for contacting Akrin Technologies. We have received your inquiry and will respond within 24 hours.%0D%0A%0D%0ABest regards,%0D%0AAkrin Team" class="button">
                Reply to ${data.name}
              </a>
            </div>
            
            <div class="metadata">
              <div class="metadata-grid">
                <div class="metadata-row">
                  <div class="metadata-label">Date Received</div>
                  <div class="metadata-value">${data.timestamp}</div>
                </div>
                <div class="metadata-row">
                  <div class="metadata-label">Source</div>
                  <div class="metadata-value">Contact Form - akrin.jp</div>
                </div>
                <div class="metadata-row">
                  <div class="metadata-label">Priority</div>
                  <div class="metadata-value">Normal</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <div class="footer-logo">
              <svg width="120" height="20" viewBox="0 0 499 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.766 53.642H42.452L28.235 78.074H0.998L14.766 53.642Z" fill="#7A28FF" fill-opacity="0.9"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.5 0.975L88.098 77.928H56.969L27.936 28.187L43.5 0.975Z" fill="#ffffff"/>
                  <path d="M98.966 79.561V33.016H111.603V51.834H112.239L126.239 33.016H140.966L125.239 53.743L141.33 79.561H126.239L115.785 62.106L111.603 67.561V79.561H98.966ZM144.716 79.561V33.016H164.807C168.262 33.016 171.285 33.644 173.876 34.902C176.467 36.159 178.482 37.97 179.921 40.334C181.36 42.697 182.08 45.531 182.08 48.834C182.08 52.167 181.338 54.978 179.853 57.266C178.383 59.553 176.315 61.281 173.648 62.447C170.997 63.614 167.898 64.197 164.353 64.197H152.353V54.379H161.807C163.292 54.379 164.557 54.197 165.603 53.834C166.663 53.455 167.474 52.856 168.035 52.038C168.61 51.22 168.898 50.152 168.898 48.834C168.898 47.5 168.61 46.417 168.035 45.584C167.474 44.735 166.663 44.114 165.603 43.72C164.557 43.311 163.292 43.106 161.807 43.106H157.353V79.561H144.716ZM171.989 58.197L183.626 79.561H169.898L158.535 58.197H171.989ZM200.103 33.016V79.561H187.466V33.016H200.103ZM246.364 33.016V79.561H235.819L219.001 55.106H218.728V79.561H206.091V33.016H216.819L233.364 57.379H233.728V33.016H246.364Z" fill="#ffffff"/>
                </g>
              </svg>
            </div>
            <p class="footer-text">This is an automated notification from your website</p>
            <p class="footer-text">Please respond to all inquiries within 24 hours</p>
            
            <div class="footer-links">
              <a href="https://akrin.jp">Website</a>
              <a href="mailto:sales@akrin.jp">Email</a>
              <a href="tel:+81-123-456-7890">Call</a>
            </div>
            
            <div class="company-info">
              Akrin Technologies Co., Ltd.<br>
              Tokyo, Japan<br>
              © 2025 Akrin Technologies. All rights reserved.
            </div>
          </div>
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

  const formattedDate = new Date(data.preferredDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          margin: 0;
          padding: 0;
          background-color: #f5f5f7;
        }
        .wrapper {
          background-color: #f5f5f7;
          padding: 40px 20px;
        }
        .container { 
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header { 
          background: linear-gradient(135deg, #6B46C1 0%, #9333EA 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.5px;
        }
        .header p {
          margin: 10px 0 0;
          font-size: 16px;
          opacity: 0.9;
        }
        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          margin-top: 15px;
        }
        .urgent-notice {
          background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
          color: #1a1a1a;
          padding: 20px;
          margin: 20px 30px;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
        }
        .urgent-notice .icon {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .content { 
          padding: 40px 30px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }
        .info-card {
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          padding: 20px;
        }
        .info-card.full-width {
          grid-column: 1 / -1;
        }
        .info-label {
          font-weight: 600;
          color: #6B46C1;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .info-value {
          color: #1a1a1a;
          font-size: 16px;
          line-height: 1.4;
        }
        .info-value a {
          color: #6B46C1;
          text-decoration: none;
          font-weight: 500;
        }
        .info-value a:hover {
          text-decoration: underline;
        }
        .service-badge {
          display: inline-block;
          background: #6B46C1;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        .date-highlight {
          background: #e7f3ff;
          border: 2px solid #2196F3;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
          margin: 20px 0;
        }
        .date-highlight .icon {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .date-highlight .date {
          font-size: 18px;
          font-weight: 600;
          color: #2196F3;
        }
        .message-section {
          background: #f8f9fa;
          border-left: 3px solid #6B46C1;
          padding: 20px;
          margin: 20px 0;
          border-radius: 0 8px 8px 0;
        }
        .action-buttons {
          margin: 30px 0;
          text-align: center;
        }
        .button {
          display: inline-block;
          padding: 12px 30px;
          background: #6B46C1;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          margin: 0 10px;
          transition: all 0.3s ease;
        }
        .button:hover {
          background: #553392;
          transform: translateY(-1px);
        }
        .button.secondary {
          background: #28a745;
        }
        .button.secondary:hover {
          background: #218838;
        }
        .footer { 
          background-color: #f8f9fa;
          padding: 25px 30px;
          text-align: center;
          border-top: 1px solid #e9ecef;
        }
        .footer p {
          margin: 0;
          color: #6c757d;
          font-size: 14px;
        }
        .footer .logo {
          font-weight: 600;
          color: #6B46C1;
          font-size: 18px;
          margin-bottom: 10px;
        }
        @media only screen and (max-width: 600px) {
          .container {
            border-radius: 0;
          }
          .header, .content, .footer {
            padding: 20px;
          }
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <h1>📅 New Consultation Booking</h1>
            <p>A potential client has requested a consultation</p>
            <span class="badge">Akrin Technologies</span>
          </div>
          
          <div class="urgent-notice">
            <div class="icon">⚡</div>
            <div>URGENT: Please contact this client within 24 hours</div>
          </div>
          
          <div class="content">
            <div class="info-grid">
              <div class="info-card">
                <div class="info-label">Client Name</div>
                <div class="info-value">
                  <strong>${data.firstName} ${data.lastName}</strong>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Email Address</div>
                <div class="info-value">
                  <a href="mailto:${data.email}">${data.email}</a>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Phone Number</div>
                <div class="info-value">
                  <a href="tel:${data.phone}">${data.phone}</a>
                </div>
              </div>
              
              <div class="info-card">
                <div class="info-label">Service Requested</div>
                <div class="info-value">
                  <span class="service-badge">${serviceName}</span>
                </div>
              </div>
            </div>
            
            <div class="date-highlight">
              <div class="icon">📅</div>
              <div class="info-label">Preferred Consultation Date</div>
              <div class="date">${formattedDate}</div>
            </div>
            
            ${data.message ? `
            <div class="message-section">
              <div class="info-label">Additional Information from Client</div>
              <div class="info-value" style="margin-top: 10px;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}
            
            <div class="action-buttons">
              <a href="mailto:${data.email}?subject=Re: Your consultation request with Akrin Technologies&body=Dear ${data.firstName},%0D%0A%0D%0AThank you for your interest in ${serviceName}. I would be happy to schedule a consultation with you.%0D%0A%0D%0ARegarding your preferred date of ${formattedDate}, I have the following time slots available:%0D%0A%0D%0A" class="button">
                📧 Reply to Client
              </a>
              <a href="tel:${data.phone}" class="button secondary">
                📞 Call Client
              </a>
            </div>
            
            <div class="info-card full-width" style="margin-top: 20px;">
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 5px 0; color: #6c757d;">Submitted:</td>
                  <td style="padding: 5px 0;">${data.timestamp}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #6c757d;">Form:</td>
                  <td style="padding: 5px 0;">Book Consultation Page</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #6c757d;">Lead Score:</td>
                  <td style="padding: 5px 0;">⭐⭐⭐⭐⭐ High Priority</td>
                </tr>
              </table>
            </div>
          </div>
          
          <div class="footer">
            <div class="logo">AKRIN</div>
            <p>This is an automated notification from your website booking system.</p>
            <p style="margin-top: 10px; font-size: 12px;">
              Follow up within 24 hours for best conversion • <a href="https://akrin.com" style="color: #6B46C1;">akrin.com</a>
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}