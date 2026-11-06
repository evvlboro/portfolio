export const personal = {
  name: "Евгений Боровиков",
  fullName: "Боровиков Евгений Владимирович",
  role: "Web Developer",
  tagline: "JavaScript / TypeScript · React · Node.js · AI-assisted development",
  summary:
    "Коммерческий опыт создания и поддержки сайтов, лендингов и веб-интерфейсов. JavaScript, TypeScript, React, интеграции с CRM и AI-assisted development.",
  email: "aprilryanwork@gmail.com",
  phone: "+375 (25) 631-53-74",
  telegram: "https://t.me/aprilrynn",
  github: "https://github.com/evvlboro",
  projectGithub: "https://github.com/evvlboro/portfolio",
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
    "Web-разработчик с коммерческим опытом создания и поддержки сайтов, лендингов и веб-интерфейсов. Основной опыт — JavaScript, TypeScript и React. Работал над коммерческими проектами, административными панелями, интеграциями с CRM и автоматизацией обмена данными.",
    "Активно использую AI-инструменты (Cursor, ChatGPT, Claude, DeepSeek) в разработке: анализирую существующий код, разбираюсь в чужих проектах, реализую изменения, исправляю ошибки и проверяю результат. Умею самостоятельно исследовать проблему и доводить решение до рабочего состояния.",
    "Интересуюсь развитием в современной веб-разработке, Node.js и AI-assisted development. Рассматриваю как frontend- и web-разработку, так и смежные направления, где можно применять навыки программирования и AI-инструменты.",
  ],
  hobby: "увлекаюсь видеоиграми и настолками.",
};

