import { City, Service } from '@/types'
import { ServiceBreadcrumb } from './service-breadcrumb'
import { ServiceSidebar } from './service-sidebar'
import { ContactCTA } from './contact-cta'
import Image from 'next/image'

interface ServiceHeroProps {
  service: Service
  city: City
}

export function ServiceHero({ service, city }: ServiceHeroProps) {
  return (
    <>
      <ServiceBreadcrumb title={service.name} city={city} serviceType={service.name} />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar Column - wider */}
            <div className="lg:col-span-4 space-y-8">
              {/* Service Navigation Sidebar */}
              <div className="mb-8">
                <ServiceSidebar city={city} currentService={service.slug} />
              </div>
              
              {/* CTA Section - Sticky */}
              <div className="">
                <ContactCTA city={city} />
              </div>
            </div>
            
            {/* Main Content Column - narrower */}
            <div className="lg:col-span-8">
              {/* Top Content Section */}
        
              
              {/* Bottom Content Section with Image and Text */}
              <div className="" data-aos="fade-up" data-aos-duration="1000">
                <div className="mb-12">
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <Image 
                      src="/hero/service-blinds.avif"
                      alt="Blinds in a living room"
                      fill
                      sizes="(max-width: 768px) 100vw, 75vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Here's why you should choose {service.name}
                </h2>
                
                <p className="text-md text-[#333] mb-6 leading-[30px]" data-aos="fade-up" data-aos-duration="1000">
                  Elevate your space with our sleek and versatile {service.name.toLowerCase()}, tailored to suit any room in your home. 
                  At Venus Blinds, we offer professional installation of custom {service.name.toLowerCase()} across Texas, 
                  in a wide range of materials, finishes, and colors. From warm wood tones to modern aluminum or fabric designs, 
                  our custom {service.name.toLowerCase()} deliver functionality and style, enhancing both the aesthetics and comfort of your living spaces.
                </p>
                <p className="text-md text-[#333] mb-6 leading-[30px]" data-aos="fade-up" data-aos-duration="1000">
                  Elevate your space with our sleek and versatile {service.name.toLowerCase()}, tailored to suit any room in your home. 
                  At Venus Blinds, we offer professional installation of custom {service.name.toLowerCase()} across Texas, 
                  in a wide range of materials, finishes, and colors. From warm wood tones to modern aluminum or fabric designs, 
                  our custom {service.name.toLowerCase()} deliver functionality and style, enhancing both the aesthetics and comfort of your living spaces.
                </p>
                <p className="text-md text-[#333] mb-6 leading-[30px]" data-aos="fade-up" data-aos-duration="1000">
                  Elevate your space with our sleek and versatile {service.name.toLowerCase()}, tailored to suit any room in your home. 
                  At Venus Blinds, we offer professional installation of custom {service.name.toLowerCase()} across Texas, 
                  in a wide range of materials, finishes, and colors. From warm wood tones to modern aluminum or fabric designs, 
                  our custom {service.name.toLowerCase()} deliver functionality and style, enhancing both the aesthetics and comfort of your living spaces.
                </p>
                <p className="text-md text-[#333] mb-6 leading-[30px]" data-aos="fade-up" data-aos-duration="1000">
                Our Design Consultants are ready to help you create the perfect custom blind solution for your home. Book your FREE in-home consultation to see our selection firsthand, explore materials, and design a solution tailored to your style and needs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
