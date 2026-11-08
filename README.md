# Adel

**Live:** https://abdihamitov.github.io

Портфолио-борд с Фрирен. Рейтинг и ранг подгружаются с Codeforces, в плеере
официальные клипы с YouTube.

Основа сайта: [hvanox.github.io](https://github.com/hvanox/hvanox.github.io) от hvano,
по эдиту reathaa. Авторы артов подписаны на сайте, ссылки на источники лежат в
`src/content/art.json`.

## Разработка

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

Все тексты и данные лежат в `src/content/`. Деплой идёт через GitHub Actions при пуше в `main`.
