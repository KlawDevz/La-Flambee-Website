"use client"
import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-100 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-50/80 rounded-full blur-[120px] -z-10" />

      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center z-10 w-full max-w-3xl mx-auto"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-brand-600 font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100 shadow-sm"
        >
          Mirepoix (09)
        </motion.span>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 mb-8 leading-tight"
        >
          L'art de la <br className="hidden md:block"/> 
          <span className="text-brand-600 italic">viande maturée</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-stone-600 mb-12 font-sans leading-relaxed px-4"
        >
          Cuisine 100% fait-maison. Spécialité de viandes d'exception affinées sur place et pizzas authentiques au feu de bois.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans"
        >
          <a 
            href="tel:+33500000000" 
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-8 py-5 rounded-organic font-medium transition-all shadow-soft-md active:scale-[0.98]"
          >
            <PhoneCall size={20} />
            Réserver une table
          </a>
          <a 
            href="#menu" 
            className="flex items-center justify-center gap-2 bg-white text-stone-800 border border-stone-200 hover:bg-stone-50 px-8 py-5 rounded-organic font-medium transition-all active:scale-[0.98] shadow-soft"
          >
            Voir la carte
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}