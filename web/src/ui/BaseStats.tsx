'use client';
import { useGameStore } from '@/state/useGameStore';

export default function BaseStats() {
  const ageDays       = useGameStore(s => s.ageDays);
  const turnsLeft     = useGameStore(s => s.turnsLeft);
  const totalTurns    = useGameStore(s => s.totalTurns);
  const population    = useGameStore(s => s.population);
  const employmentPct = useGameStore(s => s.employmentPct);
  const cityLevel     = useGameStore(s => s.cityLevel);
  const cityProg      = useGameStore(s => s.cityProgressPct);
  const satisfaction  = useGameStore(s => s.satisfactionPct);
  const crime         = useGameStore(s => s.crimePct);
  const rebels        = useGameStore(s => s.rebelsPct);
  const energy        = useGameStore(s => s.energy);
  const basePower     = useGameStore(s => s.basePower);

  // „veľkosť mesta“ ako si písal: lvl + percentá (1% = 100) → napr. lvl 3 + 45% => 345
  const citySize = `${cityLevel}${String(Math.round(cityProg)).padStart(2,'0')}`;

  const row = (label: string, value: React.ReactNode) => (
    <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
      <span style={{opacity:0.85}}>{label}</span>
      <strong>{value}</strong>
    </div>
  );

  return (
    <aside style={{
      display:'grid',
      gap:10,
      border:'1px solid #e5e5e5',
      borderRadius:8,
      padding:12,
      minWidth:260,
    }}>
      <h3 style={{margin:'4px 0 8px'}}>Štatistiky základne</h3>

      {row('Age', ageDays)}
      {row('Turns', <> {turnsLeft} <span style={{opacity:0.6}}>({totalTurns})</span> </>)}
      {row('Obyvateľstvo', population)}
      {row('Zamestnanosť', `${employmentPct}%`)}

      <hr style={{border:'none', borderTop:'1px solid #eee'}} />

      {row('Mesto (lvl)', cityLevel)}
      {row('Rozostavané', `${cityProg}%`)}
      {row('Veľkosť mesta', citySize)}

      <hr style={{border:'none', borderTop:'1px solid #eee'}} />

      {row('Spokojnosť', `${satisfaction}%`)}
      {row('Kriminalita', `${crime}%`)}
      {row('Rebeli', `${rebels}%`)}

      <hr style={{border:'none', borderTop:'1px solid #eee'}} />

      {row('Energia', energy)}
      {row('Sila základne', basePower)}
    </aside>
  );
}