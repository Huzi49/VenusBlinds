'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function GalleryFilters() {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'blinds', label: 'Blinds' },
    { id: 'shutters', label: 'Shutters' },
    { id: 'shades', label: 'Shades' }
  ]

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? 'default' : 'outline'}
          onClick={() => setActiveFilter(filter.id)}
          className="mb-2"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}
