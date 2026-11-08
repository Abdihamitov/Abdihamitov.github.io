import { useEffect, useState } from 'react'
import { profile } from '../content/profile'

export type CodeforcesUser = { rating: number; maxRating: number; rank: string; registeredAt: number }

const KEY = 'adel.codeforces'
const TTL = 600_000

function parse(v: unknown): CodeforcesUser | null {
  const o = v as Record<string, unknown> | null
  if (typeof o !== 'object' || o === null) return null
  const { rating, maxRating, rank, registrationTimeSeconds } = o
  if (typeof rating !== 'number' || typeof maxRating !== 'number' || typeof rank !== 'string' || typeof registrationTimeSeconds !== 'number') return null
  return { rating, maxRating, rank, registeredAt: registrationTimeSeconds * 1000 }
}

function readCache(): CodeforcesUser | null {
  try {
    const cached = JSON.parse(sessionStorage.getItem(KEY) ?? 'null') as { at: number; data: CodeforcesUser } | null
    return cached && Date.now() - cached.at < TTL ? cached.data : null
  } catch {
    return null
  }
}

/** One request per page load, shared by every panel that shows these numbers. */
let request: Promise<CodeforcesUser> | null = null

function load(): Promise<CodeforcesUser> {
  request ??= fetch(`https://codeforces.com/api/user.info?handles=${encodeURIComponent(profile.contacts.codeforces.label)}`)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
    .then((d: { result?: unknown[] }) => {
      const user = parse(d.result?.[0] ?? null)
      if (!user) throw new Error('unexpected codeforces payload')
      try {
        sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), data: user }))
      } catch {
        // private mode: no cache
      }
      return user
    })
    .catch((e: unknown) => {
      request = null
      throw e
    })
  return request
}

export function useCodeforces() {
  const [user, setUser] = useState<CodeforcesUser | null>(readCache)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    if (user) return
    let live = true
    load().then(
      (d) => live && setUser(d),
      () => live && setFailed(true),
    )
    return () => {
      live = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fetch once per mount
  }, [])
  return { user, failed }
}
