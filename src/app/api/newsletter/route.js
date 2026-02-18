import { NextResponse } from 'next/server';

/**
 * Newsletter Subscription API Handler
 */

// In-memory store (replace with database in production)
const subscribers = new Set();

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    if (subscribers.has(email.toLowerCase())) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'You are already subscribed to our newsletter.',
          alreadySubscribed: true
        },
        { status: 200 }
      );
    }

    // Add subscriber
    subscribers.add(email.toLowerCase());

    console.log('📰 New newsletter subscriber:', email);

    // TODO: Integrate with email marketing service
    // - Mailchimp
    // - ConvertKit
    // - Brevo (Sendinblue)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing to our newsletter!',
        subscriberCount: subscribers.size
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    subscriberCount: subscribers.size,
    message: 'Subscriber count (development only)'
  });
}
