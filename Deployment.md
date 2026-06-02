# Vercel Deployment via GitHub Actions

## How it works

- Push to `main` → production deploy
- Open a PR → preview deploy (Vercel preview URL)

## Required GitHub Secrets

Go to **GitHub → Repository → Settings → Secrets and variables → Actions** and add:

| Secret | Where to get it |
|--------|----------------|
| `VERCEL_TOKEN` | vercel.com → Account Settings → Tokens → Create |
| `VERCEL_ORG_ID` | `.vercel/project.json` after running `vercel link` |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` after running `vercel link` |
| `VITE_TELEGRAM_BOT_TOKEN` | Your Telegram bot token |
| `VITE_TELEGRAM_CHAT_ID` | Your Telegram chat ID |

## Getting VERCEL_ORG_ID and VERCEL_PROJECT_ID

Run once locally:

```powershell
pnpm dlx vercel link
```

Then open `.vercel/project.json` — both IDs are listed there.

## Vercel Environment Variables

Also add `VITE_TELEGRAM_BOT_TOKEN` and `VITE_TELEGRAM_CHAT_ID` in the Vercel dashboard:

**Vercel → Project → Settings → Environment Variables**

This ensures the contact form works in production builds triggered outside of GitHub Actions.
