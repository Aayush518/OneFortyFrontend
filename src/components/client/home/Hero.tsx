import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Clock, Shield, ChevronRight, Star, PenTool as Tool } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,207,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,92,31,0.1),transparent_50%)]" />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#0077e61a 1px, transparent 1px),
              linear-gradient(90deg, #0077e61a 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100"
            >
              <Star className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Rated 5 Stars by Our Customers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-gray-900 mt-6 sm:mt-8"
            >
              Expert Device Repair
              <span className="block mt-2 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
                Fast & Professional
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600"
            >
              Professional repair services with same-day solutions for your devices.
              Expert technicians, genuine parts, and lifetime warranty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary-600 text-white font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                Explore Services
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                { icon: Tool, title: 'Expert Techs', subtitle: 'Certified Professionals' },
                { icon: Clock, title: 'Quick Service', subtitle: 'Same Day Available' },
                { icon: Shield, title: 'Lifetime Warranty', subtitle: '100% Guaranteed' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="group flex items-center p-4 rounded-2xl bg-white shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="shrink-0">
                    <div className="p-2.5 rounded-xl bg-primary-50 text-primary-600 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-12 grid-rows-12 gap-4">
              <div className="col-span-8 row-span-8 relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80"
                  alt="Professional repair"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
              <div className="col-span-4 row-span-4 col-start-9 row-start-3 relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80"
                  alt="Device repair"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="col-span-4 row-span-4 col-start-9 row-start-7 relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=400&q=80"
                  alt="Phone repair"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="absolute left-4 -bottom-4 grid grid-cols-2 gap-3 w-2/3">
              {[
                ['15+', 'Years Experience'],
                ['50K+', 'Repairs Done'],
                ['100%', 'Success Rate'],
                ['24/7', 'Support'],
              ].map(([stat, label]) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="p-4 rounded-xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-primary-600">{stat}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 gap-3 lg:hidden mt-8"
          >
            {[
              ['15+', 'Years Experience'],
              ['50K+', 'Repairs Done'],
              ['100%', 'Success Rate'],
              ['24/7', 'Support'],
            ].map(([stat, label]) => (
              <motion.div
                key={label}
                className="p-4 rounded-xl bg-white shadow-lg border border-gray-100"
              >
                <div className="text-xl font-bold text-primary-600">{stat}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}