"use client"
import React, { useEffect, useState } from 'react'; import { Zap, Terminal, Activity, Globe, Power, Plus } from 'lucide-react'; import { GlassCard } from '@/components/ui/GlassCard'; import { useRouter } from 'next/navigation';
export default function Dashboard() {
  const router = useRouter(); const [active, setActive] = useState(false);
  useEffect(() => { if(!localStorage.getItem('nexus_token')) router.push('/login'); }, [router]);
  return (
    <main className="min-h-screen grid-bg p-8">
      <div className="scanline" />
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-5xl font-black uppercase italic text-gradient">Nexus Gateway</h1>
        <button onClick={() => setActive(true)} className="glass px-8 py-4 rounded-xl font-black uppercase text-sm border-white/20 flex items-center gap-2"><Plus size={18}/> Deploy Offline</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 min-h-[300px] flex items-center justify-center">
          {!active ? <div className="text-zinc-600 uppercase font-mono text-xs tracking-widest">Fleet Offline // Awaiting Command</div> :
          <div className="w-full flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4"><Globe className="text-blue-400 animate-spin" /><div className="font-black uppercase italic">Genshin Impact Auto</div></div>
            <div className="text-green-500 font-mono text-xs">UPLINK_ACTIVE</div>
          </div>}
        </GlassCard>
        <GlassCard><h3 className="text-zinc-500 text-[10px] font-bold uppercase mb-4">Cloud Engine</h3><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /><span className="text-xs font-mono">24/7 PERSISTENCE ACTIVE</span></div></GlassCard>
        <GlassCard className="lg:col-span-3 bg-black/60 font-mono text-[10px] text-zinc-500"><Terminal size={14} className="mb-2 text-blue-400" />[00:00:01] HANDSHAKE_OK<br/>[00:00:02] CLOUD_SYNC_ENABLED</GlassCard>
      </div>
    </main>
  );
}
