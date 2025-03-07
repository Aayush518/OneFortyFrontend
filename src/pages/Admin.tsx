import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/lib/store';
import AdminStats from '@/components/admin/AdminStats';
import RecentContacts from '@/components/admin/RecentContacts';
import ProductsTable from '@/components/admin/ProductsTable';
import ServicesTable from '@/components/admin/ServicesTable';

export default function Admin() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Dashboard
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Overview of your business metrics and recent activities.
            </p>
          </div>

          {/* Stats Cards */}
          <AdminStats />

          {/* Recent Contacts */}
          <RecentContacts />

          {/* Products Table */}
          <ProductsTable />

          {/* Services Table */}
          <ServicesTable />
        </div>
      </div>
    </div>
  );
}