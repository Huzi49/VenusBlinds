export interface City {
  id: string
  name: string
  slug: string
  state: string
  phone: string
  email: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  serviceAreas: string[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Service {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  image: string
  icon: string
  category: string
  subServices: SubService[]
  gallery: string[]
  faqs: FAQ[]
  isActive: boolean
  order: number
  createdAt: string
  updatedAt: string
}

export interface SubService {
  id: string
  name: string
  slug: string
  description: string
  image: string
  price?: string
  features: string[]
  isActive: boolean
  order: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  order: number
}

export interface Inquiry {
  id: string
  cityId: string
  serviceId?: string
  name: string
  email: string
  phone: string
  address: string
  message: string
  status: 'new' | 'contacted' | 'quoted' | 'scheduled' | 'completed' | 'cancelled'
  source: 'website' | 'phone' | 'referral' | 'other'
  createdAt: string
  updatedAt: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  content: string
  rating: number
  serviceId?: string
  cityId?: string
  image?: string
  isActive: boolean
  createdAt: string
}
