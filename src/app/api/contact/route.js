import { NextResponse } from 'next/server';

/**
 * Contact Form API Handler
 * 
 * This endpoint handles contact form submissions.
 * In production, integrate with an email service like:
 * - SendGrid
 * - Resend
 * - AWS SES
 * - Or your own SMTP server
 */

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, department } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject || 'No Subject'),
      message: sanitizeInput(message),
      department: sanitizeInput(department || 'general'),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'Unknown'
    };

    // Log the submission (in production, send to email service)
    console.log('📧 Contact Form Submission:', sanitizedData);

    // TODO: Integrate with email service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Zuma Agro <contact@zumaagro.com>',
    //   to: ['info@zumaagro.com'],
    //   subject: `Contact Form: ${sanitizedData.subject}`,
    //   html: formatEmailTemplate(sanitizedData)
    // });

    // For now, simulate successful submission
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will contact you soon.',
        submissionId: generateSubmissionId()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}

// Helper functions
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .substring(0, 1000); // Limit length
}

function generateSubmissionId() {
  return 'SUB-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
}

function formatEmailTemplate(data) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${data.name} (${data.email})</p>
    <p><strong>Department:</strong> ${data.department}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
    <hr>
    <p><small>Submitted: ${data.timestamp}</small></p>
  `;
}
