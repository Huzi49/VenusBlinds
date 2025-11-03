import { City, Service } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { AOSInit } from './aos-init'

interface ServiceGridProps {
  services: Service[]
  city: City
}

export function ServiceGrid({ services, city }: ServiceGridProps) {

  return (
    <section className="py-16 relative bg-white">
      {/* No background image or overlay */}
      <AOSInit />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="inline-block mb-2" data-aos="fade-down" data-aos-delay="200">
            <h5 className="text-[#00a9e0] font-medium">Our Products And Services</h5>
            <div className="w-32 h-1 bg-[#00a9e0] mt-1 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1200">
            Expert In Designing
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            Our Services offers both residential and commercial services. We provide a wide range of Shades and blinds for homes, offices, and other commercial spaces.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="500">
          {/* Fixed set of 4 cards with specific headings */}
          {[
            { title: "Shades", slug: "shades" },
            { title: "Blinds", slug: "blinds" },
            { title: "Shutters", slug: "shutters" },
            { title: "Draperies", slug: "draperies" }
          ].map((item, index) => (
            <Link 
              key={item.slug} 
              href={`/${city.slug}/services/${item.slug}`}
              className="group"
              data-aos="fade-up" 
              data-aos-delay={600 + (index * 150)} 
              data-aos-duration="1000"
            >
              <div className="bg-[#1A1A1A] rounded-[16px] overflow-hidden aspect-square relative flex flex-col items-center justify-center text-center p-6 transition-transform duration-300 group-hover:scale-105 shadow-lg">
                {/* Service Icon */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 relative overflow-hidden">
                  <Image 
                    src="/hero/projectvenus1.webp"
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                
                {/* Service Name */}
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0AA5DF] bg-opacity-85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="mb-4">High-quality {item.title.toLowerCase()} for your home and office spaces.</p>
                    <div className="inline-block px-6 py-2 border-2 border-white rounded-full font-medium hover:bg-white hover:text-[#0AA5DF] transition-colors duration-300">
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
