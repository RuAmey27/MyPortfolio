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

async function sendViaTelegram(data: ContactFormData): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));

    throw new Error(
      error.error || "Failed to send message"
    );
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
