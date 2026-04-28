"use client"
import React, { useState } from 'react'; import { motion } from 'framer-motion'; import { Zap, Key } from 'lucide-react'; import { GlassCard } from '@/components/ui/GlassCard'; import { useRouter } from 'next/navigation';
export default function LoginPage() {
  const [t, setT] = useState(''); const router = useRouter();
  const login = () => { if(t) { localStorage.setItem('nexus_token', t); router.push('/'); } };
  return (
    <main className="min-h-screen grid-bg flex items-center justify-center p-6">
      <div className="scanline" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-md">
        <div className="text-center mb-8"><Zap className="mx-auto w-12 h-12 text-blue-500 mb-4" /><h1 className="text-3xl font-black text-gradient uppercase italic">Nexus Bot</h1></div>
        <GlassCard className="space-y-6">
          <input type="password" value={t} onChange={e=>setT(e.target.value)} placeholder="Discord Token" className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white" />
          <button onClick={login} className="w-full bg-white text-black font-black py-4 rounded-xl uppercase hover:bg-blue-400 transition-all">Initialize Uplink</button>
        </GlassCard>
      </motion.div>
    </main>
  );
}
