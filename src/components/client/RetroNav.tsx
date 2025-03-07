import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, ChevronRight, Clock } from 'lucide-react';
import { useStore } from '@/lib/store';
import * as Icons from 'lucide-react';
import { format } from 'date-fns';

export default function RetroNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const siteConfig = useStore((state) => state.siteConfig);
  const isBusinessOpen = useStore((state) => state.isBusinessOpen);
  const getActiveEmergencyContact = useStore((state) => state.getActiveEmergencyContact);

  // Dynamically get the icon component
  const LogoIcon = Icons[siteConfig.logo as keyof typeof Icons];
  const emergencyContact = getActiveEmergencyContact();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Business Hours Status Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 py-1 text-center text-sm font-medium transition-colors ${
        isBusinessOpen() 
          ? 'bg-green-500/10 text-green-700' 
          : 'bg-red-500/10 text-red-700'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Clock className="h-4 w-4" />
          <span>
            {isBusinessOpen() 
              ? "We're Open! Welcome to OneFourty" 
              : emergencyContact 
                ? `We're closed. For emergencies call ${emergencyContact.phone}`
                : "We're currently closed. See you soon!"}
          </span>
        </div>
      </div>

      <motion.header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-2 bg-white shadow-lg'
            : 'py-4 bg-white/80 backdrop-blur-md border-b border-gray-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                  isScrolled 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'bg-primary-50 text-primary-600'
                }`}>
                  <LogoIcon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-180" />
                </div>
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-50"
                  style={{
                    background: 'radial-gradient(circle, rgba(12,159,255,0.2) 0%, rgba(12,159,255,0) 70%)'
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-gray-900">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-gray-600">
                  {siteConfig.description}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-1 text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? 'text-primary-600' 
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                      layoutId="underline"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Emergency Repair Button */}
            {emergencyContact && (
              <div className="hidden lg:block">
                <a
                  href={`tel:${emergencyContact.phone}`}
                  className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Emergency Repair</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            initial="closed"
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, height: "auto" },
              closed: { opacity: 0, height: 0 }
            }}
          >
            <div className="mt-4 py-4 bg-white rounded-2xl shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {emergencyContact && (
                <a
                  href={`tel:${emergencyContact.phone}`}
                  className="mt-2 mx-4 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Emergency Repair
                </a>
              )}
            </div>
          </motion.div>
        </nav>
      </motion.header>
    </>
  );
}