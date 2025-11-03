import { City } from '@/types'

// Mock data - replace with actual database calls
const mockCities: City[] = [
  {
    id: '1',
    name: 'Houston',
    slug: 'houston',
    state: 'TX',
    phone: '(713) 555-0123',
    email: 'houston@venusblinds.com',
    address: '123 Main St, Houston, TX 77001',
    coordinates: { lat: 29.7604, lng: -95.3698 },
    serviceAreas: ['Houston', 'Katy', 'Sugar Land', 'The Woodlands', 'Pearland'],
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Dallas',
    slug: 'dallas',
    state: 'TX',
    phone: '(214) 555-0123',
    email: 'dallas@venusblinds.com',
    address: '456 Elm St, Dallas, TX 75201',
    coordinates: { lat: 32.7767, lng: -96.7970 },
    serviceAreas: ['Dallas', 'Plano', 'Irving', 'Garland', 'Mesquite'],
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Austin',
    slug: 'austin',
    state: 'TX',
    phone: '(512) 555-0123',
    email: 'austin@venusblinds.com',
    address: '789 Congress Ave, Austin, TX 78701',
    coordinates: { lat: 30.2672, lng: -97.7431 },
    serviceAreas: ['Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Georgetown'],
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
]

export async function getCities(): Promise<City[]> {
  // TODO: Replace with actual database query
  return mockCities.filter(city => city.isActive)
}

export async function getCityData(slug: string): Promise<City | null> {
  // TODO: Replace with actual database query
  const city = mockCities.find(city => city.slug === slug && city.isActive)
  return city || null
}

export async function getCityById(id: string): Promise<City | null> {
  // TODO: Replace with actual database query
  const city = mockCities.find(city => city.id === id && city.isActive)
  return city || null
}
