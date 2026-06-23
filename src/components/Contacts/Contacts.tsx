"use client";

import { personal } from "@/data/resume";
import { useContactModal } from "@/components/ContactModalProvider/ContactModalProvider";
import { Section } from "@/components/Section/Section";
import { SocialLinks } from "@/components/SocialLinks/SocialLinks";
import { contactsStyles as s } from "./Contacts.styles";

export function Contacts() {
  const { open } = useContactModal();

  return (
    <Section
      id="contact"
      title="Контакты"
      subtitle="Свяжитесь со мной — отвечу в ближайшее время"
      variant="alt"
    >
      <div className={s.wrapper}>
        <div className={s.card}>
          <p className={s.text}>
            Нахожусь в активном поиске работы. 
            Если есть предложения о работе - можете написать мне сюда. 
            Бот отправит мне ваше собющение в телеграм.
            Также внизу есть мои контакты.
          </p>

          <div className={s.contacts}>
            <a href={`mailto:${personal.email}`} className={s.contactLink}>
              {personal.email}
            </a>
            <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className={s.contactLink}>
              {personal.phone}
            </a>
            <a
              href={personal.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={s.contactLink}
            >
              Telegram: @aprilrynn
            </a>
          </div>

          <button type="button" className={s.ctaBtn} onClick={open}>
            Написать мне
          </button>

          <div className={s.socialBlock}>
            <p className={s.socialLabel}>Соцсети и профили</p>
            <div className={s.socialWrap}>
              <SocialLinks size="large" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
