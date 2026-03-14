import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // Honeypot validation
    if (_gotcha) {
      return NextResponse.json({ message: "Bot detected" }, { status: 200 });
    }

    // Basic Server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // In a real app, you would use Nodemailer, SendGrid, or Resend here.
    // For this demonstration, we will simulate a successful send after a delay.
    
    console.log("Received Contact Form:", { name, email, phone, service, message });

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}