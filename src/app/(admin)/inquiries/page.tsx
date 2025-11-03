import { InquiriesTable } from '@/components/admin/inquiries-table'
import { InquiriesHeader } from '@/components/admin/inquiries-header'

export const metadata = {
  title: 'Inquiries - Venus Blinds Admin',
  description: 'Manage customer inquiries in the Venus Blinds admin panel.',
}

export default function AdminInquiriesPage() {
  return (
    <div className="space-y-6">
      <InquiriesHeader />
      <InquiriesTable />
    </div>
  )
}
