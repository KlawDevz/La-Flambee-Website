"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { mockMenu, type Category } from '@/data/mock-db'
import { cn } from '@/lib/utils'
import { Flame, Pizza, Leaf, IceCream } from 'lucide-react'

const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: 'viandes', label: 'Viandes Maturées', icon: <Flame size={16} /> },
  { id: 'pizzas', label: 'Pizzas au Feu de Bois', icon: <Pizza size={16} /> },
  { id: 'salades', label: 'Salades', icon: <Leaf size={16} /> },
  { id: 'desserts', label: 'Desserts', icon: <IceCream size={16} /> },
]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('viandes')

  const filteredMenu = mockMenu.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-24 px-4 min-h-screen relative overflow-hidden bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Notre Carte</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Découvrez notre sélection de viandes d'exception affinées dans nos caves de maturation, et nos pizzas artisanales.
          </p>
        </div>

        {/* Category Filters (Pills) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-24 z-20 bg-zinc-950/80 py-4 backdrop-blur-xl -mx-4 px-4 border-y border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300",
                activeCategory === cat.id 
                  ? "text-white" 
                  : "text-zinc-400 hover:text-zinc-200 bg-white/5 hover:bg-white/10"
              )}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-brand-600 rounded-full -z-10 shadow-[0_0_20px_rgba(234,88,12,0.4)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

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
                key={item.id}
                className={cn(
                  "glass-panel p-6 flex flex-col justify-between group",
                  item.isSoldOut && "opacity-60 grayscale-[50%]"
                )}
              >
                <div>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {item.name}
                      {item.isSignature && (
                        <span className="bg-brand-500/20 text-brand-500 text-[10px] px-2 py-1 rounded-full border border-brand-500/30 uppercase tracking-widest">
                          Signature
                        </span>
                      )}
                    </h3>
                    <span className="text-brand-500 font-bold text-xl whitespace-nowrap">
                      {item.price.toFixed(2).replace('.', ',')} €
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div className="flex gap-1">
                    {item.allergens?.map(allergen => (
                      <span key={allergen} className="text-[10px] text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                        {allergen}
                      </span>
                    ))}
                  </div>
                  {item.isSoldOut ? (
                    <span className="text-red-400 text-xs font-bold uppercase tracking-widest bg-red-400/10 px-3 py-1.5 rounded-full border border-red-400/20">
                      Rupture
                    </span>
                  ) : (
                    <span className="text-green-400 text-xs font-bold uppercase tracking-widest bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      Disponible
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredMenu.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            Aucun plat disponible dans cette catégorie pour le moment.
          </div>
        )}

      </div>
    </section>
  )
}