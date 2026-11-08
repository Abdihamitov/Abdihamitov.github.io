import { Camera, ChartLineUp, DotsThree, FolderSimple, GithubLogo, Lightning, TelegramLogo, X } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { dict } from '../../content/dict'
import { experience, profile } from '../../content/profile'
import { useCalm } from '../../lib/calm'
import { useDialogs } from '../../lib/dialogs'
import { useI18n } from '../../lib/i18n'
import { useMotion } from '../../lib/motion'
import { usePlayer } from '../../lib/player'
import { EASE, bevel, box, ring, sh, u } from '../../lib/u'
import { usePlayerDialog } from '../player/PlayerDialog'
import { Press } from '../ui/primitives'

/** Thick cable: an arc over the GFX card and a U-loop under the square tile. */
export function CableLoop() {
  const calm = useCalm()
  const common = {
    fill: 'none',
    stroke: 'var(--color-pine)',
    strokeWidth: 10,
    strokeLinecap: 'round' as const,
    initial: calm ? false : { pathLength: 0 },
    animate: { pathLength: 1 },
  }
  return (
    <svg aria-hidden viewBox="0 0 160 190" className="pointer-events-none block overflow-visible" style={box(160, 190)}>
      <motion.path {...common} d="M26 44 C 24 6, 84 -2, 112 22" transition={{ duration: 1.1, delay: 0.3, ease: EASE }} />
      <motion.path {...common} d="M100 86 C 96 120, 98 176, 124 176 C 150 176, 152 128, 146 86" transition={{ duration: 1.3, delay: 0.5, ease: EASE }} />
    </svg>
  )
}

