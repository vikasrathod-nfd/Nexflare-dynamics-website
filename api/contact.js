// import { neon } from "@neondatabase/serverless";
// import { Resend } from "resend";

// const sql = neon(process.env.DATABASE_URL);
// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   // POST only
//   if (req.method !== "POST") {
//     return res.status(405).json({
//       success: false,
//       message: "Method Not Allowed",
//     });
//   }

//   try {
//     const { name, email, phone, message } = req.body;

//     // Validation
//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "Please fill all required fields.",
//       });
//     }

//     // Save to Neon
//     await sql`
//       INSERT INTO contact_messages
//       (full_name, email, phone, message)
//       VALUES
//       (${name}, ${email}, ${phone}, ${message});
//     `;

//     // Admin Email
//     await resend.emails.send({
//       from: process.env.FROM_EMAIL,
//       to: process.env.ADMIN_EMAIL,
//       subject: "New Contact Form Submission",
//       html: `
//         <h2>New Enquiry</h2>

//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone || "-"}</p>

//         <p><b>Message:</b></p>

//         <p>${message}</p>
//       `,
//     });

//     // User Email
//     await resend.emails.send({
//       from: process.env.FROM_EMAIL,
//       to: email,
//       subject: "Thank you for contacting Nexflare Dynamics",
//       html: `
//         <h2>Hello ${name},</h2>

//         <p>Thank you for contacting Nexflare Dynamics.</p>

//         <p>
//         We have received your enquiry successfully.
//         </p>

//         <p>
//         Our team will get back to you within 24 hours.
//         </p>

//         <br/>

//         <p>
//         Regards,
//         <br/>
//         Nexflare Dynamics
//         </p>
//       `,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Message Sent Successfully",
//     });

//   } catch (error) {

//     console.error(error);

//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// }

import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";

const sql = neon(process.env.DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    // ===========================
    // Validation
    // ===========================

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // ===========================
    // Save to Neon Database
    // ===========================

    await sql`
      INSERT INTO contact_messages
      (full_name, email, phone, message)
      VALUES
      (${name}, ${email}, ${phone}, ${message});
    `;

    console.log("Database Saved Successfully");

    // ===========================
    // Send Admin Email
    // ===========================

    const adminResponse = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      // from: "Nexflare Dynamics <contact-us@nexflaredynamics.com>",
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `📩 New Contact Form Submission - ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;margin-top:30px;">

<tr>
<td style="background:#0B5ED7;padding:25px;color:#ffffff;text-align:center;">
<h1 style="margin:0;">Nexflare Dynamics</h1>
<p style="margin-top:10px;">New Contact Form Submission</p>
</td>
</tr>

<tr>
<td style="padding:30px;">

<h2 style="color:#0B5ED7;">New Enquiry Received</h2>

<table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">

<tr style="background:#f8f8f8;">
<td><strong>Name</strong></td>
<td>${name}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${email}</td>
</tr>

<tr style="background:#f8f8f8;">
<td><strong>Phone</strong></td>
<td>${phone || "-"}</td>
</tr>

<tr>
<td><strong>Submitted On</strong></td>
<td>${new Date().toLocaleString()}</td>
</tr>

</table>

<br>

<h3>Message</h3>

<div style="background:#f4f4f4;padding:20px;border-radius:8px;line-height:1.7;">
${message}
</div>

</td>
</tr>

<tr>
<td style="background:#fafafa;padding:20px;text-align:center;font-size:13px;color:#777;">
© ${new Date().getFullYear()} Nexflare Dynamics. All Rights Reserved.
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
    });

    console.log("Admin Email Sent");
    console.log(adminResponse);

    // ===========================
    // Send Thank You Email
    // ===========================

    const userResponse = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      // from: "Nexflare Dynamics <contact-us@nexflaredynamics.com>",
      to: email,
      subject: "Thank You for Contacting Nexflare Dynamics",
      html: `
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">

<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;margin-top:30px;">

<tr>
<td style="background:#0B5ED7;padding:30px;text-align:center;color:#ffffff;">

<h1 style="margin:0;">Nexflare Dynamics</h1>

<p style="margin-top:10px;">
Empowering Businesses with Innovative Technology
</p>

</td>
</tr>

<tr>

<td style="padding:35px;">

<h2>Hello ${name}, 👋</h2>

<p>
Thank you for contacting <strong>Nexflare Dynamics</strong>.
</p>

<p>
We have successfully received your enquiry.
</p>

<p>
Our team is reviewing your request and will contact you within
<strong>24 business hours.</strong>
</p>

<div style="background:#f4f7fb;padding:20px;border-left:4px solid #0B5ED7;margin-top:25px;">

<h3>Your Submitted Details</h3>

<p><strong>Name:</strong> ${name}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Phone:</strong> ${phone || "-"}</p>

<p><strong>Message:</strong></p>

<p>${message}</p>

</div>

<br>

<p>
If your enquiry is urgent, you can reply to this email and our team
will assist you as soon as possible.
</p>

<br>

<p>
Regards,<br>
<strong>Nexflare Dynamics Team</strong>
</p>

</td>

</tr>

<tr>

<td style="background:#fafafa;padding:25px;text-align:center;font-size:13px;color:#777;">

Nexflare Dynamics<br>

🌐 https://www.nexflaredynamics.com

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`,
    });

    console.log("User Email Sent");
    console.log(userResponse);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("====================================");
    console.error("CONTACT API ERROR");
    console.error(error);
    console.error(error.message);
    console.error(error.response);
    console.error("====================================");

    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}
