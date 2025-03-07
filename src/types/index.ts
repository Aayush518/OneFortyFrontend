export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  createdAt: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  category?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface User {
  username: string;
  password: string;
}

export interface BusinessHours {
  day: string;
  openTime: string;
  closeTime: string;
  isOpen: boolean;
}

export interface EmergencyContact {
  name: string;
  phone: string;
  available: boolean;
  hours: string;
}