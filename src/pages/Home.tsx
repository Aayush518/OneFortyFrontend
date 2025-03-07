import { Link } from 'react-router-dom';
import Hero from '../components/client/home/Hero';
import Features from '../components/client/home/Features';
import ServicePreview from '../components/client/home/ServicePreview';
import Testimonials from '../components/client/home/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <ServicePreview />
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-primary-700">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get your device fixed?</span>
              <span className="block text-primary-200">
                Contact us today for a free consultation.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-accent-500 px-5 py-3 text-base font-medium text-white hover:bg-accent-600"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}