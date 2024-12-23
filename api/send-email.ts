// import nodemailer from "nodemailer";
// import { NextApiRequest, NextApiResponse } from "next";

// interface EmailRequestBody {
//   companyName: string;
//   name: string;
//   phone: string;
//   companyEmail: string;
//   industry: string;
//   subject: string;
//   message: string;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const {
//       companyName,
//       name,
//       phone,
//       companyEmail,
//       industry,
//       subject,
//       message,
//     }: EmailRequestBody = req.body;

//     // Create email content
//     const contentEmail = `
//       <table>
//         <tr>
//           <td>Company Name</td>
//           <td>: ${companyName}</td>
//         </tr>
//         <tr>
//           <td>Your Name</td>
//           <td>: ${name}</td>
//         </tr>
//         <tr>
//           <td>Phone</td>
//           <td>: ${phone}</td>
//         </tr>
//         <tr>
//           <td>Company Email</td>
//           <td>: ${companyEmail}</td>
//         </tr>
//         <tr>
//           <td>Industry</td>
//           <td>: ${industry}</td>
//         </tr>
//         <tr>
//           <td>Subject</td>
//           <td>: ${subject}</td>
//         </tr>
//         <tr>
//           <td>Additional Info</td>
//           <td>: ${message}</td>
//         </tr>
//       </table><br/><br/>
//     `;

//     // Create a transporter object using SMTP transport
//     let transporter = nodemailer.createTransport({
//       service: "gmail", // e.g., 'gmail'
//       auth: {
//         user: process.env.EMAIL_USER, // your email address
//         pass: process.env.EMAIL_PASS, // your email password
//       },
//     });

//     // Set up email data
//     let mailOptions = {
//       from: `"${companyName}" <${companyEmail}>`,
//       to: "info@insight.co.id",
//       subject: "Insight Consulting Website Inquiry Form",
//       html: contentEmail,
//     };

//     try {
//       // Send email
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       res.status(500).json({ error: "Error sending email" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
