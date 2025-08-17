import { google } from "googleapis";
import nodemailer from "nodemailer";

// Untuk Vercel, environment variables sudah tersedia langsung
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const MY_EMAIL = process.env.MAIL_USER;

// Validate environment variables
if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN || !MY_EMAIL) {
  console.error("❌ Missing required environment variables:");
  console.error("CLIENT_ID:", CLIENT_ID ? "✅" : "❌");
  console.error("CLIENT_SECRET:", CLIENT_SECRET ? "✅" : "❌");
  console.error("REFRESH_TOKEN:", REFRESH_TOKEN ? "✅" : "❌");
  console.error("MAIL_USER:", MY_EMAIL ? "✅" : "❌");
  throw new Error("Missing required environment variables");
}

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Set credentials dengan error handling
try {
  oAuth2Client.setCredentials({ 
    refresh_token: REFRESH_TOKEN.trim() // Trim whitespace
  });
  console.log("✅ OAuth2 credentials set successfully");
} catch (error) {
  console.error("❌ Error setting OAuth2 credentials:", error.message);
  throw error;
}

// Fungsi asli untuk test email
// export async function sendTestEmail(to) {
//   try {
//     console.log("🔄 Getting access token...");
//     const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
    
//     if (!ACCESS_TOKEN || !ACCESS_TOKEN.token) {
//       throw new Error("Failed to get access token");
//     }
    
//     console.log("✅ Access token obtained");

//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: MY_EMAIL,
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN.trim(),
//         accessToken: ACCESS_TOKEN.token,
//       },
//     });

//     console.log("📧 Sending test email to:", to);

//     const mailOptions = {
//       from: MY_EMAIL,
//       to,
//       subject: "🌻 This Is Sent By NodeMailer 🌻",
//       html: `
//         <p>Hey ${to},</p>
//         <p>🌻 This Is A Test Mail Sent By NodeMailer 🌻</p>
//         <p>Thank you</p>
//       `,
//     };

//     const result = await transport.sendMail(mailOptions);
//     console.log("✅ Test email sent successfully:", result.messageId);
//     return result;
//   } catch (err) {
//     console.error("❌ Error sending test email:", err);
//     console.error("❌ Error details:", {
//       message: err.message,
//       code: err.code,
//       command: err.command
//     });
//     throw err;
//   }
// }

// Fungsi baru untuk mengirim email dari contact form
export async function sendContactEmail(contactData) {
  try {
    console.log("🔄 Getting access token for contact email...");
    const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
    
    if (!ACCESS_TOKEN || !ACCESS_TOKEN.token) {
      throw new Error("Failed to get access token");
    }
    
    console.log("✅ Access token obtained for contact email");

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: MY_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN.trim(),
        accessToken: ACCESS_TOKEN.token,
      },
    });

    const { name, email, message } = contactData;
    console.log("📧 Sending contact email from:", name, email);

    // Email ke Anda (pemilik website)
    const mailOptionsToYou = {
      from: MY_EMAIL,
      to: MY_EMAIL, // Email dikirim ke diri sendiri
      subject: `📩 New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email // Memungkinkan reply langsung ke pengirim
    };

    // Email balasan otomatis ke pengirim
    const mailOptionsToSender = {
      from: MY_EMAIL,
      to: email,
      subject: "✅ Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 3px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p>Best regards,<br>Aryo</p>
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Based in Jakarta, Indonesia
          </p>
        </div>
      `,
    };

    console.log("📤 Sending emails...");
    // Kirim kedua email
    const [resultToYou, resultToSender] = await Promise.all([
      transport.sendMail(mailOptionsToYou),
      transport.sendMail(mailOptionsToSender)
    ]);

    console.log("✅ Contact emails sent successfully:", {
      toYou: resultToYou.messageId,
      toSender: resultToSender.messageId
    });

    return {
      success: true,
      messageId: resultToYou.messageId,
      autoReplyId: resultToSender.messageId
    };
  } catch (err) {
    console.error("❌ Error sending contact email:", err);
    console.error("❌ Error details:", {
      message: err.message,
      code: err.code,
      command: err.command
    });
    throw err;
  }
}