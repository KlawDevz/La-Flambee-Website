import { PhoneCall } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import Story from '@/components/sections/Story'
import MenuSection from '@/components/sections/Menu'
import ContactSection from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Story />
      <MenuSection />
      <ContactSection />
      
      {/* Sticky Call Button for Mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <a 
          href="tel:+33500000000" 
          className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-4 rounded-full font-medium transition-all shadow-lg shadow-brand-500/30 active:scale-[0.98]"
        >
          <PhoneCall size={20} />
          Réserver
        </a>
      </div>
    </main>
  )
}