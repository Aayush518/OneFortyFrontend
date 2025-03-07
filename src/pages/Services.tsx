import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Laptop, Battery, Cpu, Wifi, HardDrive, Shield, Clock } from 'lucide-react';
import { useStore } from '../lib/store';
import { formatPrice } from '../lib/utils';

const iconMap = {
  Smartphone: Smartphone,
  Laptop: Laptop,
  Battery: Battery,
  Cpu: Cpu,
  Wifi: Wifi,
  HardDrive: HardDrive,
};

export default function Services() {
  const services = useStore((state) => state.services);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'phone', name: 'Phone Repairs' },
    { id: 'laptop', name: 'Laptop Repairs' },
    { id: 'tablet', name: 'Tablet Repairs' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary-900 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Repair Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Expert repairs for all your devices. Fast, reliable, and backed by our satisfaction guarantee.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-900">Quality Guarantee</h2>
                <p className="mt-2 text-gray-600">
                  All our repairs come with a 90-day warranty. If you're not satisfied, we'll make it right.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-gray-900">Quick Turnaround</h2>
                <p className="mt-2 text-gray-600">
                  Most repairs are completed within 24 hours. Get your device back fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-t border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Smartphone;
              return (
                <div
                  key={service.id}
                  className="flex flex-col rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
                >
                  <div className="flex-1 p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">{service.description}</p>
                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-600">
                        {formatPrice(service.price)}
                      </span>
                      <Link
                        to="/contact"
                        className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block">Not sure what service you need?</span>
              <span className="block text-primary-200">
                Get a free diagnostic consultation.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent-500 px-5 py-3 text-base font-medium text-white hover:bg-accent-600"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}