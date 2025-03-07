import { Shield, Clock, Star, Wrench, Smartphone, Cpu } from 'lucide-react';

const features = [
  {
    name: 'Expert Technicians',
    description: 'Our certified technicians bring years of experience and expertise to every repair.',
    icon: Wrench,
  },
  {
    name: 'Quick Service',
    description: 'Most repairs completed within 24 hours, getting you back to work faster.',
    icon: Clock,
  },
  {
    name: 'Quality Parts',
    description: 'We use only genuine, high-quality replacement parts for all repairs.',
    icon: Cpu,
  },
  {
    name: 'Device Protection',
    description: '90-day warranty on all repairs, ensuring your complete satisfaction.',
    icon: Shield,
  },
  {
    name: 'Mobile Repairs',
    description: 'Professional smartphone repair services for all major brands.',
    icon: Smartphone,
  },
  {
    name: 'Best Service',
    description: 'Rated 5 stars by our customers for exceptional repair service.',
    icon: Star,
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,rgba(248,250,252,0)_100%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Service
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600">
            Professional repair services with a focus on quality, speed, and customer satisfaction.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative rounded-2xl bg-white p-6 sm:p-8 shadow-soft transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-brand-600 text-white">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              
              <h3 className="mt-4 sm:mt-6 font-heading text-lg sm:text-xl font-semibold text-gray-900">
                {feature.name}
              </h3>
              
              <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}