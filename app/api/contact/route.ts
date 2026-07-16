import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 },
      )
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_PASS
    const recipient =
      process.env.CONTACT_TO_EMAIL || gmailUser || "smartlinkbusinesssolution@gmail.com"

    if (!gmailUser || !gmailPass) {
      return NextResponse.json(
        { success: false, message: "Email delivery is not configured on this server yet." },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    })

    await transporter.sendMail({
      from: gmailUser,
      to: recipient,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New contact request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Needed:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    })

    return NextResponse.json({ success: true, message: "Message sent successfully." })
  } catch (error) {
    console.error("[v0] Email send failed:", error)
    return NextResponse.json(
      { success: false, message: "Unable to send message right now. Please try again later." },
      { status: 500 },
    )
  }
}
