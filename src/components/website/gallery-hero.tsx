import { City } from '@/types'
import { Breadcrumb } from './breadcrumb'

interface GalleryHeroProps {
  city: City
}

export function GalleryHero({ city }: GalleryHeroProps) {
  return <Breadcrumb title="Gallery" city={city} />
}
