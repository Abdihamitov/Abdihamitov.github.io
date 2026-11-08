/** Лог постройки сайта. Каждая строка соответствует реально сделанному куску. */

export type UpdateEntry = {
  id: string;
  /** ISO-дата, YYYY-MM-DD. */
  date: string;
  body: { ru: string; en: string };
};

export const updates: UpdateEntry[] = [
  {
    id: "base",
    date: "2026-11-08",
    body: {
      ru: "Основа: борд hvano (hvanox.github.io), пересобранный под мой профиль.",
      en: "Base: hvano's board (hvanox.github.io), rebuilt around my profile.",
    },
  },
  {
    id: "frieren",
    date: "2026-11-08",
    body: {
      ru: "Новый персонаж и палитра: Фрирен, зелёный и золотой.",
      en: "New character and palette: Frieren, green and gold.",
    },
  },
  {
    id: "playlist",
    date: "2026-11-08",
    body: {
      ru: "Плеер: опенинги и эндинги «Фрирен», официальные клипы.",
      en: "Player: Frieren openings and endings, official videos.",
    },
  },
  {
    id: "codeforces",
    date: "2026-11-08",
    body: {
      ru: "Рейтинг и ранг теперь подгружаются с Codeforces.",
      en: "Rating and rank now load live from Codeforces.",
    },
  },
];
