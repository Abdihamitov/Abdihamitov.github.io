import { Atom, ChartLineUp, Flower, GearFine } from '@phosphor-icons/react'
import { useState } from 'react'
import art from '../../content/art.json'
import { dict } from '../../content/dict'
import { playlist } from '../../content/playlist'
import { profile, stack } from '../../content/profile'
import { useCodeforces } from '../../lib/codeforces'
import { useDialogs } from '../../lib/dialogs'
import { useI18n } from '../../lib/i18n'
import { usePlayer } from '../../lib/player'
import { bevel, box, ring, sh, u } from '../../lib/u'
import { usePlayerDialog } from '../player/PlayerDialog'
import { Press } from '../ui/primitives'

type Art = (typeof art)[number]
const portraits = art.filter((a) => a.ratio === 'portrait')
const squares = art.filter((a) => a.ratio === 'square')

/** Photo frame: white mat, grey hairline, fan art inside. */
function Frame({ w, h, x, y, r = 9, item, alt }: { w: number; h: number; x: number; y: number; r?: number; item: Art; alt: string }) {
  return (
    <div
      className="absolute overflow-hidden bg-paper"
      style={{
        ...box(w, h),
        left: u(x),
        top: u(y),
        borderRadius: u(r),
        padding: u(3),
        boxShadow: sh(`inset 0 0 0 ${u(1)} var(--color-shade)`),
      }}
    >
      <img
        key={item.src}
        src={item.src}
        alt={alt}
        title={alt}
        width={item.width}
        height={item.height}
        className="rise block size-full object-cover"
        style={{ borderRadius: u(r - 3) }}
        loading="lazy"
      />
    </div>
  )
}

/** "Lucky Girl" card: role, short bio, two framed arts, handle in script. */
export function ProfileCard() {
  const { t } = useI18n()
  const { show } = useDialogs()
  const [i, setI] = useState(0)
  const portrait = portraits[i % portraits.length]
  const square = squares[i % squares.length]
  const step = (d: number) => setI((n) => (n + d + 60) % 60)

  const clover = (side: 'left' | 'right') => (
    <Press
      label={side === 'left' ? t(dict.shrine.prev) : t(dict.shrine.next)}
      onClick={() => step(side === 'left' ? -1 : 1)}
      className="absolute rounded-full bg-cream transition-colors duration-300 hover:bg-cream-hi"
      style={{
        ...box(25, 25),
        top: u(86),
        [side]: u(-7),
        boxShadow: sh(ring(1.6, 'var(--color-cream-hi)'), ring(2.6, 'rgb(20 44 38 / 0.25)'), 'inset 0 calc(var(--u)*-1.5) 0 rgb(20 44 38 / 0.12)'),
      }}
    >
      <Flower weight="fill" size={u(16)} color="var(--color-pine)" />
    </Press>
  )

  return (
    <section className="relative" style={box(186, 166)} aria-label={profile.handle}>
      <div
        className="absolute inset-0 bg-pine"
        style={{ borderRadius: u(11), boxShadow: sh(`inset 0 0 0 ${u(1.2)} #3a6456`, ring(0.6, 'rgb(20 44 38 / 0.5)')) }}
      />
      <Frame w={83} h={146} x={8} y={11} r={10} item={portrait} alt={`${t(dict.shrine.artAlt)} ${portrait.artist}`} />
      <h1
        className="absolute m-0 grid place-items-center bg-cream font-sans font-bold text-ink"
        style={{ ...box(72, 12), left: u(102), top: u(9), fontSize: u(t(profile.role).length > 16 ? 6 : 7.2), boxShadow: sh(ring(0.7, 'var(--color-shade)'), bevel(0.9)) }}
      >
        <span className="sr-only">{profile.handle}: </span>
        <span className="truncate">{t(profile.role)}</span>
      </h1>
      <p
        className="absolute m-0 grid place-items-center text-center font-sans font-bold text-cream-hi"
        style={{ left: u(94), top: u(25), width: u(90), height: u(31), fontSize: u(4.5), lineHeight: 1.32, letterSpacing: '0.02em' }}
      >
        {t(dict.about.short)}
      </p>
      <Frame w={81} h={73} x={98} y={58} r={8} item={square} alt={`${t(dict.shrine.artAlt)} ${square.artist}`} />
      <Press
        label={t(dict.about.more)}
        onClick={() => show('about')}
        className="absolute font-script text-cream-hi"
        style={{ left: u(98), top: u(134), width: u(82), height: u(28), fontSize: u(25), lineHeight: 1, background: 'transparent' }}
      >
        {profile.handle}
      </Press>
      {clover('left')}
      {clover('right')}
    </section>
  )
}

