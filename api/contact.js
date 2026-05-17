export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, company, message } = req.body;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY env var');
      return res.status(500).json({
        success: false,
        message: 'Server Config Error: Missing Resend API Key.'
      });
    }

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'SEER <onboarding@resend.dev>',
        to: 'abubakarsiddiqpalli99@gmail.com',
        subject: `New Early Access Request — ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5; margin-bottom: 24px;">New Early Access Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #475569; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #475569;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 500;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #475569;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 500;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #475569;">Message</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 500;">${message}</td>
              </tr>
            </table>
            <p style="color: #94A3B8; font-size: 12px; margin-top: 24px;">Submitted on ${timestamp}</p>
          </div>
        `
      })
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error('Resend Error:', response.status, errData);
      throw new Error(errData.message || `Email send failed (${response.status})`);
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('API Handler Error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Internal Server Error'
    });
  }
}