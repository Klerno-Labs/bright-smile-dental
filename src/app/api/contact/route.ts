import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Store the lead in a database (PostgreSQL, MongoDB, etc.)
    // 3. Integrate with a CRM like Salesforce or HubSpot
    
    // Example email sending logic (commented out for demo)
    /*
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@brightsmiledental.com',
      subject: `New Appointment Request from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service || 'None specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    */

    console.log("Received form submission:", { name, email, phone, service, message });

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}