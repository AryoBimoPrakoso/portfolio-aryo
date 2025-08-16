import { sendContactEmail } from './sendEmail.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Use POST.' 
    });
  }

  try {
    const { name, email, message } = req.body;

    console.log("📧 Vercel function received:", { name, email, message: message?.substring(0, 50) + "..." });

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
    
    console.log("✅ Vercel function: Email sent successfully");
    
    res.status(200).json({ 
      success: true, 
      message: "Email sent successfully!",
      info: result 
    });
  } catch (error) {
    console.error("❌ Vercel function error:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to send email. Please try again later." 
    });
  }
}