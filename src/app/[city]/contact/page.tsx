import { ContactHero } from '@/components/website/contact-hero'
import { ContactForm } from '@/components/website/contact-form'
import { ContactInfo } from '@/components/website/contact-info'
import { Map } from '@/components/website/map'
import { getCityData } from '@/lib/api/cities'
import { notFound } from 'next/navigation'

interface ContactPageProps {
  params: Promise<{
    city: string
  }>
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    return { title: 'Contact - Venus Blinds' }
  }

  return {
    title: `Contact Venus Blinds ${cityData.name} - Free Consultation & Quote`,
    description: `Contact Venus Blinds in ${cityData.name}, ${cityData.state} for a free consultation. Call ${cityData.phone} or request a quote online.`,
  }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { city } = await params
  const cityData = await getCityData(city)
  
  if (!cityData) {
    notFound()
  }

  return (
    <div className="">
      <ContactHero city={cityData} />
      <Map city={cityData} />
      <section className='w-full bg-[#1f1f1f] py-12 md:py-16 lg:py-24 xl:py-[120px]'>
      <div className="max-w-7xl mx-auto px-4">
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ContactForm city={cityData} />
          <ContactInfo city={cityData} />
        </div>
      </div>
      </section>
    </div>
   
  )
}
