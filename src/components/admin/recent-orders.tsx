import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function RecentOrders() {
  const recentOrders = [
    {
      id: '1',
      customer: 'John Doe',
      service: 'Blinds Installation',
      city: 'Houston',
      status: 'scheduled',
      date: '2024-01-15'
    },
    {
      id: '2',
      customer: 'Jane Smith',
      service: 'Shutters Installation',
      city: 'Dallas',
      status: 'completed',
      date: '2024-01-14'
    },
    {
      id: '3',
      customer: 'Mike Johnson',
      service: 'Repair Services',
      city: 'Austin',
      status: 'in-progress',
      date: '2024-01-13'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800'
      case 'in-progress': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-semibold">{order.customer}</p>
                <p className="text-sm text-gray-600">{order.service} - {order.city}</p>
                <p className="text-xs text-gray-500">{order.date}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
