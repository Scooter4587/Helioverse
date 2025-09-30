'use client';
import BaseStats from '@/ui/BaseStats';

export default function BaseLayout() {
  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:'280px 1fr 280px',
      gap:16,
      alignItems:'start',
    }}>
      {/* Ľavý panel */}
      <BaseStats />

      {/* Stredný panel – zatiaľ placeholder */}
      <section style={{border:'1px dashed #ccc', borderRadius:8, padding:16, minHeight:300}}>
        <h3 style={{marginTop:0}}>Manažment základne</h3>
        <p style={{opacity:0.8}}>Sem pôjde správa budov, jobs, storage…</p>
      </section>

      {/* Pravý panel – zatiaľ prázdny (rezervované) */}
      <aside />
    </div>
  );
}