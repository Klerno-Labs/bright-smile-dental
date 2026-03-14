import { NextResponse } from 'next/server';
import { z } from 'zod';

// Simple validation schema to match frontend
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().optional(),
  message: z.string().min(10),
  _gotcha: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = contactSchema.parse(body);

    // Honeypot check
    if (validatedData._gotcha) {
      // Return success to fool bots, but don't actually process
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // In a real app, you would send an email here using Resend, SendGrid, or nodemailer
    // console.log("Form received:", validatedData);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid data", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}