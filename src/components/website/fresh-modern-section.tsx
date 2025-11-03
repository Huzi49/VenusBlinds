// 'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export function FreshModernSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* First Section - Welcome and Content */}
        <div className="animate__animated animate__fadeIn bg-white p-8 md:p-12 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Welcome and Heading */}
            <div className="space-y-6">
              <div className="inline-block mb-2">
                <h5 className="animate__animated animate__fadeInLeft animate__delay-1s text-[#00a9e0] font-medium">Welcome to Venusblinds</h5>
                <div className="animate__animated animate__fadeInLeft animate__delay-1s flex items-center">
                  <div className="w-16 h-1 bg-[#00a9e0]"></div>
                  <div className="w-24 h-[1px] bg-gray-300"></div>
                </div>
              </div>
              
              <h2 className="animate__animated animate__fadeInUp animate__delay-1s text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                We Make Your Space Looking Fresh & Modern
              </h2>
            </div>

            {/* Right Content - Text */}
            <div>
              <p className="animate__animated animate__fadeInRight animate__delay-2s text-gray-600 leading-relaxed">
                Running a business and need to spruce up your office's window treatments? Our commercial Blinds services are here to help. From practical blackout blinds to stylish drapes, we have a variety of options to suit your needs and enhance the look of your space. Contact us to schedule a consultation and see how we can help.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section - Vision/Mission and Image */}
        <div className="animate__animated animate__fadeIn animate__delay-2s bg-white p-8 md:p-12 rounded-lg shadow-sm mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Vision and Mission */}
            <div className="space-y-8">
              {/* Our Vision */}
              <div className="animate__animated animate__fadeInLeft animate__delay-3s flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-10 h-10 text-[#00a9e0] animate__animated animate__pulse animate__infinite animate__slower" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    Our vision is to provide innovative, high-quality blinds that enhance comfort, style, and functionality in every space
                  </p>
                </div>
              </div>

              {/* Our Mission */}
              <div className="animate__animated animate__fadeInLeft animate__delay-4s flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-10 h-10 text-[#00a9e0] animate__animated animate__pulse animate__infinite animate__slower" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    Our mission is to deliver exceptional blinds with superior craftsmanship, outstanding customer service, and personalized solutions that exceed expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative animate__animated animate__fadeIn animate__delay-3s">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/hero/about-2.webp"
                  alt="Modern office with blinds"
                  fill
                  className="object-cover animate__animated animate__zoomIn animate__slow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}