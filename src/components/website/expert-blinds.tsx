
import Image from 'next/image'
import Link from 'next/link'
import { City } from '@/types'
import { AOSInit } from './aos-init'

interface ProductCardProps {
  title: string
  image: string
  href: string
  description: string
}

function ProductCard({ title, image, href, description }: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative h-[360px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        
        {/* Default title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>
        
        {/* Hover content - title moves to top, followed by description and button */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Content container with less spacing */}
          <div>
            {/* Title at top on hover */}
            <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
            
            {/* Description with reduced margin */}
            <p className="text-white text-sm leading-tight mb-3">
              {description}
            </p>
            
            {/* Button with no margin-top */}
            <button className="bg-[#00a9e0] hover:bg-[#0090c0] text-white py-2 px-6 rounded-full text-sm transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

interface ExpertBlindsProps {
  city: City
}

export function ExpertBlinds({ city }: ExpertBlindsProps) {
  const products = [
    {
      title: "Mini Blinds",
      image: "/hero/imgi_21_RS_AUTO_FABCORN_RB307_BED_01_16_9-2048x1152.webp",
      href: `/${city.slug}/services`,
      description: "Blinds offer a sleek, versatile option to elevate any room in your home. Available in a wide range of materials."
    },
    {
      title: "Wood Blinds",
      image: "/hero/imgi_42_pexels-pixabay-53603.jpg",
      href: `/${city.slug}/services`,
      description: "Add warmth and elegance to your space with our premium wood blinds, crafted from the finest materials for lasting beauty."
    },
    {
      title: "Vertical Blinds",
      image: "/hero/imgi_43_service-maintenance-worker-repairing-scaled.jpg",
      href: `/${city.slug}/services`,
      description: "If you're searching for high-quality vertical blinds at affordable prices, you've come to the right place!"
    },
    {
      title: "Faux Wood Blinds",
      image: "/hero/imgi_52_a-japanese-male-worker-taking-measurements-of-a-ro-2023-11-27-04-49-21-utc-scaled.jpg",
      href: `/${city.slug}/services`,
      description: "If you're searching for high-quality faux wood blinds at budget-friendly prices, you've come to the right spot!"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <AOSInit />
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="inline-block mb-2" data-aos="fade-down" data-aos-delay="200">
            <h5 className="text-[#00a9e0] font-medium">Our Blinds</h5>
            <div className="flex items-center justify-center">
              <div className="w-16 h-1 bg-[#00a9e0]"></div>
              <div className="w-24 h-[1px] bg-gray-300"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1200">
            Expert In Blinds
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            Our Blinds offers both residential and commercial. We provide a wide range of blinds for homes, offices, and other commercial spaces.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="500">
          {products.map((product, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={600 + (index * 150)} 
              data-aos-duration="1000"
            >
              <ProductCard
                title={product.title}
                image={product.image}
                href={product.href}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}