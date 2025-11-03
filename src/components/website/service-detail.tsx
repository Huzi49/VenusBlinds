import { City, Service } from '@/types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ServiceDetailProps {
  service: Service
  city: City
}

export function ServiceDetail({ service, city }: ServiceDetailProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{service.icon}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {service.name} in {city.name}
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-6">
              {service.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Link href={`/${city.slug}/contact`}>Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href={`tel:${city.phone.replace(/\D/g, '')}`}>Call {city.phone}</Link>
              </Button>
            </div>
          </div>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Service Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
