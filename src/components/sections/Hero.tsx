"use client"
import { motion } from 'framer-motion'
import { PhoneCall, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/30 via-zinc-950 to-zinc-950 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-brand-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />

      <motion.div 
        initial={{ y: 30, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <span className="text-brand-500 font-semibold tracking-widest uppercase text-sm mb-4">Mirepoix (09)</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-glow leading-tight">
          L'art de la <br className="hidden md:block"/> viande maturée.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl font-light leading-relaxed">
          Cuisine 100% fait-maison. Spécialité de viandes d'exception affinées sur place et pizzas authentiques au feu de bois.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="tel:+33500000000" 
            className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)] active:scale-95"
          >
            <PhoneCall size={20} />
            Réserver une table
          </a>
          <a 
            href="#menu" 
            className="flex items-center justify-center gap-2 glass-panel px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all active:scale-95"
          >
            Voir la carte
          </a>
        </div>
      </motion.div>
    </section>
  )
}