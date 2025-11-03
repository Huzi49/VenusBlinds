import { PromoBannerClient } from './promo-banner-client'

interface PromoBannerProps {
  promoTexts?: string[]
}

export function PromoBanner({ promoTexts = [
  "Save $100 This Halloween! On orders of $999 or more 🎃",
  "Free Consultation & Free Installation!",
  "Lifetime Warranty on All Products! Shop Now ✨",
  "Same Day Installation Available! Call Today 📞"
] }: PromoBannerProps) {
  return (
    <div 
      className="top-bar text-white text-center relative"
      style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <PromoBannerClient promoTexts={promoTexts} />
      </div>
    </div>
  )
}
