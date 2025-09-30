'use client';
import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

export type MockUser = { id: string; displayName: string; createdAt: string };
const seed: MockUser[] = [
  { id: 'alice', displayName: 'Alice', createdAt: new Date().toISOString() },
  { id: 'bob',   displayName: 'Bob',   createdAt: new Date().toISOString() },
];

type Ctx = { user: MockUser; setUser: (u: MockUser) => void };
const AuthContext = createContext<Ctx | null>(null);

function fromQueryOrDefault(): MockUser {
  if (typeof window === 'undefined') return seed[0];
  const q = new URLSearchParams(window.location.search).get('user');
  return seed.find(u => u.id === q) ?? seed[0];
}

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser>(fromQueryOrDefault());
  useEffect(() => {
    const onPop = () => setUser(fromQueryOrDefault());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const value = useMemo(() => ({ user, setUser }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within MockAuthProvider');
  return ctx;
}

export const mockCandidates = seed;