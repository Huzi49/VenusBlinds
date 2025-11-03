import { DashboardStats } from '@/components/admin/dashboard-stats'
import { RecentOrders } from '@/components/admin/recent-orders'
import { SalesChart } from '@/components/admin/sales-chart'
import { TopProducts } from '@/components/admin/top-products'

export const metadata = {
  title: 'Dashboard - Venus Blinds Admin',
  description: 'Admin dashboard for Venus Blinds management.',
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <TopProducts />
      </div>
      
      <RecentOrders />
    </div>
  )
}
