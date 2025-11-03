import { Button } from '@/components/ui/button'

export function InquiriesHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Customer Inquiries</h1>
        <p className="text-gray-600">Manage customer inquiries and follow-ups</p>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline">Export</Button>
        <Button>Add Manual Inquiry</Button>
      </div>
    </div>
  )
}
