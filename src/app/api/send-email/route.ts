import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message, followUpConsent } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const followUpLine = `Follow-up consent: ${followUpConsent === false ? "No" : "Yes"}`;

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: subject || "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\n${followUpLine}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
