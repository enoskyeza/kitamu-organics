import type { Product, ProductCategory, Promotion } from '@/types';

export const categories: ProductCategory[] = [
      {
    id: 1,
    slug: 'honey',
    name: 'Honey',
    image: '/categories/honey.jpg',
    description: 'Pure, raw, and natural honey straight from the hive.',
  },
  {
    id: 2,
    slug: 'shea',
    name: 'Shea Butter',
    image: '/categories/shea.jpg',
    description: 'Nourishing shea butter for skin and hair care.',
  },
  {
    id: 3,
    slug: 'odii',
    name: 'Kitamu Odii',
    image: '/categories/odii.jpg',
    description: 'Rich, locally made groundnut paste blends.',
  },
  {
    id: 4,
    slug: 'oil',
    name: 'Essential Oils',
    image: '/categories/oils.jpg',
    description: 'Therapeutic oils for relaxation and wellness.',
  },
  {
    id: 5,
    name: 'Fresh Fruits',
    slug: 'fruits',
    description: 'Organic seasonal fruits',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg'
  },
  {
    id: 6,
    name: 'Vegetables',
    slug: 'vegetables',
    description: 'Farm-fresh organic vegetables',
    image: 'https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg'
  },
  {
    id: 7,
    name: 'Grains & Cereals',
    slug: 'grains',
    description: 'Organic grains and cereals',
    image: 'https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg'
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Raw Honey 1L',
    description: 'Unprocessed, natural honey harvested from Ugandan apiaries.',
    price: 15000,
    originalPrice: 17000,
    image: '/products/honey-jar.jpg',
    images: ['/products/honey-jar.jpg'],
    category: categories.find(c => c.slug === 'honey')!,
    inStock: true,
    stockQuantity: 40,
    rating: 4.8,
    reviewCount: 38,
    isOrganic: true,
    origin: 'Luwero, Uganda',
    weight: '1L',
    featured: true,
    nutritionalInfo: {
      calories: 304,
      protein: 0.3,
      carbs: 82.4,
      fat: 0,
      fiber: 0.2,
      vitamins: ['Vitamin C', 'Calcium', 'Iron']
    }
  },
  {
    id: '2',
    name: 'Raw Honey 20L',
    description: 'Bulk supply of raw organic honey ideal for commercial or long-term use.',
    price: 180000,
    originalPrice: 190000,
    image: '/products/jerrycan.png',
    images: ['/products/jerrycan.png'],
    category: categories.find(c => c.slug === 'honey')!,
    inStock: true,
    stockQuantity: 15,
    rating: 4.9,
    reviewCount: 12,
    isOrganic: true,
    origin: 'Luwero, Uganda',
    weight: '20L',
    featured: false,
    nutritionalInfo: {
      calories: 304,
      protein: 0.3,
      carbs: 82.4,
      fat: 0,
      fiber: 0.2,
      vitamins: ['Vitamin C', 'Calcium', 'Iron']
    }
  },
  {
    id: '3',
    name: 'Shea Butter 500g',
    description: 'Rich, unrefined shea butter ideal for moisturizing skin and hair.',
    price: 12050,
    originalPrice: 14000,
    image: '/products/shea.png',
    images: ['/products/shea.png'],
    category: categories.find(c => c.slug === 'shea')!,
    inStock: true,
    stockQuantity: 30,
    rating: 4.7,
    reviewCount: 18,
    isOrganic: true,
    origin: 'Northern Uganda',
    weight: '500g',
    featured: true,
    nutritionalInfo: {
      calories: 884,
      protein: 0,
      carbs: 0,
      fat: 100,
      fiber: 0,
      vitamins: ['Vitamin A', 'Vitamin E']
    }
  },
  {
    id: '4',
    name: 'Shea Butter 1kg',
    description: 'Premium shea butter in large quantity, great for skincare routines.',
    price: 20000,
    originalPrice: 22000,
    image: '/products/shea-butter.jpg',
    images: ['/products/shea-butter.jpg'],
    category: categories.find(c => c.slug === 'shea')!,
    inStock: true,
    stockQuantity: 20,
    rating: 4.6,
    reviewCount: 9,
    isOrganic: true,
    origin: 'Northern Uganda',
    weight: '1kg',
    featured: false,
    nutritionalInfo: {
      calories: 884,
      protein: 0,
      carbs: 0,
      fat: 100,
      fiber: 0,
      vitamins: ['Vitamin A', 'Vitamin E']
    }
  },
  {
    id: '5',
    name: 'Kitamu Odii 250g',
    description: 'Locally made peanut paste perfect for traditional dishes.',
    price: 10000,
    originalPrice: 11000,
    image: '/products/odii.png',
    images: ['/products/odii.png'],
    category: categories.find(c => c.slug === 'odii')!,
    inStock: true,
    stockQuantity: 50,
    rating: 4.4,
    reviewCount: 25,
    isOrganic: true,
    origin: 'Arua, Uganda',
    weight: '250g',
    featured: false,
    nutritionalInfo: {
      calories: 589,
      protein: 25,
      carbs: 20,
      fat: 50,
      fiber: 6,
      vitamins: ['Vitamin B3', 'Vitamin E']
    }
  },
  {
    id: '6',
    name: 'Kitamu Odii Mix 500g',
    description: 'Groundnut paste blend mixed with sesame and spices for rich taste.',
    price: 16000,
    originalPrice: 17000,
    image: '/products/odii-mix.jpg',
    images: ['/products/odii-mix.jpg'],
    category: categories.find(c => c.slug === 'odii')!,
    inStock: true,
    stockQuantity: 40,
    rating: 4.5,
    reviewCount: 14,
    isOrganic: true,
    origin: 'Nebbi, Uganda',
    weight: '500g',
    featured: true,
    nutritionalInfo: {
      calories: 610,
      protein: 22,
      carbs: 18,
      fat: 52,
      fiber: 5,
      vitamins: ['Vitamin B6', 'Magnesium']
    }
  },
  {
    id: '7',
    name: 'Lemongrass Oil 100ml',
    description: 'Refreshing essential oil for aromatherapy and massage.',
    price: 18000,
    originalPrice: 20000,
    image: '/products/lemongrass-oil.jpg',
    images: ['/products/lemongrass-oil.jpg'],
    category: categories.find(c => c.slug === 'oil')!,
    inStock: true,
    stockQuantity: 25,
    rating: 4.6,
    reviewCount: 17,
    isOrganic: true,
    origin: 'Mityana, Uganda',
    weight: '100ml',
    featured: false,
    nutritionalInfo: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      vitamins: ['Citral', 'Geraniol']
    }
  },
  {
    id: '8',
    name: 'Lemongrass Oil 50ml',
    description: 'Soothing lemongrass essential oil, great for calming and freshness.',
    price: 10000,
    originalPrice: 12000,
    image: '/products/lemongrass.png',
    images: ['/products/lemongrass.png'],
    category: categories.find(c => c.slug === 'oil')!,
    inStock: true,
    stockQuantity: 30,
    rating: 4.3,
    reviewCount: 11,
    isOrganic: true,
    origin: 'Mityana, Uganda',
    weight: '50ml',
    featured: true,
    nutritionalInfo: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      vitamins: ['Citral', 'Geraniol']
    }
  },
];

export const promotions: Promotion[] = [
  {
    id: '1',
    title: 'Fresh Fruits Weekend Sale',
    description: 'Get 20% off on all organic fruits this weekend!',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
    discount: 20,
    validUntil: new Date('2024-12-31'),
    isActive: true
  },
  {
    id: '2',
    title: 'Free Delivery on Orders Over UGX 50,000',
    description: 'Enjoy free delivery within Kampala for orders above UGX 50,000',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg',
    discount: 0,
    validUntil: new Date('2024-12-31'),
    isActive: true
  }
];


