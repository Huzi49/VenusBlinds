import { Navbar } from '@/components/website/navbar'
import { Footer } from '@/components/website/footer'
import { PromoBanner } from '@/components/website/promo-banner'
import { notFound } from 'next/navigation'
import { getCityData } from '@/lib/api/cities'

interface CityLayoutProps {
  children: React.ReactNode
  params: Promise<{
    city: string
  }>
}

export async function generateStaticParams() {
  // TODO: Fetch cities from database
  const cities = ['houston', 'dallas', 'austin', 'san-antonio', 'fort-worth']
  
  return cities.map((city) => ({
    city: city,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    return {
      title: 'City Not Found - Venus Blinds',
    }
  }

  return {
    title: `Venus Blinds ${cityData.name} - Premium Window Treatments & Blinds`,
    description: `Professional window treatments and blinds installation in ${cityData.name}, ${cityData.state}. Free consultation and lifetime warranty.`,
  }
}

export default async function CityLayout({ children, params }: CityLayoutProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Navbar city={cityData} />
      <main className="flex-1">
        {children}
      </main>
      <Footer city={cityData} />
    </div>
  )
}
