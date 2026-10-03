import { NextResponse } from "next/server";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const service = String(body.service ?? "").trim();
    const propertyType = String(body.propertyType ?? "").trim();
    const size = String(body.size ?? "").trim();
    const preferredDate = String(body.preferredDate ?? "").trim();
    const frequency = String(body.frequency ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Name, email and service are required." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.QUOTE_RECIPIENT_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Quote email environment variables are not configured.");
      return NextResponse.json(
        { error: "Quote delivery is not configured yet." },
        { status: 503 }
      );
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "Not supplied"),
      service: escapeHtml(service),
      propertyType: escapeHtml(propertyType || "Not supplied"),
      size: escapeHtml(size || "Not supplied"),
      preferredDate: escapeHtml(preferredDate || "Not supplied"),
      frequency: escapeHtml(frequency || "Not supplied"),
      message: escapeHtml(message || "No additional details"),
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New Cleaning quote request — ${service}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#10251d">
            <h1 style="font-size:28px;margin-bottom:8px">New quote request</h1>
            <p style="color:#5c6f65;margin-top:0">A new request was submitted through the Cleaning website.</p>
            <table style="width:100%;border-collapse:collapse;margin-top:24px">
              <tr><td style="padding:10px 0;border-bottom:1px solid #ddd"><strong>Name</strong></td><td style="padding:10px 0;border-bottom:1px solid #ddd">${safe.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #ddd"><strong>Email</strong></td><td style="padding:10px 0;border-bottom:1px solid #ddd">${safe.email}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #ddd"><strong>Phone</strong></td><td style="padding:10px 0;border-bottom:1px solid #ddd">${safe.phone}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #ddd"><strong>Service</strong></td><td style="padding:10px 0;border-bottom:1px solid #ddd">${safe.service}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #ddd"><strong>Property type</strong></td><td style="padding:10px 0;border-bottom:1px solid #ddd">${safe.propertyType}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #ddd"><strong>Approx. size</strong></td><td style="padding:10px 0;border-bottom:1px solid #ddd">${safe.size}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #ddd"><strong>Preferred date</strong></td><td style="padding:10px 0;border-bottom:1px solid #ddd">${safe.preferredDate}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #ddd"><strong>Frequency</strong></td><td style="padding:10px 0;border-bottom:1px solid #ddd">${safe.frequency}</td></tr>
            </table>
            <div style="margin-top:24px">
              <strong>Additional details</strong>
              <p style="white-space:pre-wrap;line-height:1.6">${safe.message}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend quote delivery failed:", errorText);
      return NextResponse.json(
        { error: "We could not send your request. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong while submitting your request." },
      { status: 500 }
    );
  }
}
