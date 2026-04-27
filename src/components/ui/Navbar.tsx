"use client"
import { mockStatus } from '@/data/mock-db'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass px-4 py-4 flex items-center justify-between">
      <div className="font-serif font-bold text-2xl tracking-tight text-brand-900">
        La Flambée<span className="text-brand-500">.</span>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Live Status Indicator */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            {mockStatus.isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
            <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", mockStatus.isOpen ? "bg-emerald-600" : "bg-rose-600")}></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 font-sans">
            {mockStatus.isOpen ? 'Ouvert' : 'Fermé'}
          </span>
        </div>
        
        <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  )
}