'use client';
import { useGameStore } from '@/state/useGameStore';
import { useClock } from '@/services/clock';
import { TZ } from '@/constants';

export function HUD() {
  const dayISO    = useGameStore(st => st.dayISO);
  const turnsLeft = useGameStore(st => st.turnsLeft);
  const turnsMax  = useGameStore(st => st.turnsMax);
  const endTurn   = useGameStore(st => st.endTurn);
  const midnight  = useGameStore(st => st.simulateMidnight);
  const { time }  = useClock(TZ);

  return (
    <section style={{ display:'grid', gap:10 }}>
      <div style={{ display:'flex', gap:16, justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
        <strong>Day (TZ): {dayISO}</strong>
        <span>Time: {time}</span>
        <span>Turns: {turnsLeft} / {turnsMax}</span>
      </div>
      <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap' }}>
        <button onClick={endTurn}><strong>END TURN</strong></button>
        <button onClick={midnight}>Simulate midnight</button>
      </div>
    </section>
  );
}