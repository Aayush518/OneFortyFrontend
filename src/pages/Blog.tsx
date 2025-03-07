import { useState } from 'react';
import { Search, Calendar, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { useStore } from '../lib/store';
import { motion } from 'framer-motion';

export default function Blog() {
  const blogs = useStore((state) => state.blogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'Tips', name: 'Tech Tips', icon: Tag },
    { id: 'Mobile', name: 'Mobile', icon: Tag },
    { id: 'Laptop', name: 'Laptop', icon: Tag },
    { id: 'News', name: 'Tech News', icon: Tag },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Tech Repair Insights
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-xl text-gray-200"
            >
              Expert tips, industry news, and comprehensive guides to help you understand and maintain your devices.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="sticky top-16 z-10 bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {filteredBlogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-gray-100 p-6">
              <BookOpen className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">No articles found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary-800 shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={blog.createdAt}>
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="mt-3 text-gray-600 line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={() => alert('Full article coming soon!')}
                      className="group/btn inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
                    >
                      <span className="font-medium">Read More</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-800/90" />
            <div className="relative">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Stay Updated with Tech Insights
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                  Subscribe to our newsletter for expert advice, industry news, and exclusive repair guides delivered to your inbox.
                </p>
                <div className="mt-10">
                  <form className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder-gray-300 backdrop-blur-sm ring-1 ring-white/20 focus:ring-2 focus:ring-white sm:w-72"
                    />
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Newsletter signup coming soon!');
                      }}
                      className="w-full rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="mt-4 text-sm text-gray-300">
                    We care about your data. Read our{' '}
                    <a href="#" className="font-medium text-white underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}