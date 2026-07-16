import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";

const sql = neon(process.env.DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // POST only
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Save to Neon
    await sql`
      INSERT INTO contact_messages
      (full_name, email, phone, message)
      VALUES
      (${name}, ${email}, ${phone}, ${message});
    `;

    // Admin Email
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Enquiry</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    // User Email
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "Thank you for contacting Nexflare Dynamics",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting Nexflare Dynamics.</p>

        <p>
        We have received your enquiry successfully.
        </p>

        <p>
        Our team will get back to you within 24 hours.
        </p>

        <br/>

        <p>
        Regards,
        <br/>
        Nexflare Dynamics
        </p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}