export const experience = [
  {
    period: "Октябрь 2026 — настоящее время",
    company: "Национальный статистический комитет Республики Беларусь (ИВЦ Белстат)",
    location: "Минск",
    url: "https://www.belstat.gov.by",
    role: "Инженер-программист",
    highlights: [
      "Участвую в доработке и подготовке к запуску нового сайта Белстата",
      "Исправляю ошибки и дорабатываю существующий код сайта и интерактивных статистических дашбордов",
      "Восстанавливаю работу страниц редактирования дашбордов и исправляю проблемы с отображением статистических данных",
      "Дорабатываю логику обновления интерфейса и повторной отрисовки графиков",
      "Переношу изменения на региональные версии сайта",
      "Проверяю корректность отображения данных, сопоставляя результаты с источниками ИАСБД",
      "Использую Cursor для анализа и доработки большого существующего кодового проекта",
    ],
    technologies: "JavaScript, PHP, HTML, CSS, D3.js, REST API, SDMX API, 1С-Битрикс, Cursor",
  },
  {
    period: "Июнь 2025 — март 2026",
    company: "На Связи",
    location: "Минск",
    url: "https://nsv.by",
    role: "Frontend Developer · Freelance / Contract",
    highlights: [
      "Разрабатывал и дорабатывал коммерческие сайты, лендинги и веб-интерфейсы",
      "Создал административную панель для управления содержимым нескольких сайтов, чтобы сотрудники могли самостоятельно обновлять контент",
      "Настраивал автоматизацию передачи данных из Google Sheets в CRM с использованием Albato и Google Apps Script",
      "Поддерживал существующие проекты и взаимодействовал с заказчиками",
    ],
    technologies: "JavaScript, TypeScript, React, Google Apps Script, Albato, CRM, REST API",
  },
  {
    period: "Август 2023 — июнь 2025",
    company: "Цитруском",
    location: "Минск",
    url: "https://www.citrusmall.by",
    role: "Frontend Developer",
    highlights: [
      "Разрабатывал рекламные лендинги, промо-страницы и сайты для маркетинговых и e-commerce проектов",
      "Создал около 50 шаблонов сайтов, которые использовались для массового запуска рекламных страниц под разные продукты и предложения",
      "Разрабатывал интерфейсы на JavaScript, HTML, CSS и React, а также дорабатывал существующие шаблоны",
      "Настраивал отправку заявок с сайтов во внутреннюю CRM через API",
      "Самостоятельно подключал Google Analytics и Яндекс Метрику, настраивал отслеживание событий и заявок",
      "Настраивал хостинги, домены и размещение веб-проектов",
      "Участвовал в техническом найме: составлял тестовые задания, проводил собеседования, оценивал кандидатов и помогал с адаптацией новых сотрудников",
      "Результаты: участвовал в создании и поддержке тысяч рекламных страниц на основе разработанных шаблонов; помогал расширять frontend-команду",
    ],
    technologies: "JavaScript, HTML, CSS, React, REST API, CRM, Google Analytics, Яндекс Метрика",
  },
  {
    period: "Октябрь 2021 — январь 2022",
    company: "GoHard",
    location: "",
    url: "https://www.gohard.team",
    role: "Frontend Developer · Outstaff",
    highlights: [
      "Участвовал в разработке веб-проекта в составе frontend-команды",
      "Реализовывал пользовательские интерфейсы, UI-компоненты и адаптивную вёрстку",
      "Работал в распределённой команде в формате аутстафф",
    ],
    project: {
      label: "bluechip.io",
      url: "https://bluechip.io/",
    },
  },
  {
    period: "Сентябрь 2020 — октябрь 2021",
    company: "Белтелеком",
    location: "",
    url: "https://beltelecom.by",
    role: "Инженер-программист",
    highlights: [
      "Был принят на позицию Java-разработчика",
      "Выполнял небольшие задачи по разработке программного обеспечения и исправлению ошибок",
      "Проходил дополнительное обучение по Java Spring Framework и получил сертификат",
      "Параллельно прошёл программу Яндекс Практикума по веб-разработке, после чего сосредоточился на JavaScript и frontend-разработке",
    ],
    technologies: "Java, Spring Framework",
  },
  {
    period: "Февраль 2018 — август 2020",
    company: "Центр Банковских Технологий (ЦБТ)",
    location: "Минск",
    url: "https://www.cbt.by",
    role: "Инженер-программист",
    highlights: [
      "Работал с базами данных Microsoft SQL Server в рамках сопровождения банковского программного обеспечения",
      "Писал SQL-запросы, работал с представлениями (Views) и данными",
      "Участвовал в поиске и устранении проблем, связанных с работой баз данных",
    ],
    technologies: "Microsoft SQL Server, SQL",
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
    company: "Цитруском",
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
    company: "На Связи",
    title: "Лендинги и сайты",
    url: "https://nsv.by",
    exampleUrl: "/demo/nsv/product/laptops",
    exampleLabel: "Пример проекта",
    description:
      `Разработка рекламных сайтов для интернет-магазина. Создание админ-панели для них и их интеграция с CRM компании.
      Выполнение разовых и краткосрочных проектов для интернет-магазина розничной торговли.`,
    stack: ["HTML", "CSS", "JavaScript", "React", "Material UI", "Node.js + Express", "PostgreSQL"],
    highlights: [
      "Разработка и доработка сайтов и лендингов",
      "Админ-панель для управления контентом нескольких сайтов",
      "Автоматизация передачи данных из Google Sheets в CRM",
    ],
    image: "/images/nsv.png",
  },
  {
    id: "tverkamen",
    badge: "Pet project",
    company: "",
    title: "ТВЕРЬКАМЕНЬ",
    exampleUrl: "https://tverkamen.vercel.app/",
    exampleLabel: "Пример проекта",
    description:
      "Pet-проект: frontend сайта компании по изготовлению гранитных памятников в Твери. Вёрстка по макету Figma, самостоятельная разработка в Cursor и деплой на Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    highlights: [
      "Главная, каталог с избранным и поиском, галерея и страницы услуг",
      "Адаптивная вёрстка по макету Figma (desktop и mobile)",
      "Самостоятельная разработка и деплой на Vercel",
    ],
    image: "/images/tverkamen.png",
  },
  {
    id: "clothing-store",
    badge: "Pet project",
    company: "",
    title: "Интернет-магазин одежды",
    exampleUrl: "https://clothing-store-pet-project-by-aprilrynn.vercel.app/",
    exampleLabel: "Пример проекта",
    description:
      "Pet-проект: frontend интернет-магазина одежды по макету. Каталог, карточки товаров, корзина, конструктор дизайна и контентные страницы. Самостоятельная разработка в Cursor и деплой на Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    highlights: [
      "Каталог, категории, карточки товаров и корзина",
      "Главная со слайдерами, страницы «О нас», услуги, доставка, оплата, отзывы и FAQ",
      "Адаптивная вёрстка по макету и деплой на Vercel",
    ],
    image: "/images/clothing-store.png",
  },
];

export const education = [
  {
    period: "2022–2023",
    institution: "Яндекс Практикум",
    specialty: "Программа по веб-разработке, frontend-разработка",
  },
  {
    period: "2021",
    institution: "Lectrum",
    specialty: "Курс React + Redux",
  },
  {
    period: "2018",
    institution: "Белорусский государственный университет, Минск",
    specialty: "Факультет прикладной математики и информатики · прикладная математика и информатика",
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
      "HTML",
      "CSS",
      "адаптивная вёрстка",
      "styled-components",
      "БЭМ",
    ],
  },
  {
    title: "Web / Backend",
    skills: [
      "Node.js",
      "Express",
      "REST API",
      "интеграция CRM",
      "Google Apps Script",
    ],
  },
  {
    title: "Инструменты",
    skills: [
      "Git",
      "Webpack",
      "Vite",
      "Cursor",
      "ChatGPT",
      "Claude",
      "DeepSeek",
    ],
  },
  {
    title: "Базы данных",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Microsoft SQL Server"],
  },
  {
    title: "Дополнительно",
    skills: [
      "D3.js",
      "1С-Битрикс",
      "Google Analytics",
      "Яндекс Метрика",
      "Jest",
    ],
  },
];
