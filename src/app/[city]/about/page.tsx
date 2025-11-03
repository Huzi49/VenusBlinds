import { AboutHero } from '@/components/website/about-hero'
import { AboutStory } from '@/components/website/about-story'
import { Team } from '@/components/website/team'
import { Values } from '@/components/website/values'
import { getCityData } from '@/lib/api/cities'
import { notFound } from 'next/navigation'

interface AboutPageProps {
  params: Promise<{
    city: string
  }>
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    return { title: 'About - Venus Blinds' }
  }

  return {
    title: `About Venus Blinds ${cityData.name} - Your Local Window Treatment Experts`,
    description: `Learn about Venus Blinds in ${cityData.name}, ${cityData.state}. Your trusted local partner for premium window treatments and professional installation.`,
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    notFound()
  }

  return (
    <div className="space-y-16">
      <AboutHero city={cityData} />
      <AboutStory city={cityData} />
      <Values city={cityData} />
      <Team city={cityData} />
    </div>
  )
}
