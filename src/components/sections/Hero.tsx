"use client"
import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden bg-brand-50">
      {/* Background Elements (Subtle warmly texture) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23431407\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-100 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px] -z-10" />

      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center z-10"
      >
        <span className="text-brand-600 font-sans font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 bg-brand-100/50 px-4 py-1.5 rounded-full border border-brand-500/20">
          Mirepoix (09)
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-900 mb-6 leading-tight">
          L'art de la <br className="hidden md:block"/> 
          <span className="text-brand-600 italic">viande maturée</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-stone-600 mb-12 max-w-2xl font-serif leading-relaxed px-4">
          Cuisine 100% fait-maison. Spécialité de viandes d'exception affinées sur place et pizzas authentiques au feu de bois.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans">
          <a 
            href="tel:+33500000000" 
            className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-brand-600/20 active:scale-[0.98]"
          >
            <PhoneCall size={20} />
            Réserver une table
          </a>
          <a 
            href="#menu" 
            className="flex items-center justify-center gap-2 bg-white text-stone-800 border border-stone-200 hover:bg-stone-50 px-8 py-4 rounded-xl font-medium transition-all active:scale-[0.98] shadow-sm"
          >
            Voir la carte
          </a>
        </div>
      </motion.div>
    </section>
  )
}