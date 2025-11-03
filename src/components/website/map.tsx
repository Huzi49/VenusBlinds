import { City } from '@/types'

interface MapProps {
  city: City
}

export function Map({ city }: MapProps) {
  // Sugar Land, TX location for Venus Blinds
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.8790872006627!2d-95.6344905!3d29.6193369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e7c5db9e1b31%3A0xcfcb81c45cd5cb2c!2s15500%20Voss%20Rd%2C%20Sugar%20Land%2C%20TX%2077498!5e0!3m2!1sen!2sus!4v1714071006133!5m2!1sen!2sus";

  return (
    <section className="w-full">
      <div className="w-full h-[500px] relative">
        <iframe 
          src={mapSrc}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Venus Blinds Location"
          className="absolute inset-0"
        />
      </div>
    </section>
  )
}
