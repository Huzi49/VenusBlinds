import { City } from '@/types'
import Link from 'next/link'

interface ContactCTAProps {
  city: City
}

export function ContactCTA({ city }: ContactCTAProps) {
  return (
    <section className="bg-gray-100 w-full relative pt-6 px-6 pb-6">
      {/* Blue top border line - positioned at the very top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#00a9e0]"></div>
      <div className="flex flex-col items-start">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Get a Free Quote
        </h2>
        
        {/* Short blue underline */}
        <div className="w-16 h-1 bg-[#00a9e0] mb-6"></div>
        
        <Link 
          href={`/${city.slug}/contact`}
          className="bg-[#00a9e0] text-white font-medium py-3 px-8 rounded-full hover:bg-[#0095c8] transition-colors duration-300"
        >
          Book Now
        </Link>
      </div>
    </section>
  )
}