import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { format } from 'date-fns';
import type { 
  Product, 
  BlogPost, 
  Service, 
  ContactSubmission, 
  User, 
  BusinessHours,
  EmergencyContact 
} from '../types';

interface StoreState {
  // Site Configuration
  siteConfig: {
    name: string;
    logo: string;
    description: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
    social: {
      facebook: string;
      twitter: string;
      instagram: string;
      youtube: string;
    };
  };
  // Data
  products: Product[];
  blogs: BlogPost[];
  services: Service[];
  contacts: ContactSubmission[];
  user: User | null;
  isAuthenticated: boolean;
  businessHours: BusinessHours[];
  emergencyContacts: EmergencyContact[];
  forceBusinessStatus: 'default' | 'open' | 'closed';
  stats: {
    totalProducts: number;
    totalServices: number;
    totalInquiries: number;
    activeUsers: number;
    revenue: {
      current: number;
      previous: number;
    };
    serviceRequests: {
      current: number;
      previous: number;
    };
  };
  location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
    country: string;
  };

  // Actions
  setSiteConfig: (config: StoreState['siteConfig']) => void;
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Product) => void;
  deleteProduct: (id: string) => void;
  setBlogs: (blogs: BlogPost[]) => void;
  addBlog: (blog: BlogPost) => void;
  updateBlog: (id: string, blog: BlogPost) => void;
  deleteBlog: (id: string) => void;
  setServices: (services: Service[]) => void;
  addService: (service: Service) => void;
  updateService: (id: string, service: Service) => void;
  deleteService: (id: string) => void;
  addContact: (contact: ContactSubmission) => void;
  setContacts: (contacts: ContactSubmission[]) => void;
  deleteContact: (id: string) => void;
  updateStats: (stats: Partial<StoreState['stats']>) => void;
  setBusinessHours: (hours: BusinessHours[]) => void;
  updateBusinessHours: (day: string, data: Partial<BusinessHours>) => void;
  setEmergencyContacts: (contacts: EmergencyContact[]) => void;
  updateEmergencyContact: (index: number, contact: EmergencyContact) => void;
  setForceBusinessStatus: (status: StoreState['forceBusinessStatus']) => void;
  isBusinessOpen: () => boolean;
  getActiveEmergencyContact: () => EmergencyContact | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const defaultBusinessHours: BusinessHours[] = [
  { day: 'Monday', openTime: '09:00', closeTime: '18:00', isOpen: true },
  { day: 'Tuesday', openTime: '09:00', closeTime: '18:00', isOpen: true },
  { day: 'Wednesday', openTime: '09:00', closeTime: '18:00', isOpen: true },
  { day: 'Thursday', openTime: '09:00', closeTime: '18:00', isOpen: true },
  { day: 'Friday', openTime: '09:00', closeTime: '18:00', isOpen: true },
  { day: 'Saturday', openTime: '10:00', closeTime: '16:00', isOpen: true },
  { day: 'Sunday', openTime: '00:00', closeTime: '00:00', isOpen: false },
];

const defaultEmergencyContacts: EmergencyContact[] = [
  {
    name: 'Emergency Tech Support',
    phone: '+1 (234) 567-8900',
    available: true,
    hours: '24/7',
  },
  {
    name: 'After Hours Support',
    phone: '+1 (234) 567-8901',
    available: true,
    hours: '18:00 - 09:00',
  },
];

const defaultSiteConfig = {
  name: 'OneFourty',
  logo: 'Wrench',
  description: 'Expert Device Repair',
  contact: {
    email: 'support@onefourty.com',
    phone: '+1 (234) 567-8900',
    address: '123 Repair Street, NY 10001',
  },
  social: {
    facebook: 'https://facebook.com/onefourty',
    twitter: 'https://twitter.com/onefourty',
    instagram: 'https://instagram.com/onefourty',
    youtube: 'https://youtube.com/onefourty',
  },
};

