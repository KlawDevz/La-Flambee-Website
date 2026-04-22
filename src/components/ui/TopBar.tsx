"use client"
import { mockStatus } from '@/data/mock-db'
import { Bell } from 'lucide-react'

export default function TopBar() {
  if (!mockStatus.message) return null;
  
  return (
    <div className="bg-brand-900 px-4 py-2 flex items-center justify-center gap-2 text-xs sm:text-sm text-stone-50 border-b border-brand-900/50">
      <Bell size={16} className="text-brand-500 shrink-0 opacity-80" />
      <span className="font-serif tracking-wide text-center italic">{mockStatus.message}</span>
    </div>
  )
}