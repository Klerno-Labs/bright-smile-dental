import { NextResponse } from "next/server";
import { sanitizeInput } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Honeypot check
    if (body._gotcha) {
      return NextResponse.json({ message: "Spam detected" }, { status: 200 });
    }

    // Sanitize inputs
    const data = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      service: sanitizeInput(body.service),
      message: sanitizeInput(body.message),
      context: sanitizeInput(body.context || "General"),
    };

    // Basic Validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Simulate email sending or database storage
    // In a real app, you would use nodemailer or SendGrid here
    console.log("Received Contact Form Submission:", data);

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}