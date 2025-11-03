'use client'

import { useState, useEffect } from 'react'

interface HeroCarouselProps {
  images: string[]
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [prevImageIndex, setPrevImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex)
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000) // 5 seconds
    return () => clearInterval(interval)
  }, [currentImageIndex, images.length])

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentImageIndex 
              ? 'opacity-100 scale-100' 
              : index === prevImageIndex 
                ? 'opacity-0 scale-105' 
                : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#0AA5DF] opacity-30"></div>
        </div>
      ))}
    </div>
  )
}