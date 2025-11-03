import { City } from '@/types'
import Image from 'next/image'

interface TeamProps {
  city: City
}

export function Team({ city }: TeamProps) {
  const services = [
    {
      name: 'Blinds',
      image: '/hero/img1.webp',
      link: 'View Full Range'
    },
    {
      name: 'Shades',
      image: '/hero/img2.webp',
      link: 'View Full Range'
    },
    {
      name: 'Shutters',
      image: '/hero/img3.webp',
      link: 'View Full Range'
    },
    {
      name: 'Draperies',
      image: '/hero/img4.webp',
      link: 'View Full Range'
    }
  ]

  return (
    <section className="py-16" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="mb-2" data-aos="zoom-in" data-aos-delay="200">
            <span className="text-[#00a9e0] font-medium text-sm sm:text-base">Our Products And Services</span>
            <div className="w-24 sm:w-32 h-1 bg-[#00a9e0] mt-1 mx-auto"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 sm:mt-6 mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay="300">
            Expert In Designing
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-2" data-aos="fade-up" data-aos-delay="400">
            Our Services offers both residential and commercial services. We provide a wide 
            range of Shades and blinds for homes, offices, and other commercial spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-3 sm:gap-x-4 gap-y-8 sm:gap-y-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center px-2" 
              data-aos="fade-up" 
              data-aos-delay={500 + (index * 150)}
              data-aos-duration="800"
            >
              <div className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden mb-4 sm:mb-6 group">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0AA5DF85] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-base sm:text-lg">{service.name}</span>
                </div>
              </div>
              <h3 
                className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3" 
                data-aos="fade-up" 
                data-aos-delay={600 + (index * 150)}
              >
                {service.name}
              </h3>
              <a 
                href="#" 
                className="text-[#00a9e0] text-xs sm:text-sm font-medium hover:underline"
                data-aos="fade-up" 
                data-aos-delay={700 + (index * 150)}
              >
                {service.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
