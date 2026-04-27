"use client"
import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[84vh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_22%_16%,rgba(179,65,43,0.16),transparent_34%),radial-gradient(circle_at_78%_78%,rgba(146,47,29,0.13),transparent_40%)]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-100/80 rounded-full blur-[90px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-50/70 rounded-full blur-[120px] -z-10" />

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
          className="text-brand-700 font-sans font-extrabold tracking-[0.24em] uppercase text-[11px] sm:text-sm mb-6 bg-brand-50/90 px-5 py-2 rounded-full border border-brand-100 shadow-soft"
        >
          Mirepoix (09)
        </motion.span>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 mb-8 leading-[0.98] tracking-tight"
        >
          L&apos;art de la <br className="hidden md:block"/> 
          <span className="text-brand-600 italic">viande maturée</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-[1.35rem] text-stone-700/90 mb-12 font-sans leading-relaxed px-4 max-w-3xl"
        >
          Cuisine 100% fait-maison. Spécialité de viandes d&apos;exception affinées sur place et pizzas authentiques au feu de bois.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans"
        >
          <a 
            href="tel:+33500000000" 
            className="btn-primary-premium active:scale-[0.98]"
          >
            <PhoneCall size={20} />
            Réserver une table
          </a>
          <a 
            href="#menu" 
            className="btn-secondary-premium active:scale-[0.98]"
          >
            Voir la carte
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}