const defaultUser: User = {
  username: 'admin',
  password: '1234',
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Initial State
      siteConfig: defaultSiteConfig,
      products: [],
      blogs: [],
      services: [],
      contacts: [],
      user: null,
      isAuthenticated: false,
      businessHours: defaultBusinessHours,
      emergencyContacts: defaultEmergencyContacts,
      forceBusinessStatus: 'default',
      stats: {
        totalProducts: 0,
        totalServices: 0,
        totalInquiries: 0,
        activeUsers: 573,
        revenue: {
          current: 25000,
          previous: 21000,
        },
        serviceRequests: {
          current: 89,
          previous: 76,
        },
      },
      location: {
        lat: 27.695144369983282,
        lng: 85.37248781038323,
        address: '123 Repair Street',
        city: 'New York',
        country: 'United States',
      },

      // Actions with optimistic updates
      setSiteConfig: (config) => set({ siteConfig: config }),
      setProducts: (products) => set({ products }),
      addProduct: (product) =>
        set((state) => {
          const newProducts = [...state.products, product];
          return {
            products: newProducts,
            stats: {
              ...state.stats,
              totalProducts: newProducts.length,
            },
          };
        }),
      updateProduct: (id, product) =>
        set((state) => ({
          products: state.products.map((p) => (p.id === id ? product : p)),
        })),
      deleteProduct: (id) =>
        set((state) => {
          const newProducts = state.products.filter((p) => p.id !== id);
          return {
            products: newProducts,
            stats: {
              ...state.stats,
              totalProducts: newProducts.length,
            },
          };
        }),
      setBlogs: (blogs) => set({ blogs }),
      addBlog: (blog) =>
        set((state) => ({
          blogs: [...state.blogs, blog],
        })),
      updateBlog: (id, blog) =>
        set((state) => ({
          blogs: state.blogs.map((b) => (b.id === id ? blog : b)),
        })),
      deleteBlog: (id) =>
        set((state) => ({
          blogs: state.blogs.filter((b) => b.id !== id),
        })),
      setServices: (services) => set({ services }),
      addService: (service) =>
        set((state) => {
          const newServices = [...state.services, service];
          return {
            services: newServices,
            stats: {
              ...state.stats,
              totalServices: newServices.length,
            },
          };
        }),
      updateService: (id, service) =>
        set((state) => ({
          services: state.services.map((s) => (s.id === id ? service : s)),
        })),
      deleteService: (id) =>
        set((state) => {
          const newServices = state.services.filter((s) => s.id !== id);
          return {
            services: newServices,
            stats: {
              ...state.stats,
              totalServices: newServices.length,
            },
          };
        }),
      addContact: (contact) =>
        set((state) => {
          const newContacts = [...state.contacts, contact];
          return {
            contacts: newContacts,
            stats: {
              ...state.stats,
              totalInquiries: newContacts.length,
            },
          };
        }),
      setContacts: (contacts) => set({ contacts }),
      deleteContact: (id) =>
        set((state) => {
          const newContacts = state.contacts.filter((c) => c.id !== id);
          return {
            contacts: newContacts,
            stats: {
              ...state.stats,
              totalInquiries: newContacts.length,
            },
          };
        }),
      updateStats: (newStats) =>
        set((state) => ({
          stats: { ...state.stats, ...newStats },
        })),
      setBusinessHours: (hours) => set({ businessHours: hours }),
      updateBusinessHours: (day, data) =>
        set((state) => ({
          businessHours: state.businessHours.map((h) =>
            h.day === day ? { ...h, ...data } : h
          ),
        })),
      setEmergencyContacts: (contacts) => set({ emergencyContacts: contacts }),
      updateEmergencyContact: (index, contact) =>
        set((state) => ({
          emergencyContacts: state.emergencyContacts.map((c, i) =>
            i === index ? contact : c
          ),
        })),
      setForceBusinessStatus: (status) => set({ forceBusinessStatus: status }),
      isBusinessOpen: () => {
        const state = get();
        
        // Check if there's an admin override
        if (state.forceBusinessStatus !== 'default') {
          return state.forceBusinessStatus === 'open';
        }
        
        const now = new Date();
        const currentDay = format(now, 'EEEE');
        const currentTime = format(now, 'HH:mm');
        
        const todayHours = state.businessHours.find((h) => h.day === currentDay);
        if (!todayHours || !todayHours.isOpen) return false;
        
        return currentTime >= todayHours.openTime && currentTime <= todayHours.closeTime;
      },
      getActiveEmergencyContact: () => {
        const state = get();
        return state.emergencyContacts.find((c) => c.available) || null;
      },
      login: (username, password) => {
        if (username === defaultUser.username && password === defaultUser.password) {
          set({ user: defaultUser, isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'repair-shop-storage',
      storage: createJSONStorage(() => localStorage),
      version: 1,
      partialize: (state) => ({
        products: state.products,
        blogs: state.blogs,
        services: state.services,
        contacts: state.contacts,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        siteConfig: state.siteConfig,
        stats: state.stats,
        businessHours: state.businessHours,
        emergencyContacts: state.emergencyContacts,
        location: state.location,
        forceBusinessStatus: state.forceBusinessStatus,
      }),
    }
  )
);