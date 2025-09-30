'use client';
import { useEffect } from 'react';
import { useAuth } from '@/services/mockAuth';
import { useGameStore } from '@/state/useGameStore';

export default function Bootstrapper({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const initFor = useGameStore(s => s.initFor);
  useEffect(() => { initFor(user.id); }, [user.id, initFor]);
  return <>{children}</>;
}