/** STEAMPUNK strip → stack summary; opens the full list. */
export function SpecStrip() {
  const { t } = useI18n()
  const { show } = useDialogs()
  const total = stack.reduce((sum, g) => sum + g.items.length, 0)
  return (
    <button
      type="button"
      aria-label={t(dict.stack.open)}
      onClick={() => show('stack')}
      className="relative block cursor-pointer border-0 bg-cream p-0 text-left text-ink transition-[filter] duration-200 hover:brightness-105"
      style={{
        ...box(117, 56),
        boxShadow: sh(ring(1, 'var(--color-cream-hi)'), `inset 0 0 0 ${u(2)} var(--color-cream)`, `inset 0 0 0 ${u(2.6)} var(--color-ink)`),
      }}
    >
      <span className="absolute flex items-center justify-between font-mono uppercase" style={{ left: u(7), top: u(4), right: u(7), fontSize: u(4.2) }}>
        <span className="font-bold italic">{t(dict.stack.title)}</span>
        <span>___@{profile.handle}</span>
        <span className="tabular-nums">({total})</span>
      </span>
      <span className="absolute bg-ink" style={{ left: u(5), right: u(5), top: u(11), height: u(0.6) }} />
      <span className="absolute bg-ink" style={{ ...box(2.2, 36), left: u(6), top: u(15) }} />
      <span className="absolute" style={{ ...box(36, 36), left: u(10), top: u(15) }}>
        <GearFine weight="fill" size={u(34)} color="var(--color-ink)" className="absolute left-0 top-0" />
        <Atom weight="bold" size={u(24)} color="var(--color-ink)" className="absolute" style={{ left: u(13), top: u(4) }} />
      </span>
      <span className="absolute flex flex-col font-sans font-bold" style={{ left: u(52), top: u(14), width: u(58), fontSize: u(3.3), lineHeight: 1.3 }}>
        {stack.slice(0, 3).map((g) => (
          <span key={g.group} className="truncate">
            {g.items.join(' ')}
          </span>
        ))}
      </span>
      <span className="barcode absolute opacity-60" style={{ ...box(26, 7), right: u(7), bottom: u(6) }} />
    </button>
  )
}

/** "User Interface" tile → live Codeforces numbers; the tile links to the profile. */
export function ChartTile() {
  const { t } = useI18n()
  const { user, failed } = useCodeforces()

  // No invented numbers: dots while loading, an honest line on failure.
  const text = user ? `${user.rating} · ${user.rank}` : failed ? t(dict.codeforces.unavailable) : '· · ·'

  return (
    <div className="relative" style={box(117, 104)}>
      <div className="absolute bg-field-deep" style={{ inset: 0, transform: `translate(${u(-3)}, ${u(-3)})`, borderRadius: u(12) }} />
      <div className="absolute inset-0 bg-pine" style={{ borderRadius: u(12), boxShadow: sh(`inset 0 0 0 ${u(1.2)} #3a6456`) }} />
      <a
        href={profile.contacts.codeforces.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(dict.codeforces.open)}
        className="absolute grid place-items-center bg-cream transition-[filter] duration-200 hover:brightness-105"
        style={{
          ...box(88, 60),
          left: u(6),
          top: u(7),
          borderRadius: u(9),
          boxShadow: sh(ring(1.2, 'var(--color-cream-hi)'), 'inset 0 calc(var(--u)*-2) 0 rgb(20 44 38 / 0.08)'),
        }}
      >
        <ChartLineUp weight="bold" size={u(50)} color="var(--color-ink)" />
      </a>
      <p
        aria-live="polite"
        className="absolute m-0 flex items-center truncate font-sans text-ink"
        style={{
          ...box(68, 12),
          left: u(9),
          top: u(77),
          borderRadius: u(6),
          background: '#7fa895',
          boxShadow: sh(`inset 0 0 0 ${u(0.8)} var(--color-ink)`),
          paddingLeft: u(5),
          fontSize: u(5.2),
        }}
      >
        {text}
      </p>
    </div>
  )
}

