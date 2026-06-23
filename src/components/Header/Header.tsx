"use client";

import { useState } from "react";
import { navItems } from "@/data/resume";
import { useContactModal } from "@/components/ContactModalProvider/ContactModalProvider";
import { headerStyles as s } from "./Header.styles";

export function Header() {
  const { open } = useContactModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <div className={s.top}>
          <a href="#" className={s.logo}>
            <span className={s.logoAccent}>{"{dev}"}</span>
          </a>

          <nav className={s.nav} aria-label="Основная навигация">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={s.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={s.actions}>
            <button type="button" className={s.contactBtn} onClick={open}>
              Связаться
            </button>
            <button
              type="button"
              className={s.menuBtn}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
            >
              <span className={s.menuBar} />
              <span className={s.menuBar} />
              <span className={s.menuBar} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className={s.mobileNav} aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={s.navLink}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
