/** Единственный источник данных о профиле. Компоненты не хардкодят строки. */

export const profile = {
  handle: "Adel",
  role: { ru: "спортпрогер", en: "competitive programmer" },
  city: { ru: "Бишкек", en: "Bishkek" },
  tagline: {
    ru: "решаю задачи на время",
    en: "solving problems against the clock",
  },
  contacts: {
    telegram: { label: "@covercp", href: "https://t.me/covercp" },
    codeforces: { label: "abdihamitov", href: "https://codeforces.com/profile/abdihamitov" },
    github: { label: "github.com/Abdihamitov", href: "https://github.com/Abdihamitov" },
  },
} as const;

export type StackGroupId = "lang" | "tools";

export const stack: { group: StackGroupId; items: string[] }[] = [
  { group: "lang", items: ["Python", "TypeScript", "Dart"] },
  { group: "tools", items: ["Git", "Codeforces"] },
];

export const experience = [
  {
    id: "cp",
    title: { ru: "Спортивное программирование", en: "Competitive programming" },
    body: {
      ru: "Соревнуюсь на Codeforces. Текущие рейтинг и ранг на этой странице подгружаются сами.",
      en: "Competing on Codeforces. The current rating and rank on this page load automatically.",
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
