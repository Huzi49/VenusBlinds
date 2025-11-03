export function GalleryGrid() {
  const galleryItems = [
    {
      id: 1,
      title: 'Modern Living Room Blinds',
      category: 'residential',
      type: 'blinds',
      location: 'Downtown Houston',
      image: '/gallery/project-1.jpg'
    },
    {
      id: 2,
      title: 'Office Building Shutters',
      category: 'commercial',
      type: 'shutters',
      location: 'Business District',
      image: '/gallery/project-2.jpg'
    },
    {
      id: 3,
      title: 'Bedroom Blackout Shades',
      category: 'residential',
      type: 'shades',
      location: 'Suburban Home',
      image: '/gallery/project-3.jpg'
    },
    {
      id: 4,
      title: 'Kitchen Window Treatments',
      category: 'residential',
      type: 'blinds',
      location: 'Family Home',
      image: '/gallery/project-4.jpg'
    },
    {
      id: 5,
      title: 'Restaurant Ambiance Control',
      category: 'commercial',
      type: 'shades',
      location: 'Restaurant',
      image: '/gallery/project-5.jpg'
    },
    {
      id: 6,
      title: 'Luxury Home Plantation Shutters',
      category: 'residential',
      type: 'shutters',
      location: 'Luxury Residence',
      image: '/gallery/project-6.jpg'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item) => (
        <div key={item.id} className="group cursor-pointer">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Gallery Image {item.id}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{item.location}</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {item.category}
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                {item.type}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
