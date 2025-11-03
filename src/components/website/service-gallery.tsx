import { City, Service } from '@/types'

interface ServiceGalleryProps {
  service: Service
  city: City
}

export function ServiceGallery({ service, city }: ServiceGalleryProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {service.name} Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See examples of our {service.name.toLowerCase()} work in {city.name} and surrounding areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.gallery.map((image, index) => (
            <div key={index} className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Gallery Image {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
