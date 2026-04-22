import Hero from '@/components/sections/Hero'
import MenuSection from '@/components/sections/Menu'
import ContactSection from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MenuSection />
      <ContactSection />
    </main>
  )
}