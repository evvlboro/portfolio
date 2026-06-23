import { personal } from "@/data/resume";
import { footerStyles as s } from "./Footer.styles";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <p className={s.text}>
          © {year} {personal.name}. Frontend Developer.
        </p>
        <p className={s.text}>Ссылка на проект:&nbsp;
          <a
            href={personal.projectGithub}
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            GitHub →
          </a>
        </p>
      </div>
    </footer>
  );
}
