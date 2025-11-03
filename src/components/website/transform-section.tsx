
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { City } from '@/types'
import { AOSInit } from './aos-init'

interface TransformSectionProps {
  city: City
}

export function TransformSection({ city }: TransformSectionProps) {
  return (
    <section className="py-16 bg-white">
      <AOSInit />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="relative" data-aos="fade-right" data-aos-duration="1200">
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/hero/worker-installing-window-blinds-with-focus-privacy-light-control-scaled.webp"
                alt="Professional blinds installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-5" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
            <div className="mb-2" data-aos="fade-down" data-aos-delay="300">
              <h5 className="text-[#00a9e0] font-medium">WHY CHOOSE US</h5>
              <div className="w-32 h-1 bg-[#00a9e0] mt-1"></div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-aos="fade-up" data-aos-duration="1500">
                Transform Your Space with Our Premium Blinds
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="400">
                At Venus Blinds, we are dedicated to providing high-quality, custom blinds that enhance the beauty and functionality of your home or office. With a vast range of styles, colors, and materials, our products are designed to fit any space and budget.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="600">
                Our team offers expert advice, professional installation, and exceptional customer service to ensure your complete satisfaction. Whether you're looking for light control, privacy, or simply a stylish upgrade, we deliver reliable, durable, and visually appealing solutions that cater to your unique needs. Choose us for a seamless, stress-free experience and transform your space with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}