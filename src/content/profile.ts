/** Единственный источник данных о профиле. Компоненты не хардкодят строки. */

export const profile = {
  handle: "Adel",
  role: { ru: "backend-разработчик", en: "backend developer" },
  city: { ru: "Бишкек", en: "Bishkek" },
  tagline: {
    ru: "пишу бэкенд, решаю задачи на время",
    en: "building backends, solving problems against the clock",
  },
  contacts: {
    telegram: { label: "@covercp", href: "https://t.me/covercp" },
    codeforces: { label: "abdihamitov", href: "https://codeforces.com/profile/abdihamitov" },
    github: { label: "github.com/Abdihamitov", href: "https://github.com/Abdihamitov" },
  },
} as const;

export type StackGroupId = "lang" | "web" | "data" | "infra";

export const stack: { group: StackGroupId; items: string[] }[] = [
  { group: "lang", items: ["Python", "Go", "C++", "SQL"] },
  { group: "web", items: ["Django", "FastAPI"] },
  { group: "data", items: ["PostgreSQL", "Redis", "RabbitMQ"] },
  { group: "infra", items: ["Docker", "Nginx"] },
];

export const achievements = [
  {
    id: "rucode",
    year: "2026",
    result: { ru: "1 место", en: "1st place" },
    title: { ru: "RuCode, свой регион", en: "RuCode, home region" },
  },
  {
    id: "osh",
    year: "2026",
    result: { ru: "3 место", en: "3rd place" },
    title: { ru: "Startup Expo Osh", en: "Startup Expo Osh" },
  },
  {
    id: "icpc",
    year: "2026",
    result: { ru: "Участник", en: "Participant" },
    title: { ru: "ICPC Kyrgyzstan Regional", en: "ICPC Kyrgyzstan Regional" },
  },
] as const;

export const experience = [
  {
    id: "backend",
    title: { ru: "Backend-разработка", en: "Backend development" },
    body: {
      ru: "Python, Go и C++. Django и FastAPI, PostgreSQL, Redis, RabbitMQ, Docker и Nginx.",
      en: "Python, Go and C++. Django and FastAPI, PostgreSQL, Redis, RabbitMQ, Docker and Nginx.",
    },
  },
  {
    id: "cp",
    title: { ru: "Спортивное программирование", en: "Competitive programming" },
    body: {
      ru: "Участник ICPC Kyrgyzstan Regional 2026, 1 место в своём регионе на RuCode 2026. Текущие рейтинг и ранг с Codeforces на этой странице подгружаются сами.",
      en: "ICPC Kyrgyzstan Regional 2026 participant, 1st place in my region at RuCode 2026. The current Codeforces rating and rank on this page load automatically.",
    },
  },
  {
    id: "startup",
    title: { ru: "Стартапы", en: "Startups" },
    body: {
      ru: "3 место на Startup Expo Osh 2026.",
      en: "3rd place at Startup Expo Osh 2026.",
    },
  },
  {
    id: "open",
    title: { ru: "Открыт к предложениям", en: "Open to offers" },
    body: {
      ru: "Проще всего написать в Telegram: @covercp.",
      en: "The easiest way to reach me is Telegram: @covercp.",
    },
  },
] as const;
