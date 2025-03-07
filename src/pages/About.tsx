import { Users, Award, Clock, PenTool as Tool, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Devices Repaired', value: '25k+' },
    { label: 'Satisfied Customers', value: '20k+' },
    { label: 'Expert Technicians', value: '15+' },
  ];

  const values = [
    {
      icon: Tool,
      title: 'Expert Service',
      description: 'Our certified technicians bring years of experience and expertise to every repair.',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Most repairs are completed within 24 hours, getting your device back to you fast.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with a 90-day warranty on all repairs.',
    },
    {
      icon: Award,
      title: 'Best Parts',
      description: 'We use only high-quality, genuine parts for all our repairs.',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'Founder & Lead Technician',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: '15 years of experience in mobile and laptop repairs. Certified by major manufacturers.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Phone Repair Specialist',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Expert in smartphone repairs with 8 years of experience. Specializes in screen replacements.',
    },
    {
      name: 'Michael Chen',
      role: 'Laptop Repair Expert',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      bio: 'Specialized in laptop motherboard repairs and data recovery. 10 years in the industry.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary-900 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About TechFix Pro
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Your trusted partner in mobile and laptop repairs since 2014. We're committed to providing
              fast, reliable, and professional repair services.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-12 sm:-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-lg bg-white px-6 py-8 shadow-lg sm:px-12">
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center border-b border-gray-100 p-4 text-center last:border-0 sm:border-0"
                  >
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="order-1 text-4xl font-bold tracking-tight text-primary-600">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Founded in 2014, TechFix Pro began with a simple mission: to provide honest,
                professional, and affordable device repair services to our local community. What started
                as a small repair shop has grown into a trusted name in tech repair, serving thousands
                of satisfied customers.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our commitment to quality service, transparent pricing, and customer satisfaction has
                helped us build lasting relationships with our clients. We continue to evolve with
                technology, constantly updating our skills and equipment to handle the latest devices.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
                alt="Repair shop workspace"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              These core values guide everything we do, from customer service to repair quality.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-center text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Expert Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our certified technicians bring years of experience and expertise to every repair.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get your device fixed?</span>
              <span className="block text-primary-200">
                Our expert team is here to help.
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