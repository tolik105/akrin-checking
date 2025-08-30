// Professional email templates for AKRIN Technologies - Brand Aligned

// Parse structured contact form data from message field
function parseContactMessage(message: string) {
  const lines = message.split('\n');
  const data: any = {};

  for (const line of lines) {
    if (line.startsWith('Company: ')) {
      data.company = line.replace('Company: ', '').trim();
    } else if (line.startsWith('Phone: ')) {
      data.phone = line.replace('Phone: ', '').trim();
    } else if (line.startsWith('Company Size: ')) {
      data.companySize = line.replace('Company Size: ', '').trim();
    } else if (line.startsWith('Services: ')) {
      data.services = line.replace('Services: ', '').trim();
    } else if (line.startsWith('Message:')) {
      // Everything after "Message:" is the actual message
      const messageIndex = lines.indexOf(line);
      data.actualMessage = lines.slice(messageIndex + 1).join('\n').trim();
      break;
    }
  }

  return data;
}

// AKRIN-branded contact form email template - Enterprise-grade professional design
export function createContactEmailTemplate(data: {
  name: string
  email: string
  message: string
  timestamp: string
}) {
  const parsedData = parseContactMessage(data.message);

  return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="format-detection" content="telephone=no">
      <meta name="format-detection" content="date=no">
      <meta name="format-detection" content="address=no">
      <meta name="format-detection" content="email=no">
      <title>New Contact Form Submission - AKRIN</title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            <o:AllowPNG/>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
      <style type="text/css">
        /* Reset and base styles */
        * { box-sizing: border-box; }
        body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }

        /* Typography */
        .akrin-font { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        .akrin-title { font-weight: 700; letter-spacing: -0.025em; line-height: 1.2; }
        .akrin-subtitle { font-weight: 600; letter-spacing: -0.015em; line-height: 1.3; }
        .akrin-body { font-weight: 400; line-height: 1.6; }
        .akrin-label { font-weight: 600; letter-spacing: 0.025em; text-transform: uppercase; }

        /* Colors - Exact AKRIN brand specifications */
        .akrin-purple { color: #7A28FF; }
        .akrin-purple-bg { background-color: #7A28FF; }
        .akrin-purple-gradient { background: linear-gradient(135deg, #7A28FF 0%, #6220cc 100%); }
        .akrin-black { color: #1a1a1a; }
        .akrin-gray-50 { color: #f8f8f8; }
        .akrin-gray-100 { color: #f0f0f0; }
        .akrin-gray-600 { color: #404040; }
        .akrin-gray-700 { color: #303030; }

        /* Responsive design */
        @media only screen and (max-width: 600px) {
          .container { width: 100% !important; margin: 0 !important; border-radius: 0 !important; }
          .header-padding { padding: 48px 24px !important; }
          .content-padding { padding: 40px 24px !important; }
          .footer-padding { padding: 32px 24px !important; }
          .logo-container { margin-bottom: 24px !important; }
          .header-title { font-size: 28px !important; }
          .section-title { font-size: 20px !important; }
          .field-table { width: 100% !important; }
          .field-label { padding: 12px 16px !important; font-size: 12px !important; }
          .field-value { padding: 12px 16px !important; font-size: 15px !important; }
          .action-buttons { flex-direction: column !important; gap: 12px !important; }
          .action-button { width: 100% !important; text-align: center !important; }
          .message-content { padding: 20px !important; }
        }

        @media only screen and (max-width: 480px) {
          .wrapper-padding { padding: 16px 8px !important; }
          .header-title { font-size: 24px !important; }
          .header-subtitle { font-size: 14px !important; }
          .logo-size { width: 120px !important; height: auto !important; }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .email-body { background-color: #1a1a1a !important; }
          .container { background-color: #ffffff !important; }
        }
      </style>
    </head>
    <body class="email-body akrin-font" style="margin: 0; padding: 0; background-color: #f8f8f8; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
      <!-- Email Wrapper -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f8f8;">
        <tr>
          <td class="wrapper-padding" style="padding: 40px 20px;">
            <!-- Container -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" class="container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">

              <!-- AKRIN Header with Logo -->
              <tr>
                <td class="header-padding akrin-purple-gradient" style="padding: 56px 40px; text-align: center; color: #ffffff; position: relative;">
                  <!-- AKRIN Logo - Exact from website -->
                  <div class="logo-container" style="margin-bottom: 32px;">
                    <svg class="logo-size" width="160" height="32" viewBox="192 557 499 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25));">
                      <g clipPath="url(#clip0_email_logo)">
                        <!-- Purple accent triangle -->
                        <path fillRule="evenodd" clipRule="evenodd" d="M206.766 610.642H234.452L220.235 635.074H192.998L206.766 610.642Z" fill="#ffffff" fillOpacity="0.95"/>
                        <!-- Black A shape -->
                        <path fillRule="evenodd" clipRule="evenodd" d="M235.5 557.975L280.098 634.928H248.969L219.936 585.187L235.5 557.975Z" fill="#ffffff"/>
                        <!-- AKRIN text -->
                        <text x="320" y="600" fontSize="28" fontWeight="700" fill="#ffffff" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letterSpacing="-0.5px">AKRIN</text>
                      </g>
                      <defs>
                        <clipPath id="clip0_email_logo">
                          <rect width="499" height="80" fill="none" transform="translate(192 557)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <h1 class="header-title akrin-title" style="margin: 0 0 12px 0; font-size: 32px; font-weight: 700; color: #ffffff; letter-spacing: -0.025em; line-height: 1.2;">New Contact Inquiry</h1>
                  <p class="header-subtitle akrin-body" style="margin: 0; font-size: 16px; color: rgba(255, 255, 255, 0.9); font-weight: 400; line-height: 1.6;">Professional IT Services Contact Form</p>
                </td>
              </tr>

              <!-- Content Section -->
              <tr>
                <td class="content-padding" style="padding: 48px 40px; background-color: #ffffff;">

                  <!-- Contact Information Section -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 40px;">
                    <tr>
                      <td>
                        <h2 class="section-title akrin-subtitle akrin-black" style="margin: 0 0 28px 0; font-size: 22px; font-weight: 600; color: #1a1a1a; letter-spacing: -0.015em; line-height: 1.3;">Contact Information</h2>

                        <!-- Professional Contact Information Table -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" class="field-table" style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);">

                          <!-- Name Row -->
                          <tr style="border-bottom: 1px solid #f3f4f6;">
                            <td class="field-label akrin-label" style="padding: 18px 24px; font-weight: 600; color: #6b7280; font-size: 13px; background-color: #f9fafb; width: 160px; vertical-align: top; letter-spacing: 0.025em; text-transform: uppercase;">Full Name</td>
                            <td class="field-value akrin-body" style="padding: 18px 24px; color: #1a1a1a; font-size: 16px; font-weight: 500; line-height: 1.6;">${data.name}</td>
                          </tr>

                          <!-- Email Row -->
                          <tr style="border-bottom: 1px solid #f3f4f6;">
                            <td class="field-label akrin-label" style="padding: 18px 24px; font-weight: 600; color: #6b7280; font-size: 13px; background-color: #f9fafb; width: 160px; vertical-align: top; letter-spacing: 0.025em; text-transform: uppercase;">Email Address</td>
                            <td class="field-value akrin-body" style="padding: 18px 24px; color: #1a1a1a; font-size: 16px; font-weight: 500; line-height: 1.6;">
                              <a href="mailto:${data.email}" class="akrin-purple" style="color: #7A28FF; text-decoration: none; font-weight: 600; border-bottom: 1px solid transparent; transition: border-color 0.2s ease;">${data.email}</a>
                            </td>
                          </tr>

                          ${parsedData.company ? `
                          <!-- Company Row -->
                          <tr style="border-bottom: 1px solid #f3f4f6;">
                            <td class="field-label akrin-label" style="padding: 18px 24px; font-weight: 600; color: #6b7280; font-size: 13px; background-color: #f9fafb; width: 160px; vertical-align: top; letter-spacing: 0.025em; text-transform: uppercase;">Company</td>
                            <td class="field-value akrin-body" style="padding: 18px 24px; color: #1a1a1a; font-size: 16px; font-weight: 500; line-height: 1.6;">${parsedData.company}</td>
                          </tr>
                          ` : ''}

                          ${parsedData.phone ? `
                          <!-- Phone Row -->
                          <tr style="border-bottom: 1px solid #f3f4f6;">
                            <td class="field-label akrin-label" style="padding: 18px 24px; font-weight: 600; color: #6b7280; font-size: 13px; background-color: #f9fafb; width: 160px; vertical-align: top; letter-spacing: 0.025em; text-transform: uppercase;">Phone Number</td>
                            <td class="field-value akrin-body" style="padding: 18px 24px; color: #1a1a1a; font-size: 16px; font-weight: 500; line-height: 1.6;">
                              <a href="tel:${parsedData.phone}" class="akrin-purple" style="color: #7A28FF; text-decoration: none; font-weight: 600;">${parsedData.phone}</a>
                            </td>
                          </tr>
                          ` : ''}

                          ${parsedData.companySize ? `
                          <!-- Company Size Row -->
                          <tr style="border-bottom: 1px solid #f3f4f6;">
                            <td class="field-label akrin-label" style="padding: 18px 24px; font-weight: 600; color: #6b7280; font-size: 13px; background-color: #f9fafb; width: 160px; vertical-align: top; letter-spacing: 0.025em; text-transform: uppercase;">Company Size</td>
                            <td class="field-value akrin-body" style="padding: 18px 24px; color: #1a1a1a; font-size: 16px; font-weight: 500; line-height: 1.6;">
                              <span class="akrin-purple-bg" style="background-color: #7A28FF; color: #ffffff; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block;">${parsedData.companySize}</span>
                            </td>
                          </tr>
                          ` : ''}

                          ${parsedData.services ? `
                          <!-- Services Row -->
                          <tr style="border-bottom: 1px solid #f3f4f6;">
                            <td class="field-label akrin-label" style="padding: 18px 24px; font-weight: 600; color: #6b7280; font-size: 13px; background-color: #f9fafb; width: 160px; vertical-align: top; letter-spacing: 0.025em; text-transform: uppercase;">Interested Services</td>
                            <td class="field-value akrin-body" style="padding: 18px 24px; color: #1a1a1a; font-size: 16px; font-weight: 500; line-height: 1.6;">${parsedData.services}</td>
                          </tr>
                          ` : ''}

                          <!-- Timestamp Row -->
                          <tr>
                            <td class="field-label akrin-label" style="padding: 18px 24px; font-weight: 600; color: #6b7280; font-size: 13px; background-color: #f9fafb; width: 160px; vertical-align: top; letter-spacing: 0.025em; text-transform: uppercase;">Submitted</td>
                            <td class="field-value akrin-body" style="padding: 18px 24px; color: #1a1a1a; font-size: 16px; font-weight: 500; line-height: 1.6;">${data.timestamp}</td>
                          </tr>

                        </table>
                      </td>
                    </tr>
                  </table>

                  ${parsedData.actualMessage ? `
                  <!-- Message Section -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 40px;">
                    <tr>
                      <td>
                        <h2 class="section-title akrin-subtitle akrin-black" style="margin: 0 0 20px 0; font-size: 22px; font-weight: 600; color: #1a1a1a; letter-spacing: -0.015em; line-height: 1.3;">Message</h2>

                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                          <tr>
                            <td class="message-content" style="padding: 28px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; border-left: 4px solid #7A28FF;">
                              <div class="akrin-body" style="color: #374151; font-size: 16px; font-weight: 400; line-height: 1.7; white-space: pre-wrap; margin: 0;">${parsedData.actualMessage}</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  ` : ''}

                  <!-- Action Section -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td class="akrin-purple-gradient" style="background: linear-gradient(135deg, #7A28FF 0%, #6220cc 100%); padding: 32px; border-radius: 12px; text-align: center;">
                        <h3 class="akrin-title" style="color: #ffffff; font-size: 20px; font-weight: 700; margin: 0 0 20px 0; letter-spacing: -0.025em; line-height: 1.2;">Ready to Respond?</h3>
                        <p class="akrin-body" style="color: rgba(255, 255, 255, 0.9); font-size: 15px; margin: 0 0 24px 0; line-height: 1.6;">Click below to reply directly to this inquiry</p>

                        <!-- Action Buttons -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto;">
                          <tr>
                            <td class="action-buttons" style="text-align: center;">
                              <!-- Primary Reply Button -->
                              <a class="action-button" href="mailto:${data.email}?subject=Re: Your inquiry to AKRIN&body=Dear ${data.name},%0D%0A%0D%0AThank you for contacting AKRIN. We appreciate your interest in our IT services.%0D%0A%0D%0ABest regards,%0D%0AAKRIN Support Team" style="display: inline-block; background: #ffffff; color: #7A28FF; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 0 8px 12px 8px; border: 2px solid transparent; transition: all 0.2s ease;">
                                📧 Reply to ${data.name}
                              </a>

                              ${parsedData.phone ? `
                              <!-- Secondary Call Button -->
                              <a class="action-button" href="tel:${parsedData.phone}" style="display: inline-block; background: rgba(255, 255, 255, 0.15); color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; border: 2px solid rgba(255, 255, 255, 0.3); margin: 0 8px 12px 8px; transition: all 0.2s ease;">
                                📞 Call ${parsedData.phone}
                              </a>
                              ` : ''}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Professional Footer -->
              <tr>
                <td class="footer-padding" style="background-color: #f9fafb; padding: 40px; text-align: center; border-top: 1px solid #e5e7eb;">

                  <!-- Company Branding -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: center; margin-bottom: 24px;">
                        <!-- AKRIN Footer Logo -->
                        <svg width="80" height="16" viewBox="192 557 499 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 16px;">
                          <g clipPath="url(#clip0_footer_logo)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M206.766 610.642H234.452L220.235 635.074H192.998L206.766 610.642Z" fill="#7A28FF" fillOpacity="0.9"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M235.5 557.975L280.098 634.928H248.969L219.936 585.187L235.5 557.975Z" fill="#1a1a1a"/>
                            <text x="320" y="600" fontSize="20" fontWeight="700" fill="#1a1a1a" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">AKRIN</text>
                          </g>
                          <defs>
                            <clipPath id="clip0_footer_logo">
                              <rect width="499" height="80" fill="none" transform="translate(192 557)" />
                            </clipPath>
                          </defs>
                        </svg>

                        <h3 class="akrin-subtitle akrin-purple" style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #7A28FF; letter-spacing: -0.015em; line-height: 1.3;">AKRIN株式会社 (AKRIN K.K.)</h3>
                        <p class="akrin-body" style="margin: 0 0 20px 0; font-size: 14px; color: #6b7280; font-weight: 500; line-height: 1.6;">Leading IT Solutions Provider in Japan</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Contact Information -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: center; margin-bottom: 20px;">
                        <p class="akrin-body" style="margin: 0 0 20px 0; font-size: 14px; color: #6b7280; line-height: 1.6;">
                          <a href="mailto:support@akrin.jp" class="akrin-purple" style="color: #7A28FF; text-decoration: none; font-weight: 600;">support@akrin.jp</a>
                          <span style="margin: 0 12px; color: #d1d5db; font-weight: 300;">•</span>
                          <a href="https://akrin.jp" class="akrin-purple" style="color: #7A28FF; text-decoration: none; font-weight: 600;">akrin.jp</a>
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Divider -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="padding: 20px 0;">
                        <div style="width: 60px; height: 1px; background-color: #e5e7eb; margin: 0 auto;"></div>
                      </td>
                    </tr>
                  </table>

                  <!-- Footer Note -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="text-align: center;">
                        <p class="akrin-body" style="margin: 0; font-size: 12px; color: #9ca3af; line-height: 1.5; font-weight: 400;">
                          This email was automatically generated from the AKRIN website contact form.<br>
                          <span style="font-weight: 500;">Professional IT Services • Enterprise Solutions • 24/7 Support</span>
                        </p>

                        <!-- Security Notice -->
                        <div style="margin-top: 16px; padding: 12px 16px; background-color: rgba(122, 40, 255, 0.05); border: 1px solid rgba(122, 40, 255, 0.1); border-radius: 8px; display: inline-block;">
                          <p style="margin: 0; font-size: 11px; color: #6b7280; line-height: 1.4;">
                            🔒 Confidential business communication intended for AKRIN support team only.
                          </p>
                        </div>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `
}

// AKRIN-branded plain text version for better deliverability
export function createContactEmailTextTemplate(data: {
  name: string
  email: string
  message: string
  timestamp: string
}) {
  const parsedData = parseContactMessage(data.message);

  return `
AKRIN株式会社 (AKRIN K.K.)
New Contact Inquiry Received
═══════════════════════════════════════════════════════════════

CONTACT INFORMATION
───────────────────────────────────────────────────────────────
Name:           ${data.name}
Email:          ${data.email}${parsedData.company ? `
Company:        ${parsedData.company}` : ''}${parsedData.phone ? `
Phone:          ${parsedData.phone}` : ''}${parsedData.companySize ? `
Company Size:   ${parsedData.companySize}` : ''}${parsedData.services ? `
Services:       ${parsedData.services}` : ''}
Submitted:      ${data.timestamp}

${parsedData.actualMessage ? `MESSAGE
───────────────────────────────────────────────────────────────
${parsedData.actualMessage}

` : ''}NEXT STEPS
───────────────────────────────────────────────────────────────
Reply: ${data.email}${parsedData.phone ? `
Call:  ${parsedData.phone}` : ''}

═══════════════════════════════════════════════════════════════
AKRIN株式会社 (AKRIN K.K.)
Leading IT Solutions Provider in Japan

support@akrin.jp • akrin.jp
Professional IT Services • Enterprise Solutions • 24/7 Support

This email was automatically generated from the AKRIN website
contact form and delivered to the support team.
═══════════════════════════════════════════════════════════════
  `.trim()
}

// AKRIN-branded consultation booking email template
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
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Consultation Booking - AKRIN</title>
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <![endif]-->
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; background-color: #f8f9fa;">
      <!-- Email Wrapper -->
      <div style="width: 100%; padding: 40px 20px; background-color: #f8f9fa;">
        <!-- Container -->
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">

          <!-- AKRIN Header -->
          <div style="background: linear-gradient(135deg, #7A28FF 0%, #6220cc 50%, #4a1899 100%); padding: 40px 30px; text-align: center; color: #ffffff;">
            <!-- AKRIN Logo -->
            <div style="margin-bottom: 20px;">
              <svg width="120" height="32" viewBox="192 557 499 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_booking)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M206.766 610.642H234.452L220.235 635.074H192.998L206.766 610.642Z" fill="#ffffff" fillOpacity="0.9"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M235.5 557.975L280.098 634.928H248.969L219.936 585.187L235.5 557.975Z" fill="#ffffff"/>
                  <text x="320" y="600" fontSize="24" fontWeight="bold" fill="#ffffff" fontFamily="system-ui, sans-serif">AKRIN</text>
                </g>
                <defs>
                  <clipPath id="clip0_booking">
                    <rect width="499" height="80" fill="none" transform="translate(192 557)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">New Consultation Booking</h1>
            <p style="margin: 0; font-size: 16px; color: rgba(255, 255, 255, 0.9); font-weight: 400;">Professional IT Services Consultation Request</p>
          </div>

          <!-- Content Section -->
          <div style="padding: 40px 30px; background-color: #ffffff;">
            <!-- Client Information Section -->
            <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1a1a1a; padding-bottom: 12px; border-bottom: 2px solid #f1f3f4; letter-spacing: -0.3px;">Client Information</h2>

            <!-- Client Name Field -->
            <div style="margin-bottom: 24px; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border: 1px solid #e9ecef; border-radius: 12px;">
              <div style="font-weight: 600; color: #7A28FF; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Client Name</div>
              <div style="color: #1a1a1a; font-size: 16px; font-weight: 400; line-height: 1.5;">${data.firstName} ${data.lastName}</div>
            </div>

            <!-- Email Field -->
            <div style="margin-bottom: 24px; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border: 1px solid #e9ecef; border-radius: 12px;">
              <div style="font-weight: 600; color: #7A28FF; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Email Address</div>
              <div style="color: #1a1a1a; font-size: 16px; font-weight: 400; line-height: 1.5;">
                <a href="mailto:${data.email}" style="color: #7A28FF; text-decoration: none;">${data.email}</a>
              </div>
            </div>

            <!-- Phone Field -->
            <div style="margin-bottom: 32px; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border: 1px solid #e9ecef; border-radius: 12px;">
              <div style="font-weight: 600; color: #7A28FF; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Phone Number</div>
              <div style="color: #1a1a1a; font-size: 16px; font-weight: 400; line-height: 1.5;">
                <a href="tel:${data.phone}" style="color: #7A28FF; text-decoration: none;">${data.phone}</a>
              </div>
            </div>

            <!-- Service Details Section -->
            <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1a1a1a; padding-bottom: 12px; border-bottom: 2px solid #f1f3f4; letter-spacing: -0.3px;">Service Details</h2>

            <!-- Service Field -->
            <div style="margin-bottom: 24px; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border: 1px solid #e9ecef; border-radius: 12px;">
              <div style="font-weight: 600; color: #7A28FF; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Requested Service</div>
              <div style="color: #1a1a1a; font-size: 16px; font-weight: 400; line-height: 1.5;">
                ${serviceName}
                <span style="display: inline-block; background: linear-gradient(135deg, #7A28FF 0%, #6220cc 100%); color: #ffffff; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; margin-left: 8px;">${serviceName}</span>
              </div>
            </div>

            <!-- Date Field -->
            <div style="margin-bottom: 24px; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border: 1px solid #e9ecef; border-radius: 12px;">
              <div style="font-weight: 600; color: #7A28FF; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Preferred Consultation Date</div>
              <div style="color: #1a1a1a; font-size: 16px; font-weight: 400; line-height: 1.5;">${formattedDate}</div>
            </div>

            ${data.message ? `
            <!-- Message Field -->
            <div style="margin-bottom: 24px; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border: 1px solid #e9ecef; border-radius: 12px;">
              <div style="font-weight: 600; color: #7A28FF; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Additional Message</div>
              <div style="color: #1a1a1a; font-size: 16px; font-weight: 400; line-height: 1.5;">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}

            <!-- Timestamp Field -->
            <div style="margin-bottom: 32px; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border: 1px solid #e9ecef; border-radius: 12px;">
              <div style="font-weight: 600; color: #7A28FF; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Booking Submitted</div>
              <div style="color: #1a1a1a; font-size: 16px; font-weight: 400; line-height: 1.5;">${data.timestamp}</div>
            </div>

            <!-- Action Section -->
            <div style="background: linear-gradient(135deg, #7A28FF 0%, #6220cc 100%); padding: 24px; border-radius: 12px; text-align: center;">
              <h3 style="color: #ffffff; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">Schedule This Consultation</h3>
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <a href="mailto:${data.email}?subject=AKRIN Consultation Booking - ${formattedDate}&body=Dear ${data.firstName} ${data.lastName},%0D%0A%0D%0AThank you for booking a consultation with AKRIN for ${serviceName}.%0D%0A%0D%0AYour preferred date: ${formattedDate}%0D%0A%0D%0AWe will contact you shortly to confirm the appointment details.%0D%0A%0D%0ABest regards,%0D%0AAKRIN Support Team" style="display: inline-block; background: #ffffff; color: #7A28FF; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin: 4px;">
                  Email ${data.firstName}
                </a>
                <a href="tel:${data.phone}" style="display: inline-block; background: #ffffff; color: #7A28FF; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin: 4px;">
                  Call ${data.phone}
                </a>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 32px 30px; text-align: center; color: #ffffff;">
            <!-- Footer Logo -->
            <div style="margin-bottom: 16px;">
              <svg width="80" height="20" viewBox="192 557 499 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_footer_booking)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M206.766 610.642H234.452L220.235 635.074H192.998L206.766 610.642Z" fill="#7A28FF" fillOpacity="0.9"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M235.5 557.975L280.098 634.928H248.969L219.936 585.187L235.5 557.975Z" fill="#ffffff"/>
                  <text x="320" y="600" fontSize="16" fontWeight="bold" fill="#ffffff" fontFamily="system-ui, sans-serif">AKRIN</text>
                </g>
                <defs>
                  <clipPath id="clip0_footer_booking">
                    <rect width="499" height="80" fill="none" transform="translate(192 557)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div style="color: #7A28FF; font-weight: 600; font-size: 16px; margin: 16px 0 8px 0;">AKRIN株式会社 (AKRIN K.K.)</div>
            <div style="color: rgba(255, 255, 255, 0.8); font-size: 14px; margin: 8px 0; line-height: 1.5;">Leading IT Solutions Provider in Japan</div>
            <div style="color: rgba(255, 255, 255, 0.8); font-size: 14px; margin: 8px 0; line-height: 1.5;">support@akrin.jp | https://akrin.jp</div>
            <div style="color: rgba(255, 255, 255, 0.8); font-size: 14px; margin: 8px 0; line-height: 1.5;">This consultation booking was submitted via the AKRIN website.</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}
