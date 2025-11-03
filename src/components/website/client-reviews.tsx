// 'use client'

import Image from 'next/image'
import { AOSInit } from './aos-init'

interface ReviewCardProps {
  name: string
  image: string
  review: string
}

function ReviewCard({ name, image, review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md flex flex-col h-full">
      {/* Profile Image on Top */}
      <div className="flex justify-center mb-6" data-aos="zoom-in" data-aos-duration="800">
        <div className="relative w-[131px] h-[131px] rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed mb-6 text-center" data-aos="fade-up" data-aos-delay="200">
        {review}
      </p>

      {/* Name and Rating */}
      <div className="mt-auto" data-aos="fade-up" data-aos-delay="300">
        <h4 className="font-medium text-gray-900 text-center text-lg mb-2">{name}</h4>
        <div className="flex items-center justify-center text-yellow-400 text-xl" data-aos="zoom-in" data-aos-delay="400">
          ★★★★★
        </div>
      </div>
    </div>
  )
}

export function ClientReviews() {
  const reviews = [
    {
      name: "James M.",
      image: "https://venusblinds.com/wp-content/uploads/2025/01/pexels-olly-3760376-scaled.jpg", 
      review: "I can't say enough good things about Venus Blinds. From their extensive collection to their excellent customer service, everything was top-notch. The blinds were easy to install and gave my home a modern touch."
    },
    {
      name: "Sophia L.",
      image: "https://venusblinds.com/wp-content/uploads/2025/01/pexels-olly-3760376-scaled.jpg", 
      review: "Venus Blinds transformed my living space! The Roman Shades I purchased are not only elegant but also incredibly functional. The team guided me through every step, ensuring I chose the perfect style and color. Highly recommended!"
    },
    {
      name: "Emily R.",
      image: "https://venusblinds.com/wp-content/uploads/2025/01/pexels-olly-3760376-scaled.jpg", 
      review: "I was amazed at the quality of the blinds I received. They look even better in person than they do on the website. Venus Blinds has added a whole new level of comfort and style to my office."
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <AOSInit />
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero/blank-conveyor-systems-fuzzy-factory-background-scaled.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-block mb-2" data-aos="fade-down" data-aos-delay="200">
              <h5 className="text-[#00a9e0] font-medium">Our Testimonials</h5>
              <div className="w-32 h-1 bg-[#00a9e0] mt-1 mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1200">
            Clients Reviews
          </h2>
        </div>

        {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="400">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={500 + (index * 200)} 
              data-aos-duration="1000"
            >
              <ReviewCard
                name={review.name}
                image={review.image}
                review={review.review}
              />
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}