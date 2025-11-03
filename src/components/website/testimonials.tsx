import { Card, CardContent } from '@/components/ui/card'
import { City } from '@/types'

interface TestimonialsProps {
  city: City
}

export function Testimonials({ city }: TestimonialsProps) {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: `${city.serviceAreas[0] || city.name}`,
      content: 'Excellent service and beautiful blinds. The installation was quick and professional.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      location: `${city.serviceAreas[1] || city.name}`,
      content: 'Venus Blinds transformed our living room. Highly recommend their custom solutions.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      location: `${city.serviceAreas[2] || city.name}`,
      content: 'Professional team, quality products, and great customer service. Very satisfied!',
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our {city.name} Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read reviews from our satisfied customers across {city.name} and surrounding areas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}