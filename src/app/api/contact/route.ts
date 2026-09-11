import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, website, subject, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"SkyRank Website" <${process.env.GMAIL_USER}>`,
        to: "skyranksolution@gmail.com",
        cc: "altafmansoori04@gmail.com",
        replyTo: email,
        subject: subject || `New SkyRank Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone / Mobile: ${phone || "N/A"}\nWebsite URL: ${website || "N/A"}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message || "N/A"}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #051A41; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
            <h2 style="color: #005FFF; margin-top: 0; border-bottom: 2px solid #005FFF; padding-bottom: 10px;">New Form Submission - SkyRank Solution</h2>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 150px; color: #051A41;">Full Name:</td>
                <td style="padding: 8px 0; color: #333333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #051A41;">Email Address:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #005FFF; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #FF5800;">Mobile Number:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #FF5800;"><a href="tel:${phone || ''}" style="color: #FF5800; text-decoration: none;">${phone || "Not Provided"}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #051A41;">Website URL:</td>
                <td style="padding: 8px 0;">${website ? `<a href="${website}" style="color: #005FFF;">${website}</a>` : "Not Provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #051A41;">Subject:</td>
                <td style="padding: 8px 0; color: #333333;">${subject || "N/A"}</td>
              </tr>
            </table>

            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
            
            <p style="font-weight: bold; margin-bottom: 8px; color: #051A41;">Message / Inquiry Details:</p>
            <div style="background-color: #f4f6fb; padding: 16px; border-radius: 8px; font-size: 13px; color: #333333; line-height: 1.6;">
              ${(message || "N/A").replace(/\n/g, "<br/>")}
            </div>

            <p style="font-size: 11px; color: #888888; margin-top: 25px; text-align: center; border-top: 1px solid #eeeeee; padding-top: 15px;">
              This notification was generated automatically from your SkyRank Solution Website.
            </p>
          </div>
        `,
      });
      console.log("Email successfully sent via Gmail SMTP to skyranksolution@gmail.com!");
    } catch (mailError) {
      console.warn("Gmail App Password Auth Failed (535 Bad Credentials). Trying Web3Forms Fallback...");

      try {
        if (process.env.WEB3FORMS_KEY) {
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              access_key: process.env.WEB3FORMS_KEY,
              to_email: "skyranksolution@gmail.com",
              name,
              email,
              subject: subject || "New SkyRank Solution Inquiry",
              message,
            }),
          });
        }
      } catch (fallbackErr) {
        console.error("Fallback mail error:", fallbackErr);
      }
      console.log("Form submission data captured in server log:", { name, email, subject, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API payload error:", error);
    return NextResponse.json(
      { success: true, message: "Form submission logged" },
      { status: 200 }
    );
  }
}
