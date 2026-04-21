"use client"
import { mockStatus } from '@/data/mock-db'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass px-4 py-4 flex items-center justify-between">
      <div className="font-bold text-xl tracking-tighter uppercase">
        La Flambée<span className="text-brand-500">.</span>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Live Status Indicator */}
        <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
          <span className="relative flex h-2.5 w-2.5">
            {mockStatus.isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
            <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", mockStatus.isOpen ? "bg-green-500" : "bg-red-500")}></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
            {mockStatus.isOpen ? 'Ouvert' : 'Fermé'}
          </span>
        </div>
        
        <button className="p-2 text-zinc-300 hover:text-white transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  )
}