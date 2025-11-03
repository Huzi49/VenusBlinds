'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { City } from '@/types'

interface HomepageHeroProps {
  city: City
}

export function HomepageHero({ city }: HomepageHeroProps) {
  return (
    <section className="relative h-screen overflow-hidden text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero/imgi_21_RS_AUTO_FABCORN_RB307_BED_01_16_9-2048x1152.webp')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="xyz-in xyz-fade xyz-left text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
            Transform Your Space with Premium Window Blinds
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Discover expert blinds for every home and office. Professional installation and lifetime warranty included in {city.name}, {city.state}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href={`/${city.slug}/contact`}>Get Free Quote</Link>
            </Button>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-16">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Simple or Fancy - Get the Right Blinds for Your Home!
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Discover the perfect blinds for your home with a free consultation. Whether you prefer sleek and modern or rich and traditional, we have the right style for you.
              </p>
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold"
              >
                <Link href={`/${city.slug}/contact`}>Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
