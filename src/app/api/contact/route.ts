import { NextResponse } from "next/server";
import { z } from "zod";

const formSchema = z.object({
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
    const validatedData = formSchema.parse(body);

    // Honeypot check
    if (validatedData._gotcha) {
      // If honeypot is filled, return success to fool bots but don't process
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Log the data (In a real app, you would send an email here via Resend/SendGrid/SES)
    console.log("Form Submission Received:", {
      name: validatedData.name,
      email: validatedData.email,
      service: validatedData.service,
      timestamp: new Date().toISOString()
    });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}