import { ServicesHero } from '@/components/website/services-hero'
import { ServiceGrid } from '@/components/website/service-grid'
import { getCityData } from '@/lib/api/cities'
import { getServices } from '@/lib/api/services'
import { notFound } from 'next/navigation'
import { Values } from '@/components/website/values'

interface ServicesPageProps {
  params: Promise<{
    city: string
  }>
}

export async function generateMetadata({ params }: ServicesPageProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    return { title: 'Services - Venus Blinds' }
  }

  return {
    title: `Window Treatment Services in ${cityData.name} - Venus Blinds`,
    description: `Professional window treatment services in ${cityData.name}, ${cityData.state}. Blinds, shutters, shades installation and repair services.`,
  }
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  const services = await getServices()
  
  if (!cityData) {
    notFound()
  }

  return (
    <div className="space-y-16">
      <ServicesHero city={cityData} />
      <ServiceGrid services={services} city={cityData} />
      <Values city={cityData} />
    </div>
  )
}
