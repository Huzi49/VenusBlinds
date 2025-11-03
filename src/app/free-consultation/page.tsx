import { LandingHero } from '@/components/landing/landing-hero'
import { LandingBenefits } from '@/components/landing/landing-benefits'
import { LandingProcess } from '@/components/landing/landing-process'
import { LandingCTA } from '@/components/landing/landing-cta'
import { LandingTestimonials } from '@/components/landing/landing-testimonials'
import { LandingAppointment } from '@/components/landing/landing-appointment'

/**
 * Free Consultation Landing Page
 * 
 * This page uses modular, reusable components from the landing folder:
 * - LandingHero: Hero section with headline and CTA
 * - LandingBenefits: Benefits of booking a consultation
 * - LandingProcess: How we create your perfect blinds
 * - LandingCTA: Call-to-action section with background image
 * - LandingTestimonials: Client testimonials
 * - LandingAppointment: Appointment booking form
 */
export default function FreeConsultationPage() {
  return (
    <div className="space-y-16">
      <LandingHero />
      <LandingBenefits />
      <LandingProcess />
      <LandingCTA />
      <LandingTestimonials />
      <LandingAppointment />
    </div>
  );
}