/** "Aisana Songs" card → mini player: badge opens the player, pills pick tracks, lyrics roll. */
export function SongsCard() {
  const { t } = useI18n()
  const { setOpen } = usePlayerDialog()
  const { track, time, duration, select } = usePlayer()
  const tags = [
    { x: 3, y: 140, w: 26, pill: false },
    { x: 42, y: 142, w: 38, pill: true },
    { x: 35, y: 158, w: 26, pill: false },
    { x: 3, y: 175, w: 26, pill: false },
    { x: 42, y: 177, w: 38, pill: true },
    { x: 35, y: 192, w: 26, pill: false },
  ]
  // Lyric line chosen proportionally to playback position: there are no timecodes.
  const lines = track.lyrics
  const at = lines.length > 0 && duration > 0 ? Math.min(lines.length - 1, Math.floor((time / duration) * lines.length)) : 0
  const visible = lines.length > 0 ? lines.slice(at, at + 4) : [track.title, track.artist]

  return (
    <section
      className="relative bg-pine"
      style={{ ...box(82, 213), borderRadius: u(3), boxShadow: sh(`inset 0 0 0 ${u(1)} #3a6456`) }}
      aria-label={t(dict.player.songs)}
    >
      <h2 className="absolute m-0 flex items-baseline justify-between font-script font-normal text-cream-hi" style={{ left: u(4), right: u(4), top: u(2), fontSize: u(11), lineHeight: 1.1 }}>
        <span>Frieren</span>
        <span
          aria-hidden
          className="block self-start rounded-full"
          style={{ ...box(9, 9), marginTop: u(1), background: '#c9a858', boxShadow: ring(0.8, '#e2c987') }}
        />
        <span>{t(dict.player.songs)}</span>
      </h2>
      <Press
        label={t(dict.player.open)}
        onClick={() => setOpen(true)}
        className="absolute rounded-full"
        style={{ ...box(66, 66), left: u(8), top: u(19), background: 'transparent' }}
      >
        <span
          className="absolute rounded-full bg-cream"
          style={{ ...box(59, 59), left: u(3), top: u(3.5), boxShadow: sh(ring(1.2, 'var(--color-cream-hi)')) }}
        />
        <svg aria-hidden viewBox="0 0 66 66" className="absolute inset-0" style={box(66, 66)}>
          <path d="M44 4 A31 31 0 0 1 36 64" fill="none" stroke="var(--color-cream-hi)" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M26 64 L 33 64" stroke="var(--color-cream-hi)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="absolute grid place-items-center" style={{ left: u(11), top: u(10) }}>
          <Flower aria-hidden weight="fill" size={u(44)} color="var(--color-pine)" />
        </span>
        {[
          [16, 42],
          [48, 42],
          [44, 22],
          [20, 20],
        ].map(([x, y], i) => (
          <span key={i} className="absolute block rounded-full bg-pine" style={{ ...box(2.4, 2.4), left: u(x), top: u(y) }} />
        ))}
      </Press>
      <div aria-live="polite" className="absolute flex flex-col justify-center text-center font-jp text-cream-hi" style={{ left: u(5), right: u(5), top: u(100), height: u(37) }}>
        {visible.map((line, i) => (
          <p key={`${at}-${i}`} className="m-0 truncate" style={{ fontSize: u(4), lineHeight: 1.5, opacity: i ? 0.6 : 1 }}>
            {line}
          </p>
        ))}
      </div>
      {playlist.map((item, i) => {
        const tg = tags[i]
        const active = item.id === track.id
        return (
          <Press
            key={item.id}
            label={`${item.title} - ${item.artist}`}
            pressed={active}
            onClick={() => select(item.id)}
            className="absolute font-jp text-ink transition-colors duration-200"
            style={{
              ...box(tg.w, 9),
              left: u(tg.x),
              top: u(tg.y),
              borderRadius: tg.pill ? u(4.5) : u(1.2),
              background: active ? 'var(--color-cream-hi)' : '#ddd7da',
              boxShadow: sh(ring(0.8, 'var(--color-ink)'), bevel(0.8), active && ring(1.8, 'var(--color-sage-hi)')),
              fontSize: u(4),
              fontWeight: active ? 700 : 500,
            }}
          >
            <span className="block truncate" style={{ maxWidth: u(tg.w - 3) }}>
              {item.title.replace(/\s*\(.*\)$/, '')}
            </span>
          </Press>
        )
      })}
    </section>
  )
}
