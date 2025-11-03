import { City } from '@/types'
import Image from 'next/image'

interface ValuesProps {
  city: City
}

export function Values({ city }: ValuesProps) {
  const steps = [
    {
      title: 'Book Your Appointment',
      description: 'Provide any necessary information, such as location and service details.',
      iconSrc: '/hero/blinds-2.webp'
    },
    {
      title: 'Review Your Appointment',
      description: 'After booking, you will receive a confirmation email with your appointment details.',
      iconSrc: '/hero/scissors-1.webp'
    },
    {
      title: 'Come to Your Destination',
      description: 'On the day of your appointment, ensure you arrive at your specified location on time.',
      iconSrc: '/hero/measuring-tape-1.webp'
    }
  ]

  return (
    <section className="relative py-10 text-white">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `url('/hero/pattern-2.webp')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          backgroundColor:"#1f1f1f"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-row justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-row items-center md:w-1/3 px-4">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <div className="w-10 h-10 relative">
                  <Image
                    src={step.iconSrc}
                    alt={step.title}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
