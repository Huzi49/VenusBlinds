import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { City, Service } from '@/types'
import Link from 'next/link'

interface SubServicesProps {
  service: Service
  city: City
}

export function SubServices({ service, city }: SubServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {service.name} Options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of {service.name.toLowerCase()} solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.subServices.map((subService) => (
            <Card key={subService.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
                <CardTitle>{subService.name}</CardTitle>
                {subService.price && (
                  <p className="text-lg font-semibold text-blue-600">{subService.price}</p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{subService.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {subService.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full">
                  <Link href={`/${city.slug}/contact`}>Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