/** GFX / Graphic Design → API logo, role and slogan; folder opens the bio, shield goes to Telegram. */
export function GfxCard() {
  const { t } = useI18n()
  const { show } = useDialogs()
  return (
    <div className="relative" style={box(86, 147)}>
      <div className="absolute inset-0 bg-cream" style={{ borderRadius: u(9), boxShadow: sh(ring(1, 'var(--color-cream-hi)')) }} />
      <span aria-hidden className="absolute grid place-items-center rounded-full bg-pine" style={{ ...box(13, 13), left: u(6), top: u(7), boxShadow: ring(0.8, 'var(--color-paper)') }}>
        <X weight="bold" size={u(6)} color="var(--color-cream)" />
      </span>
      {/* striped italic logo, like the GFX mark */}
      <span
        aria-hidden
        className="absolute font-display font-black italic"
        style={{
          left: u(3),
          top: u(20),
          fontSize: u(27),
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'transparent',
          backgroundImage:
            'repeating-linear-gradient(180deg, var(--color-pine) 0 calc(var(--u)*2.4), rgb(36 73 63 / 0.3) calc(var(--u)*2.4) calc(var(--u)*3.4))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        CF
      </span>
      <Lightning aria-hidden weight="fill" size={u(14)} color="var(--color-pine)" className="absolute" style={{ left: u(44), top: u(46) }} />
      <Press
        label={t(dict.about.more)}
        onClick={() => show('about')}
        className="absolute bg-pine"
        style={{ ...box(56, 28), left: 0, top: u(58), borderRadius: u(14), justifyItems: 'end', boxShadow: ring(1, 'var(--color-cream-hi)') }}
      >
        <span className="grid place-items-center rounded-full bg-pine" style={{ ...box(28, 28), boxShadow: sh(ring(1, 'var(--color-cream-hi)')) }}>
          <span
            className="grid place-items-center bg-cream"
            style={{ ...box(14, 14), borderRadius: u(3.5), boxShadow: sh(`inset 0 0 0 ${u(1.4)} var(--color-ink)`, ring(0.8, 'var(--color-paper)')) }}
          >
            <FolderSimple weight="fill" size={u(8)} color="var(--color-ink)" />
          </span>
        </span>
      </Press>
      <div className="absolute text-ink" style={{ left: u(6), top: u(92), width: u(76) }}>
        <h2 className="m-0 truncate font-display font-extrabold italic first-letter:uppercase" style={{ fontSize: u(t(profile.role).length > 16 ? 5.2 : 6.6), lineHeight: 1.25 }}>
          {t(profile.role)}
        </h2>
        <p className="m-0 font-display font-extrabold italic" style={{ fontSize: u(3.4), lineHeight: 1.3, marginTop: u(1) }}>
          {t(dict.header.slogan)} / {t(profile.tagline)}
        </p>
      </div>
      <a
        href={profile.contacts.telegram.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(dict.contact.telegram)}
        className="absolute grid place-items-center bg-pine transition-colors duration-200 hover:bg-ink"
        style={{ ...box(18, 17), right: u(6), bottom: u(7), boxShadow: sh(ring(0.8, 'var(--color-paper)'), `inset 0 0 0 ${u(1)} #3a6456`) }}
      >
        <TelegramLogo weight="fill" size={u(10)} color="var(--color-cream)" />
      </a>
    </div>
  )
}

const BARS = [0.55, 0.9, 0.4, 0.75, 1, 0.5, 0.8, 0.35, 0.65]

/** Square tile → now playing equalizer; opens the player. */
export function SquareTile() {
  const { t } = useI18n()
  const { track, playing } = usePlayer()
  const { setOpen } = usePlayerDialog()
  return (
    <div
      className="relative"
      style={{ ...box(82, 78), background: '#2e5a4c', boxShadow: sh(`inset ${u(1.2)} ${u(1.2)} 0 #4d8370`, `inset ${u(-1.2)} ${u(-1.2)} 0 #1d3d34`) }}
    >
      <button
        type="button"
        aria-label={`${t(dict.player.open)}: ${track.title}`}
        onClick={() => setOpen(true)}
        className="absolute flex cursor-pointer flex-col border-0 bg-cream p-0 text-ink transition-[filter] duration-200 hover:brightness-105"
        style={{
          left: u(10),
          top: u(9),
          ...box(62, 62),
          borderRadius: u(4),
          padding: u(8),
          gap: u(3),
          boxShadow: sh(`inset 0 0 0 ${u(3.2)} var(--color-pine)`, ring(1.2, 'var(--color-paper)')),
        }}
      >
        <span aria-hidden className="flex min-h-0 w-full flex-1 items-end justify-between" style={{ gap: u(1.4) }}>
          {BARS.map((h, i) => (
            <span
              key={i}
              className="flex-1 origin-bottom bg-ink"
              style={{
                height: `${h * 100}%`,
                borderRadius: u(0.6),
                animation: playing ? `eq ${0.7 + (i % 4) * 0.18}s ease-in-out ${i * 0.07}s infinite` : 'none',
                transform: playing ? undefined : 'scaleY(0.16)',
                transition: 'transform 0.4s',
              }}
            />
          ))}
        </span>
        <span className="block w-full truncate text-left font-jp" style={{ fontSize: u(4.8) }}>
          {track.title}
        </span>
      </button>
    </div>
  )
}

/** On / Off toggles → language (RU | EN segments) and motion. */
export function CameraToggles() {
  const { locale, setLocale, t } = useI18n()
  const { motion: moving, setMotion } = useMotion()
  const camera = (filled: boolean) => (
    <span aria-hidden className="grid shrink-0 place-items-center" style={{ ...box(9, 9), background: filled ? 'var(--color-cream-hi)' : 'transparent' }}>
      <Camera weight="fill" size={u(7.5)} color="var(--color-ink)" />
    </span>
  )
  return (
    <div className="flex items-center" style={{ gap: u(5) }}>
      <div role="radiogroup" aria-label={t(dict.settings.lang)} className="flex items-center" style={{ height: u(15), gap: u(2), padding: `0 ${u(2)}` }}>
        {camera(true)}
        <span className="flex" style={{ boxShadow: ring(1, 'var(--color-paper)') }}>
          {(['ru', 'en'] as const).map((l) => {
            const active = locale === l
            return (
              <button
                key={l}
                type="button"
                role="radio"
                aria-checked={active}
                lang={l}
                onClick={() => setLocale(l)}
                className="grid cursor-pointer place-items-center border-0 p-0 font-sans font-bold uppercase transition-colors duration-200"
                style={{
                  ...box(12, 11),
                  fontSize: u(5.8),
                  background: active ? 'var(--color-paper)' : 'var(--color-ink)',
                  color: active ? 'var(--color-pine)' : 'rgb(238 242 234 / 0.55)',
                }}
              >
                {l}
              </button>
            )
          })}
        </span>
      </div>
      <Press
        label={`${t(dict.settings.motion)}: ${moving ? t(dict.settings.on) : t(dict.settings.off)}`}
        pressed={moving}
        onClick={() => setMotion(!moving)}
        className="items-center"
        style={{ display: 'flex', height: u(15), gap: u(2.5), padding: `0 ${u(2.5)}`, background: 'var(--color-cream)', boxShadow: ring(0.8, 'var(--color-paper)') }}
      >
        {camera(false)}
        <span className="grid place-items-center bg-ink font-sans font-bold text-paper" style={{ ...box(21, 11), fontSize: u(6.6), boxShadow: ring(1, 'var(--color-paper)') }}>
          {(moving ? t(dict.settings.on) : t(dict.settings.off)).toLowerCase()}
        </span>
      </Press>
    </div>
  )
}

/** "Heaven" panel → contacts: Telegram tag, Codeforces pill, GitHub side tag. */
export function MessagePanel() {
  const { t } = useI18n()
  return (
    <div className="relative" style={box(124, 50)}>
      <div className="absolute bg-pine" style={{ left: 0, top: u(4), width: u(104), bottom: 0, borderRadius: u(4), boxShadow: sh(ring(0.8, '#3a6456')) }} />
      <div
        aria-hidden
        className="absolute"
        style={{
          ...box(34, 12),
          left: u(56),
          top: u(12),
          background: 'repeating-linear-gradient(90deg, rgb(217 223 214 / 0.55) 0 calc(var(--u)*0.8), transparent calc(var(--u)*0.8) calc(var(--u)*2.6))',
          clipPath: 'polygon(0 0, 100% 0, 92% 100%, 6% 100%)',
        }}
      />
      <a
        href={profile.contacts.telegram.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(dict.contact.telegram)}
        className="absolute grid place-items-center bg-pine font-sans text-cream-hi no-underline transition-colors duration-200 hover:bg-ink"
        style={{ ...box(48, 13), left: u(52), top: 0, borderRadius: '50%', fontSize: u(5.4), boxShadow: sh(`inset 0 0 0 ${u(1.1)} var(--color-cream)`) }}
      >
        {profile.contacts.telegram.label}
      </a>
      <a
        href={profile.contacts.codeforces.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t(dict.contact.codeforces)}: ${profile.contacts.codeforces.label}`}
        className="absolute flex items-center bg-cream transition-[filter] duration-200 hover:brightness-105"
        style={{
          ...box(48, 17),
          left: u(38),
          top: u(26),
          borderRadius: u(8.5),
          padding: `0 ${u(2)} 0 ${u(6)}`,
          justifyContent: 'space-between',
          boxShadow: sh(ring(1, 'var(--color-paper)'), `inset 0 0 0 ${u(0.8)} var(--color-shade)`),
        }}
      >
        <span className="flex" style={{ gap: u(1.5) }}>
          {[0, 1, 2].map((i) => (
            <span key={i} className="block bg-ink" style={box(4, 4)} />
          ))}
        </span>
        <span className="grid place-items-center rounded-full bg-pine" style={{ ...box(13, 13), boxShadow: `inset 0 0 0 ${u(1)} var(--color-paper)` }}>
          <ChartLineUp weight="bold" size={u(7.5)} color="var(--color-paper)" />
        </span>
      </a>
      <a
        href={profile.contacts.github.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t(dict.contact.github)}
        className="absolute bg-cream transition-[filter] duration-200 hover:brightness-105"
        style={{ ...box(17, 37), right: 0, top: u(5), boxShadow: sh(ring(1, 'var(--color-paper)'), bevel(0.8)) }}
      >
        <span className="absolute grid place-items-center rounded-full bg-ink" style={{ ...box(10, 10), left: u(3.5), bottom: u(4) }}>
          <GithubLogo weight="fill" size={u(7)} color="var(--color-cream)" />
        </span>
      </a>
    </div>
  )
}

/** "Document of ..." rows → experience; open the documents window. */
export function DocumentRows() {
  const { t } = useI18n()
  const { show } = useDialogs()
  return (
    <div className="relative" style={box(132, 52)}>
      {[0, 22, 44].map((y) => (
        <div key={y} aria-hidden className="absolute bg-cream" style={{ ...box(52, 6), left: 0, top: u(y) }} />
      ))}
      {experience.slice(0, 2).map((item, i) => (
        <button
          key={item.id}
          type="button"
          onClick={() => show('experience', item.id)}
          className="absolute flex cursor-pointer items-center border-0 bg-pine p-0 text-left font-sans text-cream-hi transition-colors duration-200 hover:bg-ink"
          style={{ left: u(18), right: 0, top: u(6 + i * 22), height: u(15), borderRadius: u(3), paddingLeft: u(5), fontSize: u(5.6), boxShadow: ring(0.8, '#3a6456') }}
        >
          <span className="truncate" style={{ maxWidth: u(96) }}>
            {t(dict.experience.prefix)} {t(item.title).toLowerCase()}
          </span>
          <DotsThree aria-hidden weight="bold" size={u(10)} color="var(--color-paper)" className="absolute" style={{ right: u(3), top: u(-2) }} />
        </button>
      ))}
    </div>
  )
}

/** Cream plate with the monogram, cropped like the M/K plate. */
export function MonogramPlate() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden bg-cream"
      style={{ ...box(67, 104), boxShadow: sh(ring(1, 'var(--color-paper)'), `inset 0 0 0 ${u(3)} var(--color-cream)`, `inset 0 0 0 ${u(3.6)} #a9b5ac`) }}
    >
      <span className="absolute font-sans font-bold text-pine" style={{ right: u(4), top: u(2), fontSize: u(54), lineHeight: 0.9 }}>
        A
      </span>
      <span className="absolute font-sans font-bold text-pine" style={{ right: u(6), bottom: u(-6), fontSize: u(54), lineHeight: 0.9 }}>
        D
      </span>
    </div>
  )
}
