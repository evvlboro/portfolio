"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type FormEvent } from "react";
import type ReCAPTCHA from "react-google-recaptcha";
import { useContactModal } from "@/components/ContactModalProvider/ContactModalProvider";
import { contactFormStyles as s } from "./ContactForm.styles";

const RecaptchaWidget = dynamic(() => import("./RecaptchaWidget"), { ssr: false });

type FormState = "idle" | "loading" | "success" | "error";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export function ContactForm() {
  const { isOpen, close } = useContactModal();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaKey, setRecaptchaKey] = useState(0);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setFormState("idle");
        setErrorMessage("");
        setRecaptchaKey((key) => key + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const recaptchaTokenValue = recaptchaRef.current?.getValue();
    if (!recaptchaTokenValue) {
      setFormState("error");
      setErrorMessage("Подтвердите, что вы не робот");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      contacts: String(formData.get("contacts") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      recaptchaToken: recaptchaTokenValue,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Не удалось отправить сообщение");
      }

      setFormState("success");
    } catch (error) {
      setFormState("error");
      setErrorMessage(error instanceof Error ? error.message : "Произошла ошибка");
      setRecaptchaKey((key) => key + 1);
    }
  };

  return (
    <div className={s.overlay} onClick={close} role="presentation">
      <div
        className={s.modal}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-form-title"
      >
        <button type="button" className={s.closeBtn} onClick={close} aria-label="Закрыть">
          ×
        </button>

        {formState === "success" ? (
          <div className={s.success}>
            <div className={s.successIcon}>✓</div>
            <h3 className={s.successTitle}>Спасибо!</h3>
            <p className={s.successText}>Отвечу в ближайшее время.</p>
          </div>
        ) : (
          <>
            <h3 id="contact-form-title" className={s.title}>
              Связаться со мной
            </h3>
            <p className={s.subtitle}>Заполните форму — сообщение придёт мне в Telegram</p>

            <form className={s.form} onSubmit={handleSubmit}>
              <div className={s.field}>
                <label htmlFor="contact-name" className={s.label}>
                  Имя
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className={s.input}
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div className={s.field}>
                <label htmlFor="contact-contacts" className={s.label}>
                  Ваши контакты
                </label>
                <input
                  id="contact-contacts"
                  name="contacts"
                  type="text"
                  required
                  className={s.input}
                  placeholder="Как с вами связаться?"
                />
              </div>

              <div className={s.field}>
                <label htmlFor="contact-message" className={s.label}>
                  Сообщение
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  className={s.textarea}
                  placeholder="Расскажите о проекте или вакансии"
                />
              </div>

              {recaptchaSiteKey ? (
                <div className={s.recaptcha}>
                  <RecaptchaWidget
                    key={recaptchaKey}
                    ref={recaptchaRef}
                    siteKey={recaptchaSiteKey}
                    onExpired={() => setRecaptchaKey((key) => key + 1)}
                    onErrored={() => {
                      setFormState("error");
                      setErrorMessage("Не удалось загрузить капчу. Проверьте интернет и обновите страницу.");
                      setRecaptchaKey((key) => key + 1);
                    }}
                  />
                </div>
              ) : (
                <p className={s.error}>Капча не настроена. Добавьте NEXT_PUBLIC_RECAPTCHA_SITE_KEY.</p>
              )}

              {formState === "error" && <p className={s.error}>{errorMessage}</p>}

              <button
                type="submit"
                className={s.submitBtn}
                disabled={formState === "loading" || !recaptchaSiteKey}
              >
                {formState === "loading" ? "Отправка..." : "Отправить"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
