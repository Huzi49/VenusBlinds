import { ServiceHero } from '@/components/website/service-hero'
import { ServiceFeatures } from '@/components/website/service-features'
import { getCityData } from '@/lib/api/cities'
import { getServiceBySlug } from '@/lib/api/services'
import { notFound } from 'next/navigation'
import { AOSInit } from '@/components/website/aos-init'
import { AppointmentSection } from '@/components/website/appointment-section'

interface ServicePageProps {
  params: {
    city: string
    service: string
  }
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { city, service: serviceSlug } = params
  const cityData = await getCityData(city)
  const service = await getServiceBySlug(serviceSlug)
  
  if (!cityData || !service) {
    return { title: 'Service - Venus Blinds' }
  }

  return {
    title: `${service.name} in ${cityData.name} - Venus Blinds`,
    description: `Professional ${service.name.toLowerCase()} services in ${cityData.name}, ${cityData.state}. ${service.description}`,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { city, service: serviceSlug } = params
  const cityData = await getCityData(city)
  const service = await getServiceBySlug(serviceSlug)
  
  if (!cityData || !service) {
    notFound()
  }

  return (
    <div>
      <AOSInit />
      <ServiceHero service={service} city={cityData} />
      <ServiceFeatures service={service} city={cityData} />
      <AppointmentSection city={cityData} />

    </div>
  )
}