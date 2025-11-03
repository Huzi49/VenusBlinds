import { HomepageHero } from '@/components/website/homepage-hero'
import { FreshModernSection } from '@/components/website/fresh-modern-section'
import { VideoSection } from '@/components/website/video-section'
import { StatsSection } from '@/components/website/stats-section'
import { TransformSection } from '@/components/website/transform-section'
import { ClientReviews } from '@/components/website/client-reviews'
import { ExpertBlinds } from '@/components/website/expert-blinds'
import { AppointmentSection } from '@/components/website/appointment-section'
import { OfferingSection } from '@/components/website/offering-section'
import { getCityData } from '@/lib/api/cities'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/website/hero'

interface CityHomePageProps {
  params: Promise<{
    city: string
  }>
}

export default async function CityHomePage({ params }: CityHomePageProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    notFound()
  }

  return (
    <div className="">
      <Hero city={cityData} />
      <FreshModernSection />
      <VideoSection />
      <StatsSection />
      <TransformSection city={cityData} />
      <ClientReviews />
      <ExpertBlinds city={cityData} />
      <AppointmentSection city={cityData} />
      <OfferingSection city={cityData} />
    </div>
  )
}
