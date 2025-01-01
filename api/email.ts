import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, phone, companyEmail, industry, subject, message } = req.body;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com", // Replace with your SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "your-email@example.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password
      },
    });

    // Set up email data
    const mailOptions = {
      from: companyEmail,
      to: "recipient@example.com", // Replace with the recipient's email
      subject: subject,
      text: `Name: ${name}\nPhone: ${phone}\nIndustry: ${industry}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error sending email: " + error.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
