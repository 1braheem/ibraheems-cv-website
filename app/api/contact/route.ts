import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(3).max(80),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  const contactEmail = process.env.CONTACT_EMAIL;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!contactEmail || !gmailAppPassword) {
    console.error("Contact email delivery is not configured.");
    return new NextResponse("Contact service is temporarily unavailable.", {
      status: 503,
    });
  }

  try {
    const result = contactSchema.safeParse(await req.json());

    if (!result.success) {
      return new NextResponse("Invalid contact form submission.", {
        status: 400,
      });
    }

    const { name, email, message } = result.data;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: contactEmail,
        pass: gmailAppPassword.replace(/\s/g, ""),
      },
    });

    await transporter.sendMail({
      from: `Ibraheem Aziz Portfolio <${contactEmail}>`,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unable to deliver contact form message:", error);
    return new NextResponse("Unable to send your message.", { status: 500 });
  }
}
