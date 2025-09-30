export interface TimePort {
  now(): Date;
  todayISO(tz: string): string;             // "YYYY-MM-DD" v danej timezone
  isNewDay(prevISO: string, tz: string): boolean;
  timeHMS(tz: string): string;              // "HH:MM:SS" v danej timezone
}

export const TimeService: TimePort = {
  now: () => new Date(),

  // napr. "2025-09-30" (sv-SE formát je ISO-like)
  todayISO: (tz) =>
    new Intl.DateTimeFormat("sv-SE", {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date()),

  isNewDay(prevISO, tz) {
    return this.todayISO(tz) !== prevISO;
  },

  // napr. "14:07:03" (24h, bez AM/PM), rešpektuje zvolenú timezone
  timeHMS: (tz) =>
    new Intl.DateTimeFormat("sv-SE", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date()),
};