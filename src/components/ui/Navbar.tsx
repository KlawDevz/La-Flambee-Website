"use client"
import { mockStatus } from '@/data/mock-db'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass px-4 py-4 flex items-center justify-between">
      <div className="font-serif font-bold text-2xl tracking-tight text-stone-900">
        La Flambée<span className="text-brand-500">.</span>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Live Status Indicator */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-organic border border-stone-200 shadow-soft">
          <span className="relative flex h-2.5 w-2.5">
            {mockStatus.isOpen && <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-[#4B6E4F] opacity-75 duration-1000"></span>}
            <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", mockStatus.isOpen ? "bg-[#4B6E4F]" : "bg-[#8B2C2C]")}></span>
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