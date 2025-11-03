import { City } from '@/types'
import { revalidatePath } from "next/cache"

interface ContactFormProps {
  city: City
}

async function handleSubmit(formData: FormData) {
  "use server"
  
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const subject = formData.get("subject")
  const message = formData.get("message")
  const cityId = formData.get("cityId")

  // Server-side logs
  console.log("🟢 [SERVER] Form submitted")
  console.log("🟢 [SERVER] Name:", name)
  console.log("🟢 [SERVER] Email:", email)
  console.log("🟢 [SERVER] Phone:", phone)
  console.log("🟢 [SERVER] Subject:", subject)
  console.log("🟢 [SERVER] Message:", message)
  console.log("🟢 [SERVER] City ID:", cityId)

  try {
    // Call API endpoint (replace with your actual API endpoint)
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name, 
        email, 
        phone, 
        subject, 
        message, 
        cityId 
      }),
    })

    console.log("🟢 [SERVER] API Status:", res.status)

    const data = await res.json()
    console.log("🟢 [SERVER] API Response:", data)

    // Revalidate the current path
    revalidatePath("/")
  } catch (error) {
    console.error("🔴 [SERVER] API call failed:", error)
  }

  console.log("🟢 [SERVER] handleSubmit finished ✅")
}

export function ContactForm({ city }: ContactFormProps) {
  return (
    <section className="py-16 px-4 md:px-8" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-left" data-aos="fade-right" data-aos-delay="100">
          <h3 className="text-white text-sm sm:text-base font-medium mb-2">Get In Touch With Us</h3>
          <div className="w-24 sm:w-32 h-1 bg-[#00a9e0] my-auto"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Send a Message
          </h2>
        </div>
        
        <form action={handleSubmit} className="space-y-5">
          <input type="hidden" name="cityId" value={city.id} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-aos="fade-up" data-aos-delay="200">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-transparent border border-white-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00a9e0]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-transparent border border-white-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00a9e0]"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-aos="fade-up" data-aos-delay="300">
            <div>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your Phone"
                className="w-full px-4 py-3 bg-transparent border border-white-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00a9e0]"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-transparent border border-white-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00a9e0]"
              />
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400">
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message..."
              className="w-full px-4 py-3 bg-transparent border border-white-600 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00a9e0]"
            />
          </div>
          
          <div className="text-left" data-aos="fade-up" data-aos-delay="500">
            <button 
              type="submit" 
              className="inline-block bg-[#00a9e0] hover:bg-[#0085b3] text-white font-medium px-8 py-3 rounded-full transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
