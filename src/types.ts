
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: ProductCategory;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  isOrganic: boolean;
  origin: string;
  weight: string;
  nutritionalInfo?: NutritionalInfo;
  featured?: boolean;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  vitamins?: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address?: Address;
  orders: Order[];
  createdAt: Date;
}

export interface Address {
  id: string;
  street: string;
  city: string;
  district: string;
  country: string;
  postalCode?: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  shippingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
export type PaymentMethod = 'mtn_mobile_money' | 'airtel_money' | 'card' | 'google_pay';

export interface CheckoutData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: {
    street: string;
    city: string;
    district: string;
    country?: string;
  };
  paymentMethod: PaymentMethod;
  mobileMoneyNumber?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: number;
  validUntil: Date;
  isActive: boolean;
}