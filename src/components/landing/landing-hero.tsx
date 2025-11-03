import Image from 'next/image'
import { LandingHeroClient } from './landing-hero-client'

export function LandingHero() {
  return (
    <section className="relative min-h-[600px] flex items-center py-16 md:py-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/freebg.webp"
          alt="Blinds background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="lg:col-span-7 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
              Transform Your Space with Perfectly Fitted Blinds
            </h1>
            <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="100">
              Revitalize Your Windows with Free Expert Advice.
            </p>
            
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00a9e0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="ml-2">Block glare and heat with custom-fitted blinds</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00a9e0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="ml-2">Keep your space private with tailored coverings</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00a9e0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="ml-2">Match your style with endless fabric options</span>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00a9e0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="ml-2">Lower energy bills with insulating blinds</span>
              </div>
            </div>
            
            <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center"> 
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-white">4.9/5 (1,200+ happy customers)</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center" data-aos="fade-up" data-aos-delay="400">
              <p className="text-lg mr-4 my-2">Prefer to Talk? Call Now:</p>
              <a 
                href="tel:+18324002107" 
                className="inline-flex items-center bg-[var(--background-bg-color)] hover:bg-[#0085b3] text-white px-6 py-2 rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Talk to an Expert Now
              </a>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="lg:col-span-5">
            <LandingHeroClient />
          </div>
        </div>
      </div>
    </section>
  )
}