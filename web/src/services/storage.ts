import { DAILY_TURNS, TZ } from "@/constants";
import { TimeService as time } from "@/services/time";

export type PersistedState = {
  dayISO: string;
  turnsMax: number;
  turnsLeft: number;
  ageDays: number;     // ⬅️ PRIDANÉ
  totalTurns: number;  // ⬅️ PRIDANÉ (historický súčet END TURN)
};

export type Resources = { he3: number; titanium: number; water: number };

const K = {
  state: (userId: string, seasonId: string) => `hv:state:${userId}:${seasonId}`,
  res:   (userId: string, seasonId: string) => `hv:res:${userId}:${seasonId}`,
};

export const Storage = {
  loadState(userId: string, seasonId: string): PersistedState {
    const def: PersistedState = {
      dayISO: time.todayISO(TZ),
      turnsMax: DAILY_TURNS,
      turnsLeft: DAILY_TURNS,
      ageDays: 0,
      totalTurns: 0,
    };
    const raw = typeof window !== "undefined" ? localStorage.getItem(K.state(userId, seasonId)) : null;
    if (!raw) return def;
    const parsed = JSON.parse(raw);
    // merge pre spätnú kompatibilitu
    return { ...def, ...parsed };
  },

  saveState(userId: string, seasonId: string, s: PersistedState) {
    localStorage.setItem(K.state(userId, seasonId), JSON.stringify(s));
  },

  loadResources(userId: string, seasonId: string): Resources {
    const raw = typeof window !== "undefined" ? localStorage.getItem(K.res(userId, seasonId)) : null;
    if (!raw) return { he3: 0, titanium: 0, water: 0 };
    return JSON.parse(raw) as Resources;
  },

  saveResources(userId: string, seasonId: string, r: Resources) {
    localStorage.setItem(K.res(userId, seasonId), JSON.stringify(r));
  },
};