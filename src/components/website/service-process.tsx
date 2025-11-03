import { City } from '@/types'

interface ServiceProcessProps {
  city: City
}

export function ServiceProcess({ city }: ServiceProcessProps) {
  const steps = [
    {
      number: '1',
      title: 'Free Consultation',
      description: `Contact us for a free in-home consultation in ${city.name}`,
      icon: '📞'
    },
    {
      number: '2',
      title: 'Design & Quote',
      description: 'We measure your windows and provide a detailed quote',
      icon: '📐'
    },
    {
      number: '3',
      title: 'Manufacturing',
      description: 'Your custom window treatments are manufactured to perfection',
      icon: '🏭'
    },
    {
      number: '4',
      title: 'Professional Installation',
      description: 'Our certified team installs your window treatments',
      icon: '🔧'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to transform your {city.name} space with beautiful window treatments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
