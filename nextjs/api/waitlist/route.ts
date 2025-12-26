// app/api/waitlist/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name } = body;

  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { success: false, message: 'Invalid email' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://waitlister.me/s/${process.env.WAITLIST_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, name })
      }
    );

    if (!res.ok) throw new Error();

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
