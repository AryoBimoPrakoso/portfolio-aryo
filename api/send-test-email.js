import { sendTestEmail } from './sendEmail.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Use GET.' 
    });
  }

  try {
    const to = process.env.TEST_RECEIVER;
    if (!to) {
      throw new Error("Please set TEST_RECEIVER in .env");
    }
    const info = await sendTestEmail(to);
    res.status(200).json({ success: true, info });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}