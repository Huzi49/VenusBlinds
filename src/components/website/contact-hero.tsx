import { City } from '@/types'
import { Breadcrumb } from './breadcrumb'

interface ContactHeroProps {
  city: City
}

export function ContactHero({ city }: ContactHeroProps) {
  return <Breadcrumb title="Contact" city={city} />
}
