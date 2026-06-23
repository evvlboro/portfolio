"use client";

import Image from "next/image";
import { personal } from "@/data/resume";
import { useContactModal } from "@/components/ContactModalProvider/ContactModalProvider";
import { heroStyles as s } from "./Hero.styles";

export function Hero() {
  const { open } = useContactModal();

  return (
    <section className={s.hero}>
      <div className={s.inner}>
        <div className={s.content}>
          <span className={s.badge}>Открыт к новым проектам</span>
          <h1 className={s.title}>
            <span className={s.highlight}>{personal.name}</span>
          </h1>
          <p className={s.role}>
            {personal.role} · {personal.tagline}
          </p>
          <p className={s.summary}>{personal.summary}</p>
          <div className={s.actions}>
            <a href="#projects" className={s.primaryBtn}>
              Смотреть проекты
            </a>
            <button type="button" className={s.secondaryBtn} onClick={open}>
              Связаться
            </button>
          </div>
        </div>

        <div className={s.imageWrap}>
          <Image
            src={personal.avatarImage}
            alt={personal.name}
            width={320}
            height={320}
            className={s.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
