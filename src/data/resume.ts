export const personal = {
  name: "Евгений Боровиков",
  fullName: "Боровиков Евгений Владимирович",
  role: "Frontend Developer",
  tagline: "React · Next.js · TypeScript",
  summary:
    "Коммерческий опыт в банковской сфере, телекоме, e-commerce и продуктовых командах.",
  email: "aprilryanwork@gmail.com",
  phone: "+375 (25) 631-53-74",
  telegram: "https://t.me/aprilrynn",
  github: "https://github.com/evvlboro",
  placeholderImage: "/images/placeholder.png",
  avatarImage: "/images/ava.png",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/evvlboro", icon: "github" as const },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/evvlboro/", icon: "linkedin" as const },
  { name: "Telegram", url: "https://t.me/aprilrynn", icon: "telegram" as const },
  { name: "HH.ru", url: "https://hh.ru/resume/dc78a161ff0b1ca2b20039ed1f346643384f77", icon: "hh" as const },
  {
    name: "Rabota.by",
    url: "https://rabota.by/resume/dc78a161ff0b1ca2b20039ed1f346643384f77",
    icon: "rabota" as const,
  },
];

export const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Опыт", href: "#experience" },
  { label: "Проекты", href: "#projects" },
  { label: "Образование", href: "#education" },
  { label: "Навыки", href: "#skills" },
  { label: "Контакты", href: "#contact" },
];

export const about = {
  paragraphs: [
    "Frontend-разработчик с коммерческим опытом разработки веб-приложений. Работал в банковской сфере, телекоме, а также в продуктовых и аутсорс-командах. Участвовал в разработке и поддержке пользовательских интерфейсов, взаимодействовал с командой разработки и смежными отделами.",
    "Основной стек: JavaScript / TypeScript, React, Redux, Next.js. Есть опыт работы с Webpack, styled-components, tailwindcss и другими инструментами frontend-разработки. Использую AI-инструменты (Cursor, Claude Sonnet и др.). Имею опыт работы с различными БД (MySQL, MongoDB, MS SQL Server, PostgreSQL).",
    "Сейчас рассматриваю новые предложения и открыт к новым проектам.",
  ],
  hobby: "увлекаюсь видеоиграми и настолками.",
};

export const experience = [
  {
    period: "Июнь 2025 — Март 2026",
    company: "На связи",
    location: "Минск",
    url: "https://nsv.by",
    role: "Frontend Developer (фриланс)",
    highlights: [
      "Разработка и доработка сайтов и лендингов",
      "Выполнение разовых и краткосрочных проектов",
      "Поддержка существующих решений",
    ],
  },
  {
    period: "Август 2023 — Июнь 2025",
    company: "Циструком",
    location: "Минск",
    url: "https://www.citrusmall.by",
    role: "Frontend Developer",
    highlights: [
      "Разработка и поддержка корпоративных и промо-сайтов",
      "Интеграция с CRM и настройка процессов для менеджеров по заявкам",
      "Подключение аналитики, оптимизация производительности",
      "Участие в найме: собеседования, проверка тестовых, онбординг",
    ],
  },
  {
    period: "Октябрь 2021 — Январь 2022",
    company: "GoHard",
    location: "",
    url: "https://www.gohard.team",
    role: "Frontend Developer (аутстафф)",
    highlights: [
      "Разработка проекта с этапа запуска до активной фазы развития",
      "UI-компоненты, адаптивная вёрстка и frontend-функциональность",
      "Работа в распределённой команде в формате аутстафф",
    ],
  },
  {
    period: "Сентябрь 2020 — Октябрь 2021",
    company: "Белтелеком",
    location: "",
    url: "https://beltelecom.by",
    role: "Инженер-программист",
    highlights: [
      "Разработка и сопровождение программного обеспечения",
      "Поддержка внутренних IT-систем",
    ],
  },
  {
    period: "Февраль 2018 — Август 2020",
    company: "Центр Банковских Технологий",
    location: "Минск",
    url: "https://www.cbt.by",
    role: "Инженер-программист",
    highlights: [
      "Разработка и сопровождение банковского программного обеспечения",
      "Работа с внутренними системами и бизнес-логикой",
    ],
  },
];

export const portfolioCases = [
  {
    id: "bluechip",
    badge: "Работа на аутстафф",
    company: "GoHard",
    title: "BlueChip",
    url: "https://www.gohard.team/",
    exampleUrl: "https://bluechip.io/",
    exampleLabel: "Пример проекта",
    note: "Доступен через VPN с индийским регионом",
    description:
      "Участвовал в разработке проекта в составе frontend-команды с этапа запуска до активной фазы развития продукта.",
    stack: ["React", "TypeScript", "Redux", "Webpack"],
    highlights: [
      "Реализовывал UI-компоненты и адаптивную вёрстку",
      "Разрабатывал frontend-функциональность продукта",
      "Работал в распределённой команде в формате аутстафф",
    ],
    image: "/images/bluechip.png",
  },
  {
    id: "citrusmall",
    badge: "E-commerce",
    company: "Циструком",
    title: "Citrusmall",
    url: "https://www.citrusmall.by",
    exampleUrl: "/demo/citrusmall/",
    exampleLabel: "Пример проекта",
    description:
      `Разработка и поддержка корпоративных и промо-сайтов интернет-магазина. 
      Создавал одностраничники для рекламы с соцсетях.
      Интеграция с кастомной CRM компании и настройка процессов для менеджеров по заявкам с сайтов.`,
    stack: ["Создание одностраничных сайтов без макета", "Интеграция с CRM", "Подключение метрик", "Размещение на хостингах"],
    highlights: [
      "Вёрстка и разработка одностраничных промо-сайтов",
      "Интеграция с кастомной CRM и настройка обработки заявок",
      "Подключение аналитики, размещение на хостингах и сопровождение",
    ],
    image: "/images/citrusmall.png",
  },
  {
    id: "na-svyazi",
    badge: "Фриланс",
    company: "На связи",
    title: "Лендинги и сайты",
    url: "https://nsv.by",
    exampleUrl: "/demo/nsv/product/laptops",
    exampleLabel: "Пример проекта",
    description:
      `Разработка рекламнывх сайтов для интернет-магазина. Создание админ панели для них и их интеграция с CRM компании.
      Выполнение разовых и краткосрочных проектов для интернет-магазина розничной торговли.`,
    stack: ["HTML", "CSS", "JavaScript", "React", "Material UI", "Node.js + Express", "PostgreSQL"],
    highlights: [
      "Разработка и доработка сайтов и лендингов",
      "Выполнение разовых и краткосрочных проектов",
      "Поддержка существующих решений",
    ],
    image: "/images/nsv.png",
  },
];

export const education = [
  {
    period: "2022",
    institution: "Яндекс.Практикум",
    specialty: "Web-факультет, Front-end Developer",
  },
  {
    period: "2021",
    institution: "Lectrum",
    specialty: "React + Redux",
  },
  {
    period: "2018",
    institution: "Белорусский государственный университет, Минск",
    specialty: "ФПМИ, Прикладная математика и информатика",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "styled-components",
      "БЭМ",
    ],
  },
  {
    title: "Инструменты",
    skills: [
      "Git",
      "Webpack",
      "Vite",
      "REST API",
      "Node.js",
      "Express",
      "Jest",
      "AI-assisted development",
    ],
  },
  {
    title: "Базы данных",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "MS SQL"],
  },
  {
    title: "Прочее",
    skills: [
      "Разработка сайтов и веб-приложений",
      "Работа с CRM",
      "Английский B1",
    ],
  },
];
