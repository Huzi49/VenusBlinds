import Link from 'next/link'
import { City } from '@/types'

interface ServiceBreadcrumbProps {
  title: string
  city: City
  serviceType?: string
}

export function ServiceBreadcrumb({ title, city, serviceType }: ServiceBreadcrumbProps) {
  return (
    <section className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/hero/page-title.webp')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0AA5DFA6] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="text-left text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-start space-x-2 text-lg">
            <Link href={`/${city.slug}`} className="hover:underline">
              Home
            </Link>
            <span className="mx-2">→</span>
            <Link href={`/${city.slug}/services`} className="hover:underline">
              Services
            </Link>
            {serviceType && (
              <>
                <span className="mx-2">→</span>
                <span>{serviceType}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
