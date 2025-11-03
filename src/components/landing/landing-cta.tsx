import Image from 'next/image';
import Link from 'next/link';

export function LandingCTA() {
  return (
    <section className="relative py-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/bg-landing.webp"
          alt="Window blinds background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-white max-w-2xl">
            <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold mb-4">
              Stop Guessing—Get Perfect-Fit <br/> Blinds, On Us
            </h2>
            <p className="text-lg mb-6">
              Claim your complimentary in-home design & measurement session today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/free-consultation#schedule">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Free Consultation
              </button>
            </Link>
            
            <a href="tel:+18324002107" className="bg-[#00a9e0] hover:bg-[#0085b3] text-white font-medium px-6 py-3 rounded-full flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Talk to an Expert Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
