import { City } from '@/types'
import { Breadcrumb } from './breadcrumb'

interface AboutHeroProps {
  city: City
}

export function AboutHero({ city }: AboutHeroProps) {
  return <Breadcrumb title="About" city={city} />
}
