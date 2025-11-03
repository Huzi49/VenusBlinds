import { Button } from '@/components/ui/button'

export function ServicesHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Services</h1>
        <p className="text-gray-600">Manage services and sub-services</p>
      </div>
      <Button>Add New Service</Button>
    </div>
  )
}
