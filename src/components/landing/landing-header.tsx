'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PromoBanner } from '../website/promo-banner'

export function LandingHeader() {
  // Function to handle phone call
  const handlePhoneCall = () => {
    window.location.href = 'tel:+18324002107'
  }
  
  return (
    <header>
      <PromoBanner promoTexts={[
        "Book Your Free Consultation Today! Limited Slots Available 📅",
        "Expert Advice & Free Measurements for Your Home",
        "Schedule Now and Get 15% Off Your First Order!"
      ]} />
      
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/free-consultation">
                <Image 
                  src="/cropped-venus-blinds-logo-final-01-1-2-768x721-1 (1).webp" 
                  alt="Venus Blinds" 
                  width={150} 
                  height={150} 
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            
            {/* Phone Button */}
            <button 
              onClick={handlePhoneCall}
              className="flex items-center bg-[#00a9e0] hover:bg-[#0085b3] text-white font-medium px-4 py-2 rounded-md transition-colors duration-300"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs leading-none">Free Consultation</span>
                <span className="text-sm font-bold">+1 (832) 400-2107</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
