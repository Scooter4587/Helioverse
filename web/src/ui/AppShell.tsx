'use client';
import { useState } from 'react';
import { HUD } from '@/ui/HUD';
import { UserSwitcher } from '@/ui/UserSwitcher';
import { useGameStore } from '@/state/useGameStore';
import BaseLayout from '@/ui/BaseLayout';

function StatusTab() {
  return <div>🛰️ Status – sumár hráča a zdrojov (pribudne neskôr).</div>;
}
function HangarTab() {
  return <div>🚀 Hangár – flotily/lode (placeholder).</div>;
}

export default function AppShell() {
  const [tab, setTab] = useState<'status'|'base'|'hangar'>('base'); // ⬅️ nech defaultne skočíme do Základne
  const he3 = useGameStore(s => s.resources.he3);

  const container: React.CSSProperties = { maxWidth: 980, margin: '0 auto', width: '100%' };

  return (
    <div style={{display:'grid', gap:16, minHeight:'100dvh', gridTemplateRows:'auto 1fr auto'}}>
      {/* Header */}
      <header style={{ borderBottom:'1px solid #e5e5e5', padding:'8px 0' }}>
        <div style={{ ...container, display:'grid', gap:8 }}>
          <div style={{display:'flex', gap:12, alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
            <h1 style={{margin:0, fontSize:20}}>Helioverse</h1>
            <UserSwitcher />
          </div>
          <HUD />
        </div>
      </header>

      {/* Content */}
      <main style={{ ...container, width:'100%', padding:'12px 0' }}>
        {tab === 'status' && <StatusTab />}
        {tab === 'base'   && <BaseLayout />}
        {tab === 'hangar' && <HangarTab />}
      </main>

      {/* Footer – Navigácia + He-3 */}
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