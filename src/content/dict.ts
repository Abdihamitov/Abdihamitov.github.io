/** Двуязычные строки интерфейса. Компоненты берут текст только отсюда. */

export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const dict = {
  header: {
    slogan: {
      ru: "контесты, серверы и опенинги",
      en: "contests, servers and openings",
    },
  },
  about: {
    short: {
      ru: "Адель, Бишкек. Backend и спортивное программирование.",
      en: "Adel from Bishkek. Backend and competitive programming.",
    },
    body: {
      ru: "Привет! Я Адель из Бишкека, backend-разработчик. Пишу на Python, Go и C++, занимаюсь спортивным программированием: участвовал в ICPC Kyrgyzstan Regional, занял 1 место в своём регионе на RuCode и 3 место на Startup Expo Osh. Написать мне проще всего в Telegram.",
      en: "Hi! I'm Adel from Bishkek, a backend developer. I write Python, Go and C++ and do competitive programming: I took part in the ICPC Kyrgyzstan Regional, placed 1st in my region at RuCode and 3rd at Startup Expo Osh. Telegram is the easiest way to reach me.",
    },
    note: {
      ru: "сайт собран на основе борда hvano",
      en: "built on hvano's board",
    },
    more: { ru: "читать целиком", en: "read all" },
    title: { ru: "обо мне.txt", en: "about_me.txt" },
  },
  profile: {
    city: { ru: "Город", en: "City" },
    rank: { ru: "Ранг", en: "Rank" },
    status: { ru: "Статус", en: "Status" },
    alive: { ru: "Жив", en: "Alive" },
    listening: { ru: "Слушает", en: "Listening" },
    loading: { ru: "Загрузка", en: "Loading" },
    days: { ru: "дней на CF", en: "days on CF" },
  },
  stack: {
    title: { ru: "стек", en: "stack" },
    open: { ru: "весь стек", en: "full stack list" },
    lang: { ru: "языки", en: "lang" },
    web: { ru: "веб", en: "web" },
    data: { ru: "данные", en: "data" },
    infra: { ru: "инфра", en: "infra" },
  },
  codeforces: {
    open: { ru: "профиль на codeforces", en: "codeforces profile" },
    unavailable: { ru: "codeforces недоступен", en: "codeforces unavailable" },
    rating: { ru: "рейтинг", en: "rating" },
    max: { ru: "максимум", en: "max rating" },
    rank: { ru: "ранг", en: "rank" },
  },
  settings: {
    lang: { ru: "Язык", en: "Language" },
    motion: { ru: "Анимации", en: "Motion" },
    on: { ru: "Вкл", en: "On" },
    off: { ru: "Выкл", en: "Off" },
  },
  achievements: {
    label: { ru: "Достижения", en: "Achievements" },
    next: { ru: "дальше", en: "next" },
  },
  system: {
    title: { ru: "Системное сообщение", en: "System Message" },
    ok: { ru: "Ок", en: "Ok" },
    cancel: { ru: "Отмена", en: "Cancel" },
    expand: { ru: "Развернуть", en: "Expand" },
  },
  contact: {
    telegram: { ru: "написать в телеграм", en: "message on telegram" },
    codeforces: { ru: "codeforces", en: "codeforces" },
    github: { ru: "гитхаб", en: "github" },
  },
  experience: {
    prefix: { ru: "Документ:", en: "Document of" },
    title: { ru: "документы опыта", en: "experience documents" },
  },
  shrine: {
    title: { ru: "Виртуальная картина.", en: "Virtual Picture." },
    menu: {
      file: { ru: "Файл", en: "File" },
      action: { ru: "Действие", en: "Action" },
      help: { ru: "Помощь", en: "Help" },
    },
    next: { ru: "Дальше", en: "Next" },
    prev: { ru: "Назад", en: "Prev" },
    open: { ru: "открыть целиком", en: "open full size" },
    random: { ru: "случайный арт", en: "random art" },
    credit: { ru: "арт:", en: "art:" },
    artAlt: { ru: "Фанарт Фрирен, автор", en: "Frieren fan art by" },
  },
  player: {
    songs: { ru: "Песни", en: "Songs" },
    open: { ru: "открыть плеер", en: "open player" },
    play: { ru: "играть", en: "play" },
    pause: { ru: "пауза", en: "pause" },
    prev: { ru: "предыдущий трек", en: "previous track" },
    next: { ru: "следующий трек", en: "next track" },
    playlist: { ru: "плейлист", en: "playlist" },
    like: { ru: "нравится", en: "like" },
    watch: { ru: "открыть клип на youtube", en: "open video on youtube" },
    progress: { ru: "прогресс трека", en: "track progress" },
    volume: { ru: "громкость", en: "volume" },
    track: { ru: "трек", en: "track" },
    vol: { ru: "громк", en: "vol" },
    unmute: { ru: "включи звук", en: "unmute" },
    unplayable: { ru: "трек не играет", en: "track unavailable" },
    close: { ru: "свернуть плеер", en: "minimize player" },
  },
  clock: {
    label: { ru: "Местное время", en: "Local time" },
    toggle: { ru: "переключить 12/24 часа", en: "toggle 12/24 hours" },
  },
  a11y: {
    close: { ru: "закрыть", en: "close" },
    rotate: { ru: "поверни телефон горизонтально", en: "turn your phone sideways" },
  },
} as const;
