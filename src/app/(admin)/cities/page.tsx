import { CitiesTable } from '@/components/admin/cities-table'
import { CitiesHeader } from '@/components/admin/cities-header'

export const metadata = {
  title: 'Cities - Venus Blinds Admin',
  description: 'Manage cities in the Venus Blinds admin panel.',
}

export default function AdminCitiesPage() {
  return (
    <div className="space-y-6">
      <CitiesHeader />
      <CitiesTable />
    </div>
  )
}
