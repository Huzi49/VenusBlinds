import { Service } from '@/types'

// Mock data - replace with actual database calls
const mockServices: Service[] = [
  {
    id: '1',
    name: 'Shades',
    slug: 'shades',
    description: 'Premium window shades for residential and commercial properties',
    longDescription: 'Our premium window shades collection offers the perfect balance of style, privacy, and light control. Choose from roller shades, roman shades, cellular shades and more to enhance your interior decor.',
    image: '/services/shades.jpg',
    icon: '🪟',
    category: 'window-treatments',
    subServices: [
      {
        id: '1-1',
        name: 'Roller Shades',
        slug: 'roller-shades',
        description: 'Clean, modern window coverings with simple operation',
        image: '/services/roller-shades.jpg',
        price: 'Starting from $89',
        features: ['Light filtering options', 'Blackout available', 'Motorization options', 'Custom sizes'],
        isActive: true,
        order: 1
      },
      {
        id: '1-2',
        name: 'Roman Shades',
        slug: 'roman-shades',
        description: 'Elegant fabric shades that fold when raised',
        image: '/services/roman-shades.jpg',
        price: 'Starting from $129',
        features: ['Designer fabrics', 'Insulating options', 'Cordless available', 'Custom styles'],
        isActive: true,
        order: 2
      }
    ],
    gallery: [
      '/gallery/shades-1.jpg',
      '/gallery/shades-2.jpg',
      '/gallery/shades-3.jpg'
    ],
    faqs: [
      {
        id: '1-faq-1',
        question: 'What types of shades do you offer?',
        answer: 'We offer roller shades, roman shades, cellular/honeycomb shades, solar shades, and more.',
        order: 1
      },
      {
        id: '1-faq-2',
        question: 'Are motorized options available?',
        answer: 'Yes, most of our shades can be motorized and integrated with smart home systems.',
        order: 2
      }
    ],
    isActive: true,
    order: 1,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Blinds',
    slug: 'blinds',
    description: 'High-quality blinds for perfect light control and privacy',
    longDescription: 'Our collection of premium blinds offers versatile light control and enhanced privacy for any space. Available in various materials, colors, and styles to complement your interior design.',
    image: '/services/blinds.jpg',
    icon: '🎯',
    category: 'window-treatments',
    subServices: [
      {
        id: '2-1',
        name: 'Venetian Blinds',
        slug: 'venetian-blinds',
        description: 'Classic horizontal slat blinds in various materials',
        image: '/services/venetian-blinds.jpg',
        price: 'Starting from $79',
        features: ['Precise light control', 'Multiple materials', 'Custom colors', 'Cordless options'],
        isActive: true,
        order: 1
      },
      {
        id: '2-2',
        name: 'Vertical Blinds',
        slug: 'vertical-blinds',
        description: 'Perfect solution for sliding doors and large windows',
        image: '/services/vertical-blinds.jpg',
        price: 'Starting from $99',
        features: ['Easy operation', 'Wide coverage', 'Various materials', 'Stack options'],
        isActive: true,
        order: 2
      }
    ],
    gallery: [
      '/gallery/blinds-1.jpg',
      '/gallery/blinds-2.jpg'
    ],
    faqs: [
      {
        id: '2-faq-1',
        question: 'What materials are available for blinds?',
        answer: 'We offer wood, faux wood, aluminum, vinyl, and fabric blinds in various colors and finishes.',
        order: 1
      },
      {
        id: '2-faq-2',
        question: 'How do I clean my blinds?',
        answer: 'Cleaning methods vary by material. Most blinds can be dusted regularly and occasionally wiped with a damp cloth.',
        order: 2
      }
    ],
    isActive: true,
    order: 2,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Shutters',
    slug: 'shutters',
    description: 'Elegant plantation shutters for timeless window treatments',
    longDescription: 'Our premium shutters add architectural interest and timeless elegance to any home. Crafted from high-quality materials, our shutters provide excellent insulation, light control, and enhanced home value.',
    image: '/services/shutters.jpg',
    icon: '🚪',
    category: 'window-treatments',
    subServices: [
      {
        id: '3-1',
        name: 'Plantation Shutters',
        slug: 'plantation-shutters',
        description: 'Classic wide-slat shutters for elegant light control',
        image: '/services/plantation-shutters.jpg',
        price: 'Starting from $299',
        features: ['Custom fit', 'Energy efficient', 'Increases home value', 'Various louver sizes'],
        isActive: true,
        order: 1
      },
      {
        id: '3-2',
        name: 'Cafe Shutters',
        slug: 'cafe-shutters',
        description: 'Half-height shutters for privacy with natural light',
        image: '/services/cafe-shutters.jpg',
        price: 'Starting from $199',
        features: ['Bottom half coverage', 'Natural light entry', 'Charming aesthetic', 'Various materials'],
        isActive: true,
        order: 2
      }
    ],
    gallery: [
      '/gallery/shutters-1.jpg',
      '/gallery/shutters-2.jpg'
    ],
    faqs: [
      {
        id: '3-faq-1',
        question: 'What materials are your shutters made from?',
        answer: 'We offer wood, composite, vinyl, and aluminum shutters in various finishes and colors.',
        order: 1
      },
      {
        id: '3-faq-2',
        question: 'How long do shutters last?',
        answer: 'Quality shutters can last 20+ years with proper care, making them an excellent investment for your home.',
        order: 2
      }
    ],
    isActive: true,
    order: 3,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Draperies',
    slug: 'draperies',
    description: 'Luxurious custom draperies and curtains for any space',
    longDescription: 'Transform your windows with our custom draperies and curtains. From sheer to blackout, our extensive fabric collection and custom designs add elegance and personality to any room.',
    image: '/services/draperies.jpg',
    icon: '🧵',
    category: 'window-treatments',
    subServices: [
      {
        id: '4-1',
        name: 'Custom Curtains',
        slug: 'custom-curtains',
        description: 'Tailored curtains in a variety of fabrics and styles',
        image: '/services/custom-curtains.jpg',
        price: 'Starting from $149',
        features: ['Designer fabrics', 'Custom lengths', 'Various heading styles', 'Lining options'],
        isActive: true,
        order: 1
      },
      {
        id: '4-2',
        name: 'Sheers & Panels',
        slug: 'sheers-panels',
        description: 'Light-filtering window treatments for soft illumination',
        image: '/services/sheers-panels.jpg',
        price: 'Starting from $99',
        features: ['Soft light diffusion', 'Privacy options', 'Layering capability', 'Various fabrics'],
        isActive: true,
        order: 2
      }
    ],
    gallery: [
      '/gallery/draperies-1.jpg',
      '/gallery/draperies-2.jpg'
    ],
    faqs: [
      {
        id: '4-faq-1',
        question: 'How do I choose the right fabric for my draperies?',
        answer: 'Consider light control needs, room decor, and functionality. Our design consultants can help you select the perfect fabric during your free consultation.',
        order: 1
      },
      {
        id: '4-faq-2',
        question: 'Can draperies be motorized?',
        answer: 'Yes, we offer motorization options for most draperies and curtains, allowing for convenient remote operation.',
        order: 2
      }
    ],
    isActive: true,
    order: 4,
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
]

export async function getServices(): Promise<Service[]> {
  // TODO: Replace with actual database query
  return mockServices.filter(service => service.isActive).sort((a, b) => a.order - b.order)
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  // TODO: Replace with actual database query
  const service = mockServices.find(service => service.slug === slug && service.isActive)
  return service || null
}

export async function getServiceById(id: string): Promise<Service | null> {
  // TODO: Replace with actual database query
  const service = mockServices.find(service => service.id === id && service.isActive)
  return service || null
}