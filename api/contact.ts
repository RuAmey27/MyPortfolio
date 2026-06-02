import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return res.status(500).json({
      error: "Telegram environment variables not configured",
    });
  }

  const { name, email, message } = req.body;

  const text =
    `📬 New Portfolio Contact\n\n` +
    `👤 Name: ${name}\n` +
    `📧 Email: ${email}\n\n` +
    `💬 Message:\n${message}`;

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    }
  );

  if (!telegramResponse.ok) {
    const error = await telegramResponse.text();

    return res.status(500).json({
      error,
    });
  }

  return res.status(200).json({
    success: true,
  });
}