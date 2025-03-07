import { Link } from 'react-router-dom';
import { Smartphone, Laptop, ArrowRight } from 'lucide-react';
import { useStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';

const iconMap = {
  Smartphone,
  Laptop,
};

export default function ServicePreview() {
  const services = useStore((state) => state.services);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-500/20 mb-8">
            Our Services
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Repair Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert repair solutions for all your devices, backed by our satisfaction guarantee
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Smartphone;
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg shadow-gray-200/50 transition-all hover:shadow-xl hover:shadow-primary-500/10"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 opacity-10 blur-2xl transition-opacity group-hover:opacity-20" />
                
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      {formatPrice(service.price)}
                    </span>
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-500 hover:text-white"
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-primary-500/35"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}