import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

interface EmailRequestBody {
  companyName: string;
  name: string;
  phone: string;
  companyEmail: string;
  industry: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  // const { email, name, message } = await request.json();

  const {
    companyName,
    name,
    phone,
    companyEmail,
    industry,
    subject,
    message,
  }: EmailRequestBody = await request.json();

  console.log(
    companyName,
    name,
    phone,
    companyEmail,
    industry,
    subject,
    message
  );

  const contentEmail = `
      <table>
        <tr>
          <td>Company Name</td>
          <td>: ${companyName}</td>
        </tr>
        <tr>
          <td>Your Name</td>
          <td>: ${name}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>: ${phone}</td>
        </tr>
        <tr>
          <td>Company Email</td>
          <td>: ${companyEmail}</td>
        </tr>
        <tr>
          <td>Industry</td>
          <td>: ${industry}</td>
        </tr>
        <tr>
          <td>Subject</td>
          <td>: ${subject}</td>
        </tr>
        <tr>
          <td>Additional Info</td>
          <td>: ${message}</td>
        </tr>
      </table><br/><br/>
    `;

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these settings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // const mailOptions: Mail.Options = {
  //   from: `"${companyName}" <${companyEmail}>`,
  //   to: process.env.MY_EMAIL,
  //   subject: "Insight Consulting Website Inquiry Form",
  //   text: message,
  // };

  let mailOptions: Mail.Options = {
    from: `"${companyName}" <${companyEmail}>`,
    to: "info@insight.co.id",
    subject: "Insight Consulting Website Inquiry Form",
    html: contentEmail,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
