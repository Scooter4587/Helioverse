'use client';
import { create } from 'zustand';
import { DAILY_TURNS, TZ } from '@/constants';
import { TimeService as time } from '@/services/time';
import { Storage, Resources } from '@/services/storage';

type GameStore = {
  userId?: string;
  seasonId?: string;

  // deň & ťahy
  dayISO: string;
  turnsMax: number;
  turnsLeft: number;

  // zdroje
  resources: Resources;

  // pending zmeny (aplikujú sa až pri END TURN)
  pending: Resources;

  // init
  initFor: (userId: string, seasonId?: string) => void;

  // akcie (plánovanie)
  queueMineHe3: (amount?: number) => void; // plán: +He3 (default +10)

  // spracovanie ťahu
  endTurn: () => void;

  // pomocné
  simulateMidnight: () => void; // dev reset dňa (ponechá turnsMax)
};

export const useGameStore = create<GameStore>((set, get) => ({
  userId: undefined,
  seasonId: undefined,

  dayISO: time.todayISO(TZ),
  turnsMax: DAILY_TURNS,
  turnsLeft: DAILY_TURNS,

  resources: { he3: 0, titanium: 0, water: 0 },
  pending:   { he3: 0, titanium: 0, water: 0 },

  initFor: (userId, seasonId = 'dev-season-1') => {
    const s = Storage.loadState(userId, seasonId);
    const r = Storage.loadResources(userId, seasonId);
    set({
      userId, seasonId,
      dayISO: s.dayISO,
      turnsMax: s.turnsMax,
      turnsLeft: s.turnsLeft,
      resources: r,
      pending:   { he3: 0, titanium: 0, water: 0 }, // nový ťah začíname s prázdnym pending
    });
  },

  queueMineHe3: (amount = 10) => {
    const { pending } = get();
    set({ pending: { ...pending, he3: pending.he3 + amount } });
  },

  endTurn: () => {
    const { userId, seasonId, turnsLeft, turnsMax, dayISO, resources, pending } = get();
    if (!userId || !seasonId) return;
    if (turnsLeft <= 0) return;

    // aplikuj všetky pending zmeny naraz
    const newRes: Resources = {
      he3: resources.he3 + pending.he3,
      titanium: resources.titanium + pending.titanium,
      water: resources.water + pending.water,
    };

    const nextState = { dayISO, turnsMax, turnsLeft: turnsLeft - 1 };

    // persist + uložiť do store
    Storage.saveState(userId, seasonId, nextState);
    Storage.saveResources(userId, seasonId, newRes);

    set({
      ...nextState,
      resources: newRes,
      pending: { he3: 0, titanium: 0, water: 0 }, // po spracovaní vyčistiť
    });
  },

  simulateMidnight: () => {
    const { userId, seasonId, turnsMax } = get();
    if (!userId || !seasonId) return;
    const next = { dayISO: time.todayISO(TZ), turnsMax, turnsLeft: turnsMax };
    Storage.saveState(userId, seasonId, next);
    set({
      ...next,
      pending: { he3: 0, titanium: 0, water: 0 }, // dev reset – vyčisti aj pending
    });
  },
}));