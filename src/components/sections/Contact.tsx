"use client"
import { MapPin, Map, PhoneCall, Clock, CheckCircle2 } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-24 px-4 bg-[linear-gradient(160deg,rgba(239,233,222,0.72),rgba(255,255,255,0.86))] border-t border-stone-200/70 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-[60vw] h-[60vw] bg-brand-100 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Venez nous voir</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">Accès & Contact</h2>
          <p className="text-stone-600 font-serif max-w-xl mx-auto">
            Nous sommes situés au coeur de la bastide de Mirepoix. N&apos;hésitez pas à nous appeler pour réserver votre table près de la cheminée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Info */}
          <div className="bg-white border border-stone-200 p-8 flex flex-col justify-between rounded-2xl shadow-sm">
            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-900 mb-8 flex items-center gap-3">
                <MapPin className="text-brand-600" />
                La Flambée
              </h3>
              
              <div className="space-y-8 font-sans">
                <div className="flex items-start gap-4">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
                    <Map size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900 mb-1">Adresse</p>
                    <p className="text-stone-600">12 Rue des Portes<br/>09500 Mirepoix</p>
                    <a 
                      href="https://maps.app.goo.gl/..." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-600 text-sm hover:text-brand-500 hover:underline mt-2 inline-block font-bold"
                    >
                      Ouvrir dans Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900 mb-1">Horaires</p>
                    <p className="text-stone-600">Midi : 12h00 - 14h00<br/>Soir : 19h00 - 22h00</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-brand-600 mt-3 bg-brand-50 px-2 py-1 rounded inline-block border border-brand-100">Fermé le Lundi et Mardi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-100">
              <a 
                href="tel:+33500000000" 
                className="w-full btn-primary-premium active:scale-[0.98]"
              >
                <PhoneCall size={20} />
                05 00 00 00 00
              </a>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex flex-col justify-center space-y-8 p-8">
            <h3 className="text-3xl font-serif text-brand-900 leading-tight mb-2">L&apos;esprit de notre table.</h3>
            
            <div className="space-y-6 font-sans">
              {[
                "Cave de maturation visible en salle.",
                "Cuisson au feu de bois traditionnelle.",
                "Ambiance chaleureuse avec cheminée.",
                "Produits locaux et circuits courts."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="bg-brand-50 text-brand-600 p-2 rounded-full border border-brand-100 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-stone-600 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}