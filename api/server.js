import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendTestEmail, sendContactEmail } from "./sendEmail.js";

dotenv.config();

const app = express();
const port = 3010;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Vite default port dan alternatif
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route utama
app.get("/", (req, res) => {
  res.send("Email Server is running! Use /send-email for test or /send-contact for contact form");
});

// Route untuk test email (yang sudah ada)
app.get("/send-email", async (_, res) => {
  try {
    const to = process.env.TEST_RECEIVER;
    if (!to) {
      throw new Error("Please set TEST_RECEIVER in .env");
    }
    const info = await sendTestEmail(to);
    res.json({ success: true, info });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route baru untuk contact form
app.post("/send-contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validasi input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Name, email, and message are required" 
      });
    }

    // Validasi format email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid email format" 
      });
    }

    const result = await sendContactEmail({ name, email, message });
    res.json({ 
      success: true, 
      message: "Email sent successfully!",
      info: result 
    });
  } catch (error) {
    console.error("Contact email error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to send email. Please try again later." 
    });
  }
});

app.listen(port, () => {
  console.log(`✅ Server listening on http://localhost:${port}`);
  console.log(`🚀 Ready to handle contact form submissions!`);
});