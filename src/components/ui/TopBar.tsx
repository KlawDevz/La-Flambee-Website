"use client"
import { mockStatus } from '@/data/mock-db'
import { AlertCircle } from 'lucide-react'

export default function TopBar() {
  if (!mockStatus.message) return null;
  
  return (
    <div className="bg-brand-900/40 border-b border-brand-500/30 px-4 py-2.5 flex items-center justify-center gap-2 text-xs sm:text-sm text-brand-50 backdrop-blur-md">
      <AlertCircle size={16} className="text-brand-500 shrink-0" />
      <span className="font-medium tracking-wide text-center">{mockStatus.message}</span>
    </div>
  )
}