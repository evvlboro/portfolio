import { NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/verifyRecaptcha";

type ContactPayload = {
  name: string;
  contacts: string;
  message: string;
  recaptchaToken?: string;
};

function getClientIp(request: Request): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim();
  }

  return request.headers.get("x-real-ip") ?? undefined;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const contacts = body.contacts?.trim();
    const message = body.message?.trim();

    if (!name || !contacts || !message) {
      return NextResponse.json({ error: "Заполните все поля" }, { status: 400 });
    }

    const recaptchaToken = body.recaptchaToken?.trim();
    if (!recaptchaToken) {
      return NextResponse.json({ error: "Подтвердите, что вы не робот" }, { status: 400 });
    }

    const recaptchaResult = await verifyRecaptcha(recaptchaToken, getClientIp(request));
    if (!recaptchaResult.ok) {
      if (recaptchaResult.reason === "missing_secret") {
        return NextResponse.json(
          { error: "Сервис временно недоступен. Напишите напрямую в Telegram." },
          { status: 503 },
        );
      }

      return NextResponse.json({ error: "Проверка капчи не пройдена" }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Сервис временно недоступен. Напишите напрямую в Telegram." },
        { status: 503 },
      );
    }

    const text = [
      "📩 Новое сообщение с сайта-визитки",
      "",
      `👤 Имя: ${name}`,
      `📞 Контакты: ${contacts}`,
      "",
      `💬 Сообщение:`,
      message,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      },
    );

    const telegramData = (await telegramResponse.json().catch(() => null)) as {
      ok?: boolean;
      description?: string;
    } | null;

    if (!telegramResponse.ok || !telegramData?.ok) {
      return NextResponse.json({ error: "Не удалось отправить сообщение" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Внутренняя ошибка сервера" }, { status: 500 });
  }
}
