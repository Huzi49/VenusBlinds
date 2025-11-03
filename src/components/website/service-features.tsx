import { City, Service } from '@/types'
import { AOSInit } from './aos-init'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceFeaturesProps {
  service: Service
  city: City
}

export function ServiceFeatures({ service, city }: ServiceFeaturesProps) {
  // Product variants data
  const productVariants = [
    {
      id: 'wood-blinds',
      name: 'Wood Blinds',
      image: '/hero/product-wood.avif',
      description: 'If you\'re on the hunt for high-quality wooden blinds at affordable prices, you\'re in the right place! Crafted from real wood, these blinds bring a touch of natural beauty.',
      slug: 'wood-blinds'
    },
    {
      id: 'faux-wood-blinds',
      name: 'Faux Wood Blinds',
      image: '/hero/product-faux.avif',
      description: 'Browse our collection of indoor faux wood blinds, whether you favor solid faux wood panels for a full-height look or louvered café-style blinds.',
      slug: 'faux-wood-blinds'
    },
    {
      id: 'mini-blinds',
      name: 'Mini Blinds',
      image: '/hero/product-mini.webp',
      description: 'If you\'re looking for affordable yet high-quality mini blinds, you\'ve come to the right spot! Made from durable materials, these mini blinds add a touch of charm and warmth to any space.',
      slug: 'mini-blinds'
    },
    {
      id: 'vertical-blinds',
      name: 'Vertical Blinds',
      image: '/hero/product-vertical.avif',
      description: 'Vertical blinds are a classic and versatile choice, perfectly suited for both contemporary and traditional interiors. Select a finish that highlights the material\'s natural texture.',
      slug: 'vertical-blinds'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <AOSInit />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Product Variants
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productVariants.map((product, index) => (
            <div key={product.id} className="flex flex-col group" data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Product Image with hover effect */}
              <div className="mb-4 relative h-[180px] overflow-hidden">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Product Name */}
              <h3 className="text-3xl text-black font-bold text-center mb-3">
                {product.name}
              </h3>
              
              {/* Product Description */}
              <p className="text-gray-700 text-center text-sm mb-4 flex-grow">
                {product.description}
              </p>
              
              {/* Learn More Button */}
              <div className="text-center mt-auto">
                <Link 
                  href={`/${city.slug}/services/${service.slug}/${product.slug}`}
                  className="inline-block bg-[#00a9e0] text-white px-6 py-2 rounded-full hover:bg-[#0095c8] transition-colors duration-300 text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
