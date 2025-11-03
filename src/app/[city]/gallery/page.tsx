import { GalleryHero } from '@/components/website/gallery-hero'
import { GalleryGrid } from '@/components/website/gallery-grid'
import { GalleryFilters } from '@/components/website/gallery-filters'
import { getCityData } from '@/lib/api/cities'
import { notFound } from 'next/navigation'

interface GalleryPageProps {
  params: Promise<{
    city: string
  }>
}

export async function generateMetadata({ params }: GalleryPageProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    return { title: 'Gallery - Venus Blinds' }
  }

  return {
    title: `Project Gallery ${cityData.name} - Venus Blinds`,
    description: `Browse our portfolio of window treatment installations in ${cityData.name}, ${cityData.state}. See completed projects and quality craftsmanship.`,
  }
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <GalleryHero city={cityData} />
      <div className="container mx-auto px-4">
        <GalleryFilters />
        <GalleryGrid />
      </div>
    </div>
  )
}
