# Contact Form Setup

The contact form uses **EmailJS** as the primary channel and **Telegram Bot** as an automatic fallback when the EmailJS monthly quota (200/month on free tier) is exhausted or fails.

---

## 1. EmailJS Setup

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account.
2. **Add an Email Service**
   - Dashboard → Email Services → Add New Service
   - Choose **Gmail** (or any provider)
   - Authenticate and copy the **Service ID** (e.g. `service_abc123`)
3. **Create an Email Template**
   - Dashboard → Email Templates → Create New Template
   - Use these exact template variables in the body:
     ```
     From: {{from_name}} <{{from_email}}>

     {{message}}
     ```
   - Set **Reply To** field to `{{reply_to}}`
   - Save and copy the **Template ID** (e.g. `template_xyz789`)
4. **Get your Public Key**
   - Dashboard → Account → API Keys
   - Copy the **Public Key**

---

## 2. Telegram Bot Setup

1. Open Telegram and message [@BotFather](https://t.me/BotFather)
2. Send `/newbot` and follow the prompts to name your bot
3. Copy the **Bot Token** (format: `123456789:AAFxxxxxxx`)
4. **Get your Chat ID**
   - Send any message to your new bot
   - Open in browser: `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
   - Find `"chat":{"id": 987654321}` — that number is your **Chat ID**

---

## 3. Environment Variables

Create a `.env.local` file in the project root (already gitignored):

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=your_public_key

VITE_TELEGRAM_BOT_TOKEN=123456789:AAFxxxxxxx
VITE_TELEGRAM_CHAT_ID=987654321
```

### Vercel (Production)

Add the same variables in Vercel:
> Project → Settings → Environment Variables → Add each key above

---

## 4. How the Fallback Works

```
Form Submit
    │
    ▼
EmailJS (primary)
    │ success → ✅ "Delivered via Email"
    │ failure (quota / network / config)
    ▼
Telegram Bot (fallback)
    │ success → ✅ "Delivered via Telegram"
    │ failure
    ▼
❌ Error banner with direct email link
```

- EmailJS free tier: **200 emails/month**
- Telegram: **unlimited**, instant push notification to your phone
- Both channels are tried automatically — no manual switching needed
