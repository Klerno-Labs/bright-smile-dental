import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service, _gotcha } = body;

    // Honeypot check for spam
    if (_gotcha) {
      return NextResponse.json({ success: false, message: "Spam detected" }, { status: 400 });
    }

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would send an email here using Resend, SendGrid, etc.
    console.log("Form received:", { name, email, phone, service, message });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}