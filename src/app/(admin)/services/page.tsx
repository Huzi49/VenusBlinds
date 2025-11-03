import { ServicesTable } from '@/components/admin/services-table'
import { ServicesHeader } from '@/components/admin/services-header'

export const metadata = {
  title: 'Services - Venus Blinds Admin',
  description: 'Manage services in the Venus Blinds admin panel.',
}

export default function AdminServicesPage() {
  return (
    <div className="space-y-6">
      <ServicesHeader />
      <ServicesTable />
    </div>
  )
}
