import { Users, Package, Wrench, MessageSquare, TrendingUp, TrendingDown } from 'lucide-react';
import { useStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';

export default function AdminStats() {
  const { products, services, contacts, stats } = useStore();

  const calculateChange = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return {
      value: Math.abs(change).toFixed(2) + '%',
      type: change >= 0 ? 'positive' : 'negative',
    };
  };

  const revenueChange = calculateChange(stats.revenue.current, stats.revenue.previous);
  const serviceRequestsChange = calculateChange(
    stats.serviceRequests.current,
    stats.serviceRequests.previous
  );

  const statsData = [
    {
      name: 'Total Products',
      value: products.length,
      icon: Package,
      change: '+4.75%',
      changeType: 'positive',
    },
    {
      name: 'Total Services',
      value: services.length,
      icon: Wrench,
      change: '+54.02%',
      changeType: 'positive',
    },
    {
      name: 'Monthly Revenue',
      value: formatPrice(stats.revenue.current),
      icon: TrendingUp,
      change: revenueChange.value,
      changeType: revenueChange.type,
    },
    {
      name: 'Service Requests',
      value: stats.serviceRequests.current,
      icon: MessageSquare,
      change: serviceRequestsChange.value,
      changeType: serviceRequestsChange.type,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <div
          key={stat.name}
          className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
        >
          <dt>
            <div className="absolute rounded-md bg-primary-500/10 p-3">
              <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              {stat.name}
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p
              className={`ml-2 flex items-center text-sm font-semibold ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.changeType === 'positive' ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              {stat.change}
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
}