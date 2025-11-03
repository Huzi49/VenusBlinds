import { City } from '@/types'

interface AppointmentSectionProps {
  city: City
}

export function AppointmentSection({ city }: AppointmentSectionProps) {
  // Server-side form implementation
  const formAction = `/api/submit-appointment?city=${city.slug}` // Replace with your actual API endpoint

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/hero/bg-form.webp')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Color Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(110, 193, 228, 0.7)' }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Book An Appointment
            </h2>
            <p className="text-xl text-gray-700">
              Get In Touch With Us
            </p>
          </div>

          {/* Form - Using standard HTML form without client-side state */}
          <form action={formAction} method="POST" className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border-b border-gray-400 focus:border-gray-700 focus:outline-none text-gray-700 placeholder-gray-500"
                placeholder="Name"
                style={{ color: '#333' }}
              />
            </div>

            {/* Zip Code */}
            <div>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                required
                className="w-full px-4 py-3 border-b border-gray-400 focus:border-gray-700 focus:outline-none text-gray-700 placeholder-gray-500"
                placeholder="Zip Code"
                style={{ color: '#333' }}
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border-b border-gray-400 focus:border-gray-700 focus:outline-none text-gray-700 placeholder-gray-500"
                placeholder="Phone Number"
                style={{ color: '#333' }}
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border-b border-gray-400 focus:border-gray-700 focus:outline-none text-gray-700 placeholder-gray-500"
                placeholder="Email"
                style={{ color: '#333' }}
              />
            </div>

            {/* Service */}
            <div className="relative">
              <select
                id="service"
                name="service"
                defaultValue="Select service"
                className="w-full px-4 py-3 border-b border-gray-400 focus:border-gray-700 focus:outline-none text-gray-700 appearance-none"
                style={{ color: '#333' }}
              >
                <option value="">Select service</option>
                <option value="Shades">Shades</option>
                <option value="Drapery">Drapery</option>
                <option value="Blinds">Blinds</option>
                <option value="Shutters">Shutters</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            {/* Hidden field for city */}
            <input type="hidden" name="citySlug" value={city.slug} />

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full bg-[#0f172a] hover:bg-black text-white py-3 px-6 font-medium transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}