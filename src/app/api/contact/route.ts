import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // Honeypot validation
    if (_gotcha) {
      return NextResponse.json({ message: "Bot detected" }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
    }

    // In a real app, you would send this to an email service like Resend, SendGrid, or save to a database.
    // console.log("Received Contact Form:", { name, email, phone, service, message });

    // Simulating a delay for the UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}