export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  fragranceNotes?: string[];
  ingredients?: string[];
  burnTime?: string;
  weight?: string;
  stock: number;
  sku: string;
  additionalImages?: string[];
  addtionalImages?: string[]; // Handle typo in some products
}

export interface NavLink {
  path: string;
  label: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface Fragrance {
  id: string;
  name: string;
  description: string;
  mood: string;
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
  image: string;
}

export interface CustomOrder {
  fragrance: string;
  size: string;
  container: string;
  label: string;
  quantity: number;
  specialInstructions: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'customer';
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  shippingAddress: Address;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  status: string;
  clientSecret: string;
}