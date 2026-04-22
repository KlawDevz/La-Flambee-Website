"use client"
import { MapPin, Map, PhoneCall, Clock, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-24 px-4 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[60vw] h-[60vw] bg-brand-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Accès & Contact</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Nous sommes situés au coeur de Mirepoix. N'hésitez pas à nous appeler pour réserver votre table.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Info */}
          <div className="glass-panel p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-brand-500" />
                La Flambée
              </h3>
              
              <div className="space-y-6 text-zinc-300">
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <Map size={20} className="text-brand-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Adresse</p>
                    <p>12 Rue des Portes<br/>09500 Mirepoix, France</p>
                    <a 
                      href="https://maps.app.goo.gl/..." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-500 text-sm hover:underline mt-2 inline-block font-semibold"
                    >
                      Ouvrir dans Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <Clock size={20} className="text-brand-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Horaires</p>
                    <p>Midi : 12h00 - 14h00<br/>Soir : 19h00 - 22h00</p>
                    <p className="text-xs text-brand-500 mt-2 bg-brand-500/10 px-2 py-1 rounded inline-block border border-brand-500/20">Fermé le Lundi et Mardi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <a 
                href="tel:+33500000000" 
                className="w-full flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 px-6 py-4 rounded-full font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <PhoneCall size={20} />
                05 00 00 00 00
              </a>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex flex-col justify-center space-y-8 p-8">
            <h3 className="text-3xl font-extrabold tracking-tighter mb-4 text-glow">L'expérience Flambée.</h3>
            
            <div className="space-y-6">
              {[
                "Cave de maturation visible en salle.",
                "Cuisson au feu de bois traditionnelle.",
                "Ambiance chaleureuse avec cheminée.",
                "Produits locaux et circuits courts."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-brand-500/20 text-brand-500 p-1.5 rounded-full border border-brand-500/30">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-lg font-medium text-zinc-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}