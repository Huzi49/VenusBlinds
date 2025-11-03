import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { City } from '@/types'
import { Calendar, Eye } from 'lucide-react'
import Image from 'next/image'
import HeroCarousel from './hero-carousel'

interface HeroProps {
  city: City
}

export function Hero({ city }: HeroProps) {
  const backgroundImages = [
    '/hero/imgi_21_RS_AUTO_FABCORN_RB307_BED_01_16_9-2048x1152.webp',
    '/hero/imgi_42_pexels-pixabay-53603.jpg',
    '/hero/imgi_43_service-maintenance-worker-repairing-scaled.jpg',
    '/hero/imgi_52_a-japanese-male-worker-taking-measurements-of-a-ro-2023-11-27-04-49-21-utc-scaled.jpg'
  ]

  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <section className="relative h-[550px] overflow-hidden text-white">
        {/* Background Images - Using client component for carousel */}
        <div className="absolute inset-0 overflow-hidden">
          <HeroCarousel images={backgroundImages} />
      </div>

        {/* Blue overlay is now in the carousel component */}

      {/* Content */}
      <div className="animate__animated animate__fadeIn relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
              <h5 className="animate__animated animate__fadeInDown animate__delay-1s text-base md:text-lg font-medium mb-2">Welcome to Venus Blinds</h5>
              
              <h1 className="animate__animated animate__fadeInLeft animate__delay-1s text-4xl md:text-5xl font-bold mb-4">
                Transform Your Space with Premium Window Blinds
            </h1>

              <p className="animate__animated animate__fadeInRight animate__delay-2s text-lg mb-8 mx-auto max-w-3xl">
                Discover latest trendy styles for blinds, Shades & shutters.
            </p>

            <div className="animate__animated animate__fadeInUp animate__delay-2s flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                  className="bg-[#333333] hover:bg-[#222222] text-white px-[20px] py-[15px] rounded-[50px] border border-solid border-transparent transition-all duration-200 text-base"
                >
                  <Link href={`/${city.slug}/contact`} className="flex items-center gap-2">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                    Contact Us
                  </Link>
              </Button>
              <Button
                  className="bg-[#00a9e0] hover:bg-transparent hover:text-[#00a9e0] hover:border-[#00a9e0] text-white px-[20px] py-[15px] rounded-[50px] border border-solid border-[#00a9e0] transition-all duration-200 text-base"
                >
                  <Link href={`/${city.slug}/services`} className="flex items-center gap-2">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                    View Catalog
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Content - Positioned to overlap with hero section */}
      <div className="animate__animated animate__fadeInUp animate__delay-3s relative z-30 -mt-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-[#332424D6] py-10 px-6 rounded-t-lg">
            <div className="text-center text-white">
              <h2 className="animate__animated animate__fadeIn animate__delay-3s text-2xl md:text-3xl font-bold mb-4">Simple or Fancy – Get the Right Blinds for Your Home!</h2>
              <p className="animate__animated animate__fadeIn animate__delay-4s text-base md:text-lg max-w-4xl mx-auto">
                Discover the perfect blinds for your home with a free consultation – whether you prefer simple or fancy styles, we'll help you find the right fit!
              </p>
              <div className="animate__animated animate__fadeIn animate__delay-4s mt-6">
                <Button
                  className="bg-[#00a9e0] hover:bg-transparent hover:text-[#00a9e0] hover:border-[#00a9e0] text-white px-[20px] py-[15px] rounded-[50px] border border-solid border-[#00a9e0] transition-all duration-200 text-base"
                >
                  <Link href={`/${city.slug}/contact`} className="flex items-center gap-2">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                    </svg>
                    Get A Quote
                  </Link>
              </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}