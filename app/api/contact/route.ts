import { NextResponse } from "next/server";
export const runtime = "nodejs";

type ContactBody = {
  name: string;
  email: string;
  message: string;
  honey?: string; // honeypot
  startedAt?: number; // client form mount timestamp
};

const EMAIL_RE =
  // basic RFC2822 compliant pattern for practical validation
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody;

    // Basic validations
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();
    const honey = (body.honey || "").trim();
    const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;

    if (honey) {
      // Bot likely filled hidden field
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !EMAIL_RE.test(email) || message.length < 5) {
      return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
    }

    // Time threshold (simple bot-throttle). Not bulletproof, but reduces noise.
    const deltaMs = Date.now() - startedAt;
    if (!startedAt || deltaMs < 2000) {
      return NextResponse.json({ ok: false, error: "Too fast" }, { status: 429 });
    }

    // Prepare payload
    const to = process.env.CONTACT_TO || "";
    const from = process.env.CONTACT_FROM || "portfolio@no-reply.local";
    const subject = `New Portfolio Message from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // If environment variables for Resend are available, send email via Resend API (no dependency required)
    const RESEND_API_KEY = process.env.RESEND_API_KEY || "process.env.RESEND_API";

    if (RESEND_API_KEY && to) {
      const sendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject,
          text,
          reply_to: email,
        }),
      });

      if (!sendRes.ok) {
        const details = await safeJson(sendRes);
        console.error("Resend error:", details);
        return NextResponse.json({ ok: false, error: "Email send failed" }, { status: 502 });
      }

      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // If no email provider configured, accept the submission and log it (dev fallback)
    console.warn(
      "CONTACT_TO or RESEND_API_KEY not configured. Received contact submission:",
      { name, email, message }
    );
    return NextResponse.json({ ok: true, note: "Email provider not configured" }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

async function safeJson(res: Response) {
  try {
    return await res.json();
  } catch {
    return { status: res.status, statusText: res.statusText };
  }
}
