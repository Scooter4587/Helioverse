'use client';
import { create } from 'zustand';
import { DAILY_TURNS, TZ } from '@/constants';
import { TimeService as time } from '@/services/time';
import { Storage, Resources, PersistedState } from '@/services/storage';

type GameStore = {
  userId?: string;
  seasonId?: string;

  // deň & ťahy (persist)
  dayISO: string;
  turnsMax: number;
  turnsLeft: number;
  ageDays: number;      // ⬅️ zobrazuje sa v ľavom paneli
  totalTurns: number;   // ⬅️ historický súčet (zobrazíme ako (XX))

  // zdroje (persist)
  resources: Resources;

  // pending zmeny (aplikujú sa pri END TURN)
  pending: Resources;

  // --- Base stats (ľavý panel) – zatiaľ placeholder hodnoty, neskôr dopočítame ---
  population: number;          // obyvatelia
  employmentPct: number;       // zamestnanosť v %
  cityLevel: number;           // level mesta
  cityProgressPct: number;     // % rozostavanosti k ďalšiemu levelu
  satisfactionPct: number;     // spokojnosť v %
  crimePct: number;            // kriminalita v %
  rebelsPct: number;           // rebeli v %
  energy: number;              // energia (jednotky/kapacita – neskôr)
  basePower: number;           // sila základne (index)

  // init
  initFor: (userId: string, seasonId?: string) => void;

  // plánovanie (len pending)
  queueMineHe3: (amount?: number) => void;
  queueTitanium: (amount?: number) => void;
  queueWater: (amount?: number) => void;

  // spracovanie ťahu
  endTurn: () => void;

  // dev reset dňa (inkrementuje Age)
  simulateMidnight: () => void;
};

export const useGameStore = create<GameStore>((set, get) => ({
  userId: undefined,
  seasonId: undefined,

  dayISO: time.todayISO(TZ),
  turnsMax: DAILY_TURNS,
  turnsLeft: DAILY_TURNS,
  ageDays: 0,
  totalTurns: 0,

  resources: { he3: 0, titanium: 0, water: 0 },
  pending:   { he3: 0, titanium: 0, water: 0 },

  // placeholder metriky ľavého panelu (nateraz statické/naše defaulty)
  population: 100,        // začnime so 100 obyvateľmi
  employmentPct: 60,      // 60%
  cityLevel: 1,
  cityProgressPct: 0,     // napr. 45% → napíšeme 345 ako veľkosť (lvl + progress)
  satisfactionPct: 75,
  crimePct: 5,
  rebelsPct: 1,
  energy: 100,
  basePower: 10,

  initFor: (userId, seasonId = 'dev-season-1') => {
    const s = Storage.loadState(userId, seasonId);
    const r = Storage.loadResources(userId, seasonId);
    set({
      userId, seasonId,
      dayISO: s.dayISO,
      turnsMax: s.turnsMax,
      turnsLeft: s.turnsLeft,
      ageDays: s.ageDays,
      totalTurns: s.totalTurns,
      resources: r,
      pending: { he3: 0, titanium: 0, water: 0 },
    });
  },

  queueMineHe3: (amount = 10) => {
    const { pending } = get();
    set({ pending: { ...pending, he3: pending.he3 + amount } });
  },
  queueTitanium: (amount = 5) => {
    const { pending } = get();
    set({ pending: { ...pending, titanium: pending.titanium + amount } });
  },
  queueWater: (amount = 3) => {
    const { pending } = get();
    set({ pending: { ...pending, water: pending.water + amount } });
  },

  endTurn: () => {
    const { userId, seasonId, turnsLeft, turnsMax, dayISO, ageDays, totalTurns, resources, pending } = get();
    if (!userId || !seasonId) return;
    if (turnsLeft <= 0) return;

    const newRes: Resources = {
      he3: resources.he3 + pending.he3,
      titanium: resources.titanium + pending.titanium,
      water: resources.water + pending.water,
    };

    const next: PersistedState = {
      dayISO,
      turnsMax,
      turnsLeft: turnsLeft - 1,
      ageDays,
      totalTurns: totalTurns + 1, // ⬅️ historický súčet
    };

    Storage.saveState(userId, seasonId, next);
    Storage.saveResources(userId, seasonId, newRes);

    set({
      ...next,
      resources: newRes,
      pending: { he3: 0, titanium: 0, water: 0 },
    });
  },

  simulateMidnight: () => {
    const { userId, seasonId, turnsMax, ageDays } = get();
    if (!userId || !seasonId) return;

    const next: PersistedState = {
      dayISO: time.todayISO(TZ),
      turnsMax,
      turnsLeft: turnsMax,
      ageDays: ageDays + 1,  // ⬅️ Age +1
      totalTurns: get().totalTurns,
    };

    Storage.saveState(userId, seasonId, next);
    set({
      ...next,
      pending: { he3: 0, titanium: 0, water: 0 },
    });
  },
}));