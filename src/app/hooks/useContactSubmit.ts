import * as React from "react";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type SubmitStatus = "idle" | "sending" | "success" | "error";

interface SubmitState {
  status: SubmitStatus;
  error: string | null;
}

const TELEGRAM_BOT_TOKEN = (import.meta as unknown as { env: Record<string, string> }).env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID   = (import.meta as unknown as { env: Record<string, string> }).env.TELEGRAM_CHAT_ID;

async function sendViaTelegram(data: ContactFormData): Promise<void> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error("Telegram env vars not configured");
  }
  const text =
    `📬 *New Portfolio Contact*\n\n` +
    `👤 *Name:* ${data.name}\n` +
    `📧 *Email:* ${data.email}\n\n` +
    `💬 *Message:*\n${data.message}`;

  const res = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id:    TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    }
  );
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(`Telegram error ${res.status}: ${(body as { description?: string }).description ?? "unknown"}`);
  }
}

export function useContactSubmit() {
  const [state, setState] = React.useState<SubmitState>({
    status: "idle",
    error: null,
  });

  const submit = React.useCallback(async (data: ContactFormData) => {
    setState({ status: "sending", error: null });
    try {
      await sendViaTelegram(data);
      setState({ status: "success", error: null });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to send message";
      setState({ status: "error", error: msg });
    }
  }, []);

  const reset = React.useCallback(() => {
    setState({ status: "idle", error: null });
  }, []);

  return { ...state, submit, reset };
}
