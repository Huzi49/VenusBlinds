import { Button } from '@/components/ui/button'

export function CitiesHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Cities</h1>
        <p className="text-gray-600">Manage cities and service areas</p>
      </div>
      <Button>Add New City</Button>
    </div>
  )
}
