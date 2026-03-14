```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Validate the honeypot field
  if (data._gotcha) {
    return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
  }

  // Here you would handle the form submission logic, e.g., sending an email
  // For now, we will just return a success response
  return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
}
```