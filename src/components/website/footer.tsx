import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram } from 'lucide-react'
import { City } from '@/types'

interface FooterProps {
  city: City
}

export function Footer({ city }: FooterProps) {
  const cityPath = `/${city.slug}`
  
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/hero/footer-1.webp')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src="/hero/footerlogo.webp"
                alt="Venus Blinds"
                width={120}
                height={60}
                className="mb-4"
              />
              <p className="text-sm text-gray-300 mt-4 mb-6">
                From Classic to Modern Windows Solutions, we have the huge blinds Collection, finding the Perfect Blinds has never been so Easier.
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-white hover:text-[#00a9e0]">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-[#00a9e0]">
                  <Instagram size={20} />
                </a>
              </div>
              
        
          
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-6 relative">
              Quick Links
              <span className="block w-12 h-1 bg-[#00a9e0] mt-2"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href={cityPath} className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href={`${cityPath}/about`} className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href={`${cityPath}/services`} className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href={`${cityPath}/contact`} className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          {/* Products */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-6 relative">
              Products
              <span className="block w-12 h-1 bg-[#00a9e0] mt-2"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link href={`${cityPath}/services`} className="text-gray-300 hover:text-white">Blinds</Link></li>
              <li><Link href={`${cityPath}/services`} className="text-gray-300 hover:text-white">Shades</Link></li>
              <li><Link href={`${cityPath}/services`} className="text-gray-300 hover:text-white">Shutters</Link></li>
              <li><Link href={`${cityPath}/services`} className="text-gray-300 hover:text-white">Draperies</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-6 relative">
              Newsletter
              <span className="block w-12 h-1 bg-[#00a9e0] mt-2"></span>
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to get the latest trends, news and special deals for customers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="py-2 px-4 w-full bg-white text-gray-800 focus:outline-none"
              />
              <button className="bg-[#00a9e0] px-4 py-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex items-center w-full mt-6 text-sm text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Suite# 235 15500 Voss Road Sugarland Texas ZIP Code 77498</span>
                <br/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 flex-shrink-0 ml-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>+1 (832) 400-2107</span>
                

              </div>
        <div className="text-center text-gray-300 text-sm mt-12 pt-6 border-t border-gray-700">
          <p>Copyright @ 2025. All Right Reserved.</p>

        </div>
      </div>
    </footer>
  )
}