
import { useEffect, useState } from "react";

/**
 * Текущее время, тикающее раз в intervalMs. До монтирования — null:
 * сервер не знает часов посетителя, рассинхрон сломал бы гидрацию.
 */
export function useNow(intervalMs = 1000): Date | null {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}
