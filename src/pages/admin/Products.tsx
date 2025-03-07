import { useState } from 'react';
import { Package, Filter, Search } from 'lucide-react';
import { useStore } from '@/lib/store';
import ProductsTable from '@/components/admin/ProductsTable';
import ProductForm from '@/components/admin/ProductForm';

export default function Products() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Products Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Manage your product catalog and inventory.
          </p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700"
        >
          <Package className="h-5 w-5" />
          Add New Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>
      </div>

      <ProductsTable />

      {showForm && <ProductForm onClose={() => setShowForm(false)} />}
    </div>
  );
}