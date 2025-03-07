import { useStore } from './store';
import type { Product, BlogPost, Service } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Universal Laptop Charger',
    price: 24.99,
    description: 'Compatible with most laptop brands. Includes multiple connectors.',
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
  },
  {
    id: '2',
    name: 'Premium Screen Protector',
    price: 9.99,
    description: '9H hardness tempered glass for maximum protection',
    imageUrl: 'https://images.unsplash.com/photo-1544866092-1935c5ef2a8f?auto=format&fit=crop&w=800&q=80',
    category: 'Protection',
  },
  {
    id: '3',
    name: 'Laptop Battery Pack',
    price: 49.99,
    description: 'High-capacity replacement battery for extended use',
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    category: 'Parts',
  },
  {
    id: '4',
    name: 'USB-C Hub',
    price: 29.99,
    description: 'Multi-port adapter with HDMI, USB, and card reader',
    imageUrl: 'https://images.unsplash.com/photo-1678911820864-e7a624ea15bc?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
  },
  {
    id: '5',
    name: 'Phone Case',
    price: 19.99,
    description: 'Durable protection with sleek design',
    imageUrl: 'https://images.unsplash.com/photo-1541877590-a229a2c77d1d?auto=format&fit=crop&w=800&q=80',
    category: 'Protection',
  },
  {
    id: '6',
    name: 'Laptop RAM Module',
    price: 39.99,
    description: '8GB DDR4 memory for improved performance',
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    category: 'Parts',
  },
  {
    id: '7',
    name: 'Wireless Mouse',
    price: 29.99,
    description: 'Ergonomic design with precision tracking',
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
  },
  {
    id: '8',
    name: 'SSD Drive 500GB',
    price: 89.99,
    description: 'High-speed solid state drive for faster performance',
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80',
    category: 'Parts',
  }
];

export const mockBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'How to Speed Up Your Slow Laptop',
    excerpt: 'Learn the essential steps to boost your laptop performance and get it running like new again.',
    content: 'Full article content about speeding up laptops with detailed steps and recommendations...',
    imageUrl: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e',
    category: 'Tips',
    createdAt: '2024-02-15T08:00:00.000Z',
  },
  {
    id: '2',
    title: 'Extend Your Phone Battery Life',
    excerpt: 'Discover proven techniques to maximize your phone battery life.',
    content: 'Comprehensive guide about battery optimization and maintenance...',
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586',
    category: 'Mobile',
    createdAt: '2024-02-10T10:30:00.000Z',
  },
  {
    id: '3',
    title: 'Common Laptop Screen Issues and Solutions',
    excerpt: 'Troubleshoot common laptop display problems with our comprehensive guide.',
    content: 'Detailed troubleshooting steps for various screen issues...',
    imageUrl: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33',
    category: 'Laptop',
    createdAt: '2024-02-05T15:45:00.000Z',
  },
  {
    id: '4',
    title: 'The Ultimate Guide to Phone Protection',
    excerpt: 'Everything you need to know about keeping your phone safe and secure.',
    content: 'Complete guide covering physical protection and digital security...',
    imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7',
    category: 'Mobile',
    createdAt: '2024-02-01T09:15:00.000Z',
  },
  {
    id: '5',
    title: 'Choosing the Right Laptop for Your Needs',
    excerpt: 'A comprehensive guide to selecting the perfect laptop for work, gaming, or casual use.',
    content: 'Detailed comparison of different laptop types and recommendations...',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    category: 'Laptop',
    createdAt: '2024-01-28T14:20:00.000Z',
  }
];

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Screen Repair',
    description: 'Professional screen replacement for phones and tablets.',
    price: 49.99,
    icon: 'Smartphone',
    category: 'phone',
  },
  {
    id: '2',
    name: 'Battery Replacement',
    description: 'Restore your device battery life with our premium battery replacement service.',
    price: 39.99,
    icon: 'Battery',
    category: 'phone',
  },
  {
    id: '3',
    name: 'Data Recovery',
    description: 'Lost important files? Our experts can help recover your valuable data.',
    price: 79.99,
    icon: 'HardDrive',
    category: 'laptop',
  },
  {
    id: '4',
    name: 'Virus Removal',
    description: 'Complete system scan and malware removal service.',
    price: 59.99,
    icon: 'Shield',
    category: 'laptop',
  },
  {
    id: '5',
    name: 'Water Damage Repair',
    description: 'Specialized treatment for water-damaged devices.',
    price: 89.99,
    icon: 'Droplets',
    category: 'phone',
  },
  {
    id: '6',
    name: 'Hardware Upgrade',
    description: 'Boost your device performance with hardware upgrades.',
    price: 99.99,
    icon: 'Cpu',
    category: 'laptop',
  }
];

export const mockContacts = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    message: 'Need help with my laptop screen repair.',
    createdAt: '2024-03-10T09:30:00.000Z',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    message: 'Interested in phone battery replacement service.',
    createdAt: '2024-03-09T15:45:00.000Z',
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike.wilson@example.com',
    message: 'Looking for a quote on data recovery service.',
    createdAt: '2024-03-08T11:20:00.000Z',
  },
  {
    id: '4',
    name: 'Emily Brown',
    email: 'emily.b@example.com',
    message: 'Need assistance with virus removal from my laptop.',
    createdAt: '2024-03-07T14:15:00.000Z',
  },
  {
    id: '5',
    name: 'David Lee',
    email: 'david.lee@example.com',
    message: 'Inquiry about hardware upgrade options for my laptop.',
    createdAt: '2024-03-06T10:00:00.000Z',
  }
];

export function initializeMockData() {
  const store = useStore.getState();
  
  // Clear existing data and set fresh mock data
  store.setProducts([]);
  store.setBlogs([]);
  store.setServices([]);
  store.setContacts([]);
  
  // Initialize with mock data
  store.setProducts(mockProducts);
  store.setBlogs(mockBlogs);
  store.setServices(mockServices);
  store.setContacts(mockContacts);
}