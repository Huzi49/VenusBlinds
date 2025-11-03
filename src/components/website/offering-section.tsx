// 'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { City } from '@/types'
import { Wrench, Palette, Shield } from 'lucide-react'
import { AOSInit } from './aos-init'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-[rgb(110,193,228)] rounded-[16px] backdrop-blur-[7.4px] border-[5px] border-[#0BA5E1] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
      {/* Icon */}
      {/* <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div> */}

      {/* Title */}
      <h3 className="text-center uppercase text-2xl font-bold text-white-900 mb-4" data-aos="fade-down" data-aos-delay="100">{title}</h3>
      {/* Description */}
      <p className="text-white-600 text-center mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">{description}</p>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700" data-aos="fade-right" data-aos-delay={300 + (index * 100)}>
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface OfferingSectionProps {
  city: City
}

export function OfferingSection({ city }: OfferingSectionProps) {
  const services = [
    {
      // icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Affordable Pricing",
      description: "Get premium quality blinds at competitive prices without compromising on quality or service.",
      features: [
        // "Transparent pricing with no hidden fees",
        // "Flexible payment options available",
        // "Price matching guarantee",
        // "Free estimates and consultations"
      ]
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Free Consultation",
      description: "Our experts will visit your home to provide personalized recommendations and accurate measurements.",
      features: [
        // "In-home design consultation",
        // "Professional measurements",
        // "Style and color recommendations",
        // "No obligation estimates"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Free Installation",
      description: "Our certified installers ensure perfect fitting and long-lasting performance of your window treatments.",
      features: [
        // "Certified installation technicians",
        // "Quality workmanship guarantee",
        // "Clean and efficient service",
        // "Post-installation support"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <AOSInit />
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="inline-block mb-2" data-aos="fade-down" data-aos-delay="200">
            <h5 className="text-[#00a9e0] font-medium">Our Offers</h5>
            <div className="flex items-center justify-center">
              <div className="w-16 h-1 bg-[#00a9e0]"></div>
              <div className="w-24 h-[1px] bg-gray-300"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1200">
          We Are Offering...
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          Transform your home with premium, stylish, and energy-efficient window treatments — installed quickly and affordably.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-aos="fade-up" data-aos-delay="500">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="zoom-in" 
              data-aos-delay={600 + (index * 200)} 
              data-aos-duration="1000"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
