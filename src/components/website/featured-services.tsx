import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { City, Service } from '@/types'
import Link from 'next/link'
import { getServices } from '@/lib/api/services'

interface FeaturedServicesProps {
  city: City
}

export async function FeaturedServices({ city }: FeaturedServicesProps) {
  const services = await getServices()
  const featuredServices = services.slice(0, 3) // Show first 3 services

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services in {city.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional window treatment services for residential and commercial properties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{service.subServices.length} sub-services</span>
                  <Button variant="outline">
                    <Link href={`/${city.slug}/services/${service.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button size="lg">
            <Link href={`/${city.slug}/services`}>View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
