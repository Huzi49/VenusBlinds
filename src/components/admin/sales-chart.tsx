import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Sales Chart Placeholder</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">$12,450</p>
            <p className="text-sm text-gray-600">This Month</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">$45,678</p>
            <p className="text-sm text-gray-600">This Quarter</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">$156,789</p>
            <p className="text-sm text-gray-600">This Year</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
