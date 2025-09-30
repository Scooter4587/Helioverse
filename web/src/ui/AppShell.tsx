'use client';
import { useState } from 'react';
import { HUD } from '@/ui/HUD';
import { UserSwitcher } from '@/ui/UserSwitcher';
import { useGameStore } from '@/state/useGameStore';

function StatusTab() {
  return <div>🛰️ Status – sumár hráča a zdrojov (pribudne neskôr).</div>;
}

function BaseTab() {
  const res = useGameStore(s => s.resources);
  const pending = useGameStore(s => s.pending);
  const queueHe3 = useGameStore(s => s.queueMineHe3);

  return (
    <div style={{display:'grid', gap:12}}>
      <h3 style={{margin:'8px 0'}}>Zdroje (Základňa)</h3>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gap:12}}>
        <div style={{padding:12, border:'1px solid #e5e5e5', borderRadius:8}}>
          <strong>Helium-3</strong>
          <div>{res.he3} {pending.he3 ? <em>(+{pending.he3} pending)</em> : null}</div>
        </div>
        <div style={{padding:12, border:'1px solid #e5e5e5', borderRadius:8}}>
          <strong>Titanium</strong>
          <div>{res.titanium} {pending.titanium ? <em>(+{pending.titanium} pending)</em> : null}</div>
        </div>
        <div style={{padding:12, border:'1px solid #e5e5e5', borderRadius:8}}>
          <strong>Water</strong>
          <div>{res.water} {pending.water ? <em>(+{pending.water} pending)</em> : null}</div>
        </div>
      </div>

      {/* plánovanie akcie: len pridá do pending; nič sa neaplikuje kým nestlačíš END TURN */}
      <div>
        <button onClick={() => queueHe3(10)}>Naplánovať ťažbu He-3 (+10)</button>
      </div>
    </div>
  );
}

function HangarTab() {
  return <div>🚀 Hangár – flotily/lode (placeholder).</div>;
}

export default function AppShell() {
  const [tab, setTab] = useState<'status'|'base'|'hangar'>('status');
  const he3 = useGameStore(s => s.resources.he3);

  // centrálny „container“ – vycentruje top aj bottom obsah
  const container: React.CSSProperties = { maxWidth: 980, margin: '0 auto', width: '100%' };

  return (
    <div style={{display:'grid', gap:16, minHeight:'100dvh', gridTemplateRows:'auto 1fr auto'}}>
      {/* Header (vycentrovaný obsah) */}
      <header style={{ borderBottom:'1px solid #e5e5e5', padding:'8px 0' }}>
        <div style={{ ...container, display:'grid', gap:8 }}>
          <div style={{display:'flex', gap:12, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
            <h1 style={{margin:0, fontSize:20}}>Helioverse</h1>
            <UserSwitcher />
          </div>
          <HUD />
        </div>
      </header>

      {/* Content (vycentrovaný) */}
      <main style={{ ...container, width:'100%', padding:'12px 0' }}>
        {tab === 'status' && <StatusTab />}
        {tab === 'base'   && <BaseTab />}
        {tab === 'hangar' && <HangarTab />}
      </main>

      {/* Footer pás – Navigácia + He-3 spolu, vycentrovaný obsah */}
      <footer style={{ borderTop:'1px solid #e5e5e5', padding:'8px 0' }}>
        <div style={{ ...container, display:'flex', gap:12, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap' }}>
          <nav style={{display:'flex', gap:8}}>
            <button onClick={() => setTab('status')} aria-pressed={tab==='status'}>Status</button>
            <button onClick={() => setTab('base')} aria-pressed={tab==='base'}>Základňa</button>
            <button onClick={() => setTab('hangar')} aria-pressed={tab==='hangar'}>Hangár</button>
          </nav>
          <div style={{opacity:0.9}}>
            <strong>Suroviny:</strong> He-3: <span>{he3}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}