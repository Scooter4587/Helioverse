'use client';
import { useEffect, useState } from 'react';
import { TimeService } from '@/services/time';

export function useClock(tz: string) {
  const [time, setTime] = useState(() => TimeService.timeHMS(tz));

  useEffect(() => {
    const id = setInterval(() => setTime(TimeService.timeHMS(tz)), 1000);
    return () => clearInterval(id);
  }, [tz]);

  return { time };
}