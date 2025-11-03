'use client'

import { useEffect, useState } from 'react'
import { AOSInit } from './aos-init'

interface StatItemProps {
  number: string
  label: string
  suffix?: string
}

function StatItem({ number, label, suffix = '' }: StatItemProps) {
  const [count, setCount] = useState(0)
  const targetNumber = parseInt(number.replace(/\D/g, ''))

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetNumber / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetNumber) {
        setCount(targetNumber)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [targetNumber])

  return (
    <div className="text-center text-white" data-aos="fade-up" data-aos-delay="300">
      <div className="text-4xl md:text-6xl font-bold mb-2" data-aos="zoom-in" data-aos-delay="500">
        {count}{suffix}
      </div>
      <div className="text-lg md:text-xl opacity-90">
        {label}
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <AOSInit />
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero/Leonardo_Kino_XL_motorized_shades_3.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1F1F1F] opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block mb-4" data-aos="fade-down" data-aos-delay="200">
              <h5 className="text-[#00a9e0] font-medium text-center">Clients Satisfaction</h5>
              <div className="w-32 h-1 bg-[#00a9e0] mt-1 mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-left" data-aos-duration="1500">
              We Make Your Space Looking Fresh & Modern
            </h2>
            <p className="text-white text-lg max-w-4xl mx-auto opacity-90">
              At Venus Blinds, we take pride in delivering exceptional quality and personalized service. Your happiness drives our commitment to excellence, ensuring every experience exceeds expectations.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16" data-aos="fade-up" data-aos-delay="400">
            <StatItem
              number="100"
              suffix="+"
              label="Project Completed"
            />
            <StatItem
              number="20"
              suffix="+"
              label="Satisfied Customer"
            />
            <StatItem
              number="2"
              suffix="+"
              label="Years Experience"
            />
          </div>
        </div>
      </div>
    </section>
  )
}