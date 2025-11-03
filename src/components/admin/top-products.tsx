import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TopProducts() {
  const topServices = [
    { name: 'Blinds Installation', orders: 45, revenue: '$15,678' },
    { name: 'Shutters Installation', orders: 32, revenue: '$22,450' },
    { name: 'Repair Services', orders: 28, revenue: '$3,890' },
    { name: 'Consultation', orders: 67, revenue: '$0' }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Services</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topServices.map((service, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{service.name}</p>
                <p className="text-sm text-gray-600">{service.orders} orders</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">{service.revenue}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
