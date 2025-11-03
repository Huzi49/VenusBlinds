import { City } from '@/types'
import Image from 'next/image'

interface AboutStoryProps {
  city: City
}

export function AboutStory({ city }: AboutStoryProps) {
  const features = [
    "Customize Your Design",
    "Around Natural Colors",
    "No Compromise Quality",
    "Best Choice Blinds"
  ]

  return (
    <section className="py-16" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-2" data-aos="fade-right" data-aos-delay="100">
              <span className="text-[#00a9e0] font-medium">About Venus Blinds</span>
              <div className="w-16 h-1 bg-[#00a9e0] mt-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-aos="fade-right" data-aos-delay="200">
              We Are Expert to Make Your Space Looking Fresh & Modern
            </h2>
            
            <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="300">
              We Make Your Space Looking Fresh & Modern. We have home decor and design
              service that helps transform homes and offices into stylish, modern spaces. Our
              team of professionals specializes in interior design, color consultation, and furniture
              selection to help create a space that reflects your personal style and tastes.
            </p>
            
            <div className="h-1 w-full bg-black my-8" data-aos="fade-right" data-aos-delay="400"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col" data-aos="fade-up" data-aos-delay={500 + (index * 100)}>
                  <div className="flex items-center mb-2">
                    <div className="text-[#00a9e0] mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 11.5l3 3 5-5.5" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
               
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px] w-[500px] w-full" data-aos="fade-left" data-aos-delay="300">
            <Image
            width={500}
            height={540}
              src="/hero/about-1.webp"
              alt="Modern living room with blinds"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
