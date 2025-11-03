import { City } from '@/types'
import { Breadcrumb } from './breadcrumb'

interface ServicesHeroProps {
  city: City
}

export function ServicesHero({ city }: ServicesHeroProps) {
  return <Breadcrumb title="Services" city={city} />
}
