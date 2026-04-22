"use client"
import { useState, useEffect } from 'react'
import { createSupabaseClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true)
  
  useEffect(() => {
    // Only run this code on the client side
    if (typeof window !== 'undefined') {
      const supabase = createSupabaseClient()
      
      const fetchStatus = async () => {
        const { data, error } = await supabase
          .from('restaurant_status')
          .select('is_open')
          .limit(1)
          .single()
        
        if (!error && data) {
          setIsOpen(data.is_open)
        }
      }

      fetchStatus()

      // Real-time subscription
      const channel = supabase
        .channel('restaurant-status-changes')
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'restaurant_status' },
          (payload) => {
            setIsOpen(payload.new.is_open)
          }
        )
        .subscribe()

      return () => {
        supabase.removeChannel(channel)
      }
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 glass px-4 py-4 flex items-center justify-between">
      <div className="font-serif font-bold text-2xl tracking-tight text-stone-900">
        La Flambée<span className="text-brand-500">.</span>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Live Status - Sceau de cire avec pulsation douce */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-organic border border-stone-200 shadow-soft">
          <span className="relative flex h-2.5 w-2.5">
            {isOpen && (
              <span className="absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-30 animate-ping duration-1000"></span>
            )}
            <span className={cn(
              "relative inline-flex rounded-full h-2.5 w-2.5", 
              isOpen ? "bg-success-500" : "bg-danger-500"
            )}></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 font-sans">
            {isOpen ? 'Ouvert' : 'Fermé'}
          </span>
        </div>
        
        <Button variant="ghost" size="sm" asChild>
          <a href="/admin">Admin</a>
        </Button>
      </div>
    </nav>
  )
}