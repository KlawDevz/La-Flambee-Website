"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const storyImages = [
  { src: "/images/story-salle.jpg", alt: "Salle du restaurant La Flambée" },
  { src: "/images/story-terrasse.jpg", alt: "Terrasse à Mirepoix" },
  { src: "/images/story-entrecote.jpg", alt: "Entrecôte et frites maison" },
  { src: "/images/story-dessert.jpg", alt: "Profiteroles au chocolat" },
]

export default function Story() {
  return (
    <section className="py-24 px-4 border-t border-stone-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.78))] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-600 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Notre histoire</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 tracking-tight">L&apos;Esprit La Flambée</h2>
          <p className="text-stone-600 font-sans max-w-2xl mx-auto leading-relaxed">
            De l&apos;Arizona à la bastide de Mirepoix, découvrez le parcours de Davy qui a su allier sa passion pour la viande maturée et le feu de bois à la douceur de vivre ariégeoise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 font-sans"
          >
            <p className="text-stone-700 leading-relaxed">
              <span className="font-serif text-5xl float-left mr-4 text-brand-600 leading-none">A</span>
             près 15 ans à perfectionner l&apos;art de la viande maturée dans les ranchs du désert américain, Davy a ressenti le besoin de revenir aux racines. C&apos;est en 2022 qu&apos;il a posé ses valises à Mirepoix, attiré par l&apos;authenticité de la bastide et la richesse des produits locaux.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Avec Julie, son associée et amie d&apos;enfance, ils ont imaginé un lieu unique où la tradition du feu de bois rencontre la précision de la maturation. Chaque morceau de viande repose pendant des semaines dans leur cave voûtée, avant d&apos;être cuit à la perfection sur un feu de chêne local.
            </p>
            <p className="text-stone-700 leading-relaxed">
              La Flambée, c&apos;est aussi une promesse : celle d&apos;un repas fait main, avec des circuits courts, dans une ambiance chaleureuse et conviviale. Une halte gourmande entre Toulouse et Foix, au rythme du bois qui crépite.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {storyImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-organic shadow-soft">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  width={300} 
                  height={200} 
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}