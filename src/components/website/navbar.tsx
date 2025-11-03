'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { City } from '@/types'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

interface NavbarProps {
  city: City
}

export function Navbar({ city }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const cityPath = `/${city.slug}`

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 w-full py-2 sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-28 justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={cityPath} className="flex-shrink-0 flex items-center w-full">
              <Image 
                src="/cropped-venus-blinds-logo-final-01-1-2-768x721-1 (1).webp" 
                alt="Venus Blinds" 
                width={200} 
                height={200} 
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href={cityPath} 
              className="text-gray-700 hover:text-[#00a9e0] px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Home
            </Link>
        
            <Link 
              href={`${cityPath}/services/shades`} 
              className="text-gray-700 hover:text-[#00a9e0] px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Shades
            </Link>
            <Link 
              href={`${cityPath}/services/blinds`} 
              className="text-gray-700 hover:text-[#00a9e0] px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Blinds
            </Link>
            <Link 
              href={`${cityPath}/services/shutters`} 
              className="text-gray-700 hover:text-[#00a9e0] px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Shutters
            </Link>
            <Link 
              href={`${cityPath}/services/draperies`} 
              className="text-gray-700 hover:text-[#00a9e0] px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Draperies
            </Link>
            <Link 
              href={`${cityPath}/about`} 
              className="text-gray-700 hover:text-[#00a9e0] px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/blogs" 
              className="text-gray-700 hover:text-[#00a9e0] px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Blogs
            </Link>
            <Link 
              href={`${cityPath}/contact`} 
              className="text-gray-700 hover:text-[#00a9e0] px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Button 
              className="bg-[#00a9e0] hover:bg-transparent hover:text-[#00a9e0] hover:border-[#00a9e0] text-white px-[20px] py-[15px] rounded-[50px] border border-solid border-[#00a9e0] transition-all duration-200 ml-4 flex items-center gap-2 text-base"
            >
              <Link href={`${cityPath}/contact`} className="text-inherit flex items-center gap-2">
                <Calendar size={18} />
                Get A Quote
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#00a9e0] focus:outline-none focus:text-[#00a9e0] p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-2 pt-4 pb-6 space-y-1 bg-white">
              <Link 
                href={cityPath} 
                className="block text-gray-700 hover:text-[#00a9e0] px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href={`${cityPath}/services`} 
                className="block text-gray-700 hover:text-[#00a9e0] px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href={`${cityPath}/services/shades`} 
                className="block text-gray-700 hover:text-[#00a9e0] px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Shades
              </Link>
              <Link 
                href={`${cityPath}/services/blinds`} 
                className="block text-gray-700 hover:text-[#00a9e0] px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blinds
              </Link>
              <Link 
                href={`${cityPath}/services/shutters`} 
                className="block text-gray-700 hover:text-[#00a9e0] px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Shutters
              </Link>
              <Link 
                href={`${cityPath}/services/draperies`} 
                className="block text-gray-700 hover:text-[#00a9e0] px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Draperies
              </Link>
              <Link 
                href={`${cityPath}/about`} 
                className="block text-gray-700 hover:text-[#00a9e0] px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blogs" 
                className="block text-gray-700 hover:text-[#00a9e0] px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                href={`${cityPath}/contact`} 
                className="block text-gray-700 hover:text-[#00a9e0] px-3 py-3 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-3">
                <Button 
                  className="w-full bg-[#00a9e0] hover:bg-transparent hover:text-[#00a9e0] hover:border-[#00a9e0] text-white px-[20px] py-[15px] rounded-[50px] border border-solid border-[#00a9e0] transition-all duration-200 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={`${cityPath}/contact`} className="text-inherit flex items-center justify-center gap-2">
                    <Calendar size={18} />
                    Get A Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
