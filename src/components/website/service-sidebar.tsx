'use client'

import Link from 'next/link'
import { City } from '@/types'
import { usePathname } from 'next/navigation'

interface ServiceSidebarProps {
  city: City
  currentService?: string
}

export function ServiceSidebar({ city, currentService }: ServiceSidebarProps) {
  const pathname = usePathname()
  
  const services = [
    { name: 'Blinds', slug: 'blinds' },
    { name: 'Shades', slug: 'shades' },
    { name: 'Shutters', slug: 'shutters' },
    { name: 'Drapery', slug: 'draperies' }
  ]
  
  const isActive = (slug: string) => {
    return currentService === slug || pathname.includes(`/services/${slug}`)
  }

  return (
    <div className="bg-gray-100 rounded-sm w-full relative pt-6 px-6 pb-6">
      {/* Blue top border - positioned at the very top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#00a9e0]"></div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Expert In Designing
      </h2>
      
      {/* Short blue underline */}
      <div className="w-16 h-1 bg-[#00a9e0] mb-6"></div>
      
      <div className="space-y-5">
        {services.map((service) => (
          <Link 
            key={service.slug}
            href={`/${city.slug}/services/${service.slug}`}
            className={`block text-lg transition-colors duration-200 ${
              isActive(service.slug) 
                ? 'text-[#00a9e0] font-medium' 
                : 'text-gray-700 hover:text-[#00a9e0]'
            }`}
          >
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
