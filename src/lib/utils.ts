import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-UG').format(num);
}

export function calculateTax(subtotal: number): number {
  return Math.round(subtotal * 0.18); // 18% VAT in Uganda
}

export function calculateShipping(subtotal: number, district: string = 'kampala'): number {
  if (subtotal >= 50000) return 0; // Free shipping over 50k
  
  const shippingRates: Record<string, number> = {
    kampala: 5000,
    wakiso: 7000,
    mukono: 8000,
    entebbe: 6000,
    jinja: 12000,
    default: 10000
  };
  
  return shippingRates[district.toLowerCase()] || shippingRates.default;
}

export function generateOrderId(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `ORD-${timestamp}-${random}`;
}

export function validatePhoneNumber(phone: string): boolean {
  // Uganda phone number validation (starts with +256 or 0, followed by 9 digits)
  const ugandaPhoneRegex = /^(\+256|0)[7-9]\d{8}$/;
  return ugandaPhoneRegex.test(phone.replace(/\s/g, ''));
}

export function formatPhoneNumber(phone: string): string {
  // Format to +256 format
  const cleaned = phone.replace(/\s/g, '');
  if (cleaned.startsWith('0')) {
    return '+256' + cleaned.substring(1);
  }
  return cleaned.startsWith('+256') ? cleaned : `+256${cleaned}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}