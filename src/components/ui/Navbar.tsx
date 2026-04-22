"use client"
import { mockStatus } from '@/data/mock-db'
import { cn } from '@/lib/utils'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass px-4 py-4 flex items-center justify-between">
      <div className="font-serif font-bold text-2xl tracking-tight text-stone-900">
        La Flambée<span className="text-brand-500">.</span>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Live Status - Sceau de cire avec pulsation douce */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-organic border border-stone-200 shadow-soft">
          <span className="relative flex h-2.5 w-2.5">
            {mockStatus.isOpen && (
              <span className="absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-30 animate-ping duration-1000"></span>
            )}
            <span className={cn(
              "relative inline-flex rounded-full h-2.5 w-2.5", 
              mockStatus.isOpen ? "bg-success-500" : "bg-danger-500"
            )}></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 font-sans">
            {mockStatus.isOpen ? 'Ouvert' : 'Fermé'}
          </span>
        </div>
        
        <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </nav>
  )
}