import { City } from '@/types'

interface ServiceAreasProps {
  city: City
}

export function ServiceAreas({ city }: ServiceAreasProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly serve {city.name} and surrounding areas
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {city.serviceAreas.map((area, index) => (
            <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">{area}</h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don't see your area? <a href={`/${city.slug}/contact`} className="text-blue-600 hover:underline">Contact us</a> to check if we serve your location.
          </p>
        </div>
      </div>
    </section>
  )
}
