'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Inquiry {
  id: string
  name: string
  email: string
  phone: string
  service: string
  status: string
  createdAt: string
}

export function InquiriesTable() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockInquiries: Inquiry[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '(555) 123-4567',
        service: 'Blinds Installation',
        status: 'new',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '(555) 987-6543',
        service: 'Shutters Installation',
        status: 'contacted',
        createdAt: new Date().toISOString()
      }
    ]
    
    setTimeout(() => {
      setInquiries(mockInquiries)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading inquiries...</div>
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'quoted': return 'bg-purple-100 text-purple-800'
      case 'completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Inquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Customer</th>
                <th className="text-left p-4">Contact</th>
                <th className="text-left p-4">Service</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="font-semibold">{inquiry.name}</div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm">
                      <div>{inquiry.email}</div>
                      <div className="text-gray-500">{inquiry.phone}</div>
                    </div>
                  </td>
                  <td className="p-4">{inquiry.service}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {new Date(inquiry.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
