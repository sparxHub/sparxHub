const { VercelRequest, VercelResponse } = require('@vercel/node');

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  return await fn(req, res);
};

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Supported' });
    return;
  }

  const webhookUrl = process.env.MAKE_WEBHOOK_URL;
  if (!webhookUrl) {
    res.status(500).json({ error: 'Server configuration error: Missing MAKE_WEBHOOK_URL' });
    return;
  }

  const { email, message } = req.body;

  // Use dynamic import for node-fetch
  const fetch = (await import('node-fetch')).default;

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message })
    });

    if (response.ok) {
      res.status(200).json({ success: true, message: "Request sent successfully to Make." });
    } else {
      throw new Error(`Failed to send data to Make with status: ${response.status}`);
    }
  } catch (error) {
    const errorMsg = (error instanceof Error) ? error.message : 'Unknown error occurred';
    res.status(500).json({
      success: false,
      message: "Failed to trigger Make workflow",
      error: errorMsg
    });
  }
};

export default allowCors(handler);
