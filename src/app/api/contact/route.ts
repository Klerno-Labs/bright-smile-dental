import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // Honeypot check
    if (_gotcha) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In a real production environment, you would use Nodemailer, SendGrid, or Resend here.
    // Example:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'info@brightsmiledental.com',
    //   subject: 'New Consultation Request',
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Service: ${service}</p><p>Message: ${message}</p>`
    // });

    console.log("Form submission received:", { name, email, phone, service, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}