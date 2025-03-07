import AdminStats from '@/components/admin/AdminStats';
import RecentContacts from '@/components/admin/RecentContacts';
import { LineChart, BarChart, Activity, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const charts = [
    {
      title: 'Revenue Overview',
      description: 'Monthly revenue trends',
      icon: LineChart,
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values: [3000, 4500, 3800, 5200, 4800, 6000],
      },
    },
    {
      title: 'Service Requests',
      description: 'Weekly service request volume',
      icon: BarChart,
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        values: [12, 15, 18, 14, 16, 8, 6],
      },
    },
    {
      title: 'Customer Growth',
      description: 'New customers per month',
      icon: TrendingUp,
      data: {
        current: 245,
        previous: 215,
        change: '+14%',
      },
    },
    {
      title: 'Service Performance',
      description: 'Average completion time',
      icon: Activity,
      data: {
        current: '1.8 days',
        previous: '2.1 days',
        change: '-15%',
      },
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Dashboard Overview
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Monitor your business performance and key metrics.
        </p>
      </div>

      {/* Stats Cards */}
      <AdminStats />

      {/* Performance Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {charts.map((chart) => (
          <div
            key={chart.title}
            className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{chart.title}</h3>
                <p className="text-sm text-gray-500">{chart.description}</p>
              </div>
              <div className="rounded-full bg-primary-50 p-3">
                <chart.icon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="mt-6">
              {/* Placeholder for actual charts */}
              <div className="h-48 rounded-lg bg-gray-50 flex items-center justify-center">
                <span className="text-sm text-gray-500">Chart visualization coming soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Contacts */}
      <RecentContacts />
    </div>
  );
}