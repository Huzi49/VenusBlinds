'use client'

import { useState, useEffect } from 'react'

interface PromoBannerClientProps {
  promoTexts: string[]
}

export function PromoBannerClient({ promoTexts }: PromoBannerClientProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('left')
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    // Function to handle the slide transition
    const nextSlide = () => {
      if (isAnimating) return
      
      setIsAnimating(true)
      setAnimationDirection('left')
      
      // After animation completes, update the active index
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % promoTexts.length)
        setIsAnimating(false)
      }, 500) // Match this with CSS transition duration
    }
    
    // Set up interval for automatic sliding
    const interval = setInterval(nextSlide, 4000) // 4 seconds between slides
    
    return () => clearInterval(interval)
  }, [promoTexts.length, isAnimating])
  
  // Calculate the previous index
  const prevIndex = activeIndex === 0 ? promoTexts.length - 1 : activeIndex - 1
  // Calculate the next index
  const nextIndex = (activeIndex + 1) % promoTexts.length
  
  return (
    <div className="promo-carousel">
      {/* Current slide */}
      <div 
        className={`promo-slide ${isAnimating ? (animationDirection === 'left' ? 'slide-out-left' : 'slide-out-right') : 'active'}`}
      >
        {promoTexts[activeIndex]}
      </div>
      
      {/* Next slide (for animation) */}
      <div 
        className={`promo-slide ${isAnimating ? (animationDirection === 'left' ? 'slide-in-right' : 'slide-in-left') : ''}`}
      >
        {animationDirection === 'left' ? promoTexts[nextIndex] : promoTexts[prevIndex]}
      </div>
    </div>
  )
}
