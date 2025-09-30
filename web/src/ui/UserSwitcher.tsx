'use client';
import { useAuth, mockCandidates } from '@/services/mockAuth';
import { useGameStore } from '@/state/useGameStore';

export function UserSwitcher() {
  const { user, setUser } = useAuth();
  const initFor = useGameStore(s => s.initFor);

  function switchTo(id: string) {
    const u = mockCandidates.find(c => c.id === id)!;
    setUser(u);
    initFor(u.id);
    const url = new URL(window.location.href);
    url.searchParams.set('user', u.id);
    window.history.pushState({}, '', url.toString());
  }

  return (
    <div style={{ display:'flex', gap:8, alignItems:'center' }}>
      <span>User:</span>
      <select value={user.id} onChange={e => switchTo(e.target.value)}>
        {mockCandidates.map(c => <option key={c.id} value={c.id}>{c.displayName}</option>)}
      </select>
    </div>
  );
}