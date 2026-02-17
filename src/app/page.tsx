import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { Highlights } from '@/components/home/Highlights'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Footer />
    </main>
  )
}
