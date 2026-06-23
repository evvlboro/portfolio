type RecaptchaVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export type RecaptchaVerifyResult =
  | { ok: true }
  | { ok: false; reason: "missing_secret" | "invalid" | "network" };

export async function verifyRecaptcha(
  token: string,
  remoteIp?: string,
): Promise<RecaptchaVerifyResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return { ok: false, reason: "missing_secret" };
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp) {
    params.set("remoteip", remoteIp);
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  if (!response.ok) {
    return { ok: false, reason: "network" };
  }

  const data = (await response.json()) as RecaptchaVerifyResponse;
  return data.success ? { ok: true } : { ok: false, reason: "invalid" };
}
