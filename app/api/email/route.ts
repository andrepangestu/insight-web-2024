import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { companyName, name, phone, companyEmail, industry, subject, message } =
    await request.json();

  const transport = nodemailer.createTransport({
    //   service: "gmail",
    //   /*
    //     setting service as 'gmail' is same as providing these setings:
    //     host: "smtp.gmail.com",
    //     port: 465,
    //     secure: true

    //     If you want to use a different email provider other than gmail, you need to provide these manually.
    //     Or you can go use these well known services and their settings at
    //     https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    // */
    //   auth: {
    //     user: process.env.MY_EMAIL,
    //     pass: process.env.MY_PASSWORD,
    //   },
    host: process.env.MY_HOST_EMAIL,
    port: 465,
    secure: true, // this is true as port is 465
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
    debug: true,
  });

  const emailFrom = `${companyName} <${companyEmail}>`; // Update the sender name and email
  const contentEmail = `
    <table>
      <tr>
        <td><b>Company Name</b> </td>
        <td>: ${companyName}</td>
      </tr>
      <tr>
        <td><b>Your Name</b> </td>
        <td>: ${name}</td>
      </tr>
      <tr>
        <td><b>Phone</b> </td>
        <td>: ${phone}</td>
      </tr>
      <tr>
        <td><b>Company Email</b> </td>
        <td>: ${companyEmail}</td>
      </tr>
      <tr>
        <td><b>Industry</b> </td>
        <td>: ${industry}</td>
      </tr>
      <tr>
        <td><b>Subject</b> </td>
        <td>: ${subject}</td>
      </tr>
      <tr>
        <td><b>Additional Info</b> </td>
        <td>: ${message}</td>
      </tr>
    </table><br/><br/>
  `;

  const mailOptions: Mail.Options = {
    from: emailFrom,
    sender: companyEmail,
    to: "test-email@naradashboard.com",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Insight Consulting Website Inquiry Form`,
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
