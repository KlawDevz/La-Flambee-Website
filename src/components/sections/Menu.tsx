"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createSupabaseClient } from '@/lib/supabase/client'
import type { Category } from '@/data/mock-db'
import { cn } from '@/lib/utils'
import { Flame, Pizza, Leaf, IceCream } from 'lucide-react'

type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  category: Category
  isSignature: boolean
  isLocal: boolean
  isSoldOut: boolean
  allergens: string[]
}

const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: 'viandes', label: 'Viandes Maturées', icon: <Flame size={16} /> },
  { id: 'pizzas', label: 'Pizzas au Feu de Bois', icon: <Pizza size={16} /> },
  { id: 'salades', label: 'Salades', icon: <Leaf size={16} /> },
  { id: 'desserts', label: 'Desserts', icon: <IceCream size={16} /> },
]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('viandes')
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  let supabase: ReturnType<typeof createSupabaseClient> | null = null

  useEffect(() => {
    // Only run this code on the client side
    if (typeof window !== 'undefined') {
      supabase = createSupabaseClient()
      
      const fetchMenu = async () => {
        const { data, error } = await supabase!
          .from('menu_items')
          .select('*')
          .order('created_at', { ascending: true })
        
        if (!error && data) {
          setMenuItems(data.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            category: item.category as Category,
            isSignature: item.is_signature,
            isLocal: item.is_local,
            isSoldOut: item.is_sold_out,
            allergens: item.allergens || []
          })))
        }
      }

      fetchMenu()

      // Real-time subscription
      const channel = supabase!
        .channel('menu-items-changes')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'menu_items' },
          (payload) => {
            const newItem = payload.new
            setMenuItems((prev) => [...prev, {
              id: newItem.id,
              name: newItem.name,
              description: newItem.description,
              price: newItem.price,
              category: newItem.category as Category,
              isSignature: newItem.is_signature,
              isLocal: newItem.is_local,
              isSoldOut: newItem.is_sold_out,
              allergens: newItem.allergens || []
            }])
          }
        )
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'menu_items' },
          (payload) => {
            const updatedItem = payload.new
            setMenuItems((prev) => 
              prev.map((item) => 
                item.id === updatedItem.id ? {
                  id: updatedItem.id,
                  name: updatedItem.name,
                  description: updatedItem.description,
                  price: updatedItem.price,
                  category: updatedItem.category as Category,
                  isSignature: updatedItem.is_signature,
                  isLocal: updatedItem.is_local,
                  isSoldOut: updatedItem.is_sold_out,
                  allergens: updatedItem.allergens || []
                } : item
              )
            )
          }
        )
        .on(
          'postgres_changes',
          { event: 'DELETE', schema: 'public', table: 'menu_items' },
          (payload) => {
            setMenuItems((prev) => 
              prev.filter((item) => item.id !== payload.old.id)
            )
          }
        )
        .subscribe()

      return () => {
        supabase!.removeChannel(channel)
      }
    }
  }, [])

  const filteredMenu = menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-24 px-4 min-h-screen relative overflow-hidden bg-stone-50">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-600 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Fait Maison</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">Notre Carte</h2>
          <p className="text-stone-600 font-serif max-w-xl mx-auto">
            Découvrez notre sélection de viandes d'exception affinées dans nos caves de maturation, et nos pizzas artisanales.
          </p>
        </motion.div>

        {/* Category Filters (Pills) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16 sticky top-24 z-20 bg-stone-50/90 py-4 backdrop-blur-xl -mx-4 px-4 border-y border-stone-200"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 font-sans border border-transparent",
                activeCategory === cat.id 
                  ? "text-brand-900 border-brand-900/10 shadow-sm" 
                  : "text-stone-500 hover:text-stone-800 bg-white hover:bg-stone-100 border-stone-200 shadow-sm"
              )}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-brand-100 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div 
          layout
          className="grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -5 }}
                key={item.id}
                className={cn(
                  "bg-white border border-stone-200 p-8 rounded-2xl shadow-sm flex flex-col justify-between group border-organic",
                  item.isSoldOut && "opacity-60 grayscale-[30%]"
                )}
              >
                <div>
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <motion.h3 
                      className="text-xl font-serif text-brand-900 font-bold flex items-center gap-2 leading-tight"
                      whileHover={{ color: "#B33927" }}
                    >
                      {item.name}
                      {item.isSignature && (
                        <span className="bg-brand-50 text-brand-600 text-[10px] px-2 py-0.5 rounded font-sans uppercase tracking-widest border border-brand-200/50">
                          Signature
                        </span>
                      )}
                    </motion.h3>
                    <span className="text-brand-600 font-bold font-sans whitespace-nowrap">
                      {item.price.toFixed(2).replace('.', ',')} €
                    </span>
                  </div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-stone-500 text-sm font-serif leading-relaxed mb-6"
                  >
                    {item.description}
                  </motion.p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100 font-sans">
                  <div className="flex gap-2">
                    {item.allergens?.map(allergen => (
                      <span key={allergen} className="text-[10px] text-stone-500 bg-stone-100 px-2 py-1 rounded font-medium">
                        {allergen}
                      </span>
                    ))}
                  </div>
                  {item.isSoldOut ? (
                    <span className="text-rose-600 text-[10px] font-bold uppercase tracking-widest bg-rose-50 px-2 py-1 rounded border border-rose-100">
                      Victime de son succès
                    </span>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredMenu.length === 0 && (
          <div className="text-center py-20 text-stone-400 font-serif italic">
            La carte est en cours de renouvellement...
          </div>
        )}

      </div>
    </section>
  )
}