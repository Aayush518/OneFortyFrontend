import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from 'lucide-react';
import { useStore } from '@/lib/store';
import * as Icons from 'lucide-react';

export default function Footer() {
  const siteConfig = useStore((state) => state.siteConfig);
  const LogoIcon = Icons[siteConfig.logo as keyof typeof Icons];

  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Products', href: '/products' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Phone Repair', href: '/services#phone' },
      { name: 'Laptop Repair', href: '/services#laptop' },
      { name: 'Tablet Repair', href: '/services#tablet' },
      { name: 'Data Recovery', href: '/services#data' },
      { name: 'Diagnostics', href: '/services#diagnostics' },
    ],
    support: [
      { name: 'FAQs', href: '#' },
      { name: 'Warranty Info', href: '#' },
      { name: 'Shipping Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
    social: [
      { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
      { name: 'Twitter', href: siteConfig.social.twitter, icon: Twitter },
      { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
      { name: 'YouTube', href: siteConfig.social.youtube, icon: Youtube },
    ],
  };

  return (
    <footer className="bg-primary-900">
      {/* Newsletter Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 px-6 py-10 sm:py-16 sm:px-12 lg:p-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,207,255,0.1),transparent_50%)]" />
          <div className="relative">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Get repair updates
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-primary-100">
                  Sign up for our newsletter to receive expert tips and exclusive offers.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border-white/10 bg-white/5 px-5 py-3 placeholder-white/60 text-white focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center rounded-lg bg-accent-500 px-5 py-3 text-base font-medium text-white hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 transition-colors duration-200"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
                <p className="mt-3 text-sm text-primary-200">
                  We care about your data. Read our{' '}
                  <Link to="#" className="font-medium text-white underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="rounded-xl bg-accent-500/20 p-2">
                <LogoIcon className="h-8 w-8 text-accent-400 transition-transform duration-300 group-hover:rotate-180" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">{siteConfig.name}</p>
                <p className="text-sm text-primary-200">{siteConfig.description}</p>
              </div>
            </Link>
            <div className="space-y-4 text-primary-200">
              <div className="flex items-center gap-3 transition-colors hover:text-accent-400">
                <Phone className="h-5 w-5" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3 transition-colors hover:text-accent-400">
                <Mail className="h-5 w-5" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 transition-colors hover:text-accent-400">
                <MapPin className="h-5 w-5" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-primary-200 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-primary-200 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-primary-200 hover:text-white transition-colors duration-200">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="group flex items-center text-primary-200 hover:text-white transition-colors duration-200">
                        <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                        <span className="ml-3">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-800/50 pt-8">
          <p className="text-center text-base text-primary-200">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}