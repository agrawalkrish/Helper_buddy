import { Suspense } from 'react'
import StatCard from '@/app/dashboard/component/statcard' // Correct
import WorkersTable from '@/app/dashboard/component/workertable' // Fix: 'component' instead of 'components'
// import DashboardCharts from '@/app/dashboard/component/dashboardcharts' // Fix: 'component' instead of 'components'
// import TabButton from '@/app/dashboard/component/tabbutton' // Fix: 'component' instead of 'components'

import { Users, DollarSign, Package } from 'lucide-react'

export default async function DashboardPage() {
  return ( <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value="12.5k"
          description="+15% from last month"
          icon={Users}
        />
        <StatCard
          title="Revenue"
          value="$48.2k"
          description="+20% from last month"
          icon={DollarSign}
        />
        <StatCard
          title="Active Services"
          value="245"
          description="12 new this week"
          icon={Package}
        />
      </div>

      <Suspense fallback={<div>Loading charts...</div>}>
        {/* <DashboardCharts /> */}
      </Suspense>

      <Suspense fallback={<div>Loading workers...</div>}>
        <WorkersTable />
      </Suspense>
    </div>
  )
}