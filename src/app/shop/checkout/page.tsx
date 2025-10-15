
'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Smartphone, ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatCurrency, generateOrderId, validatePhoneNumber } from '@/lib/utils';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { toast } from 'react-hot-toast';

const checkoutSchema = z.object({
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().refine(validatePhoneNumber, 'Please enter a valid Uganda phone number'),
  address: z.object({
    street: z.string().optional().or(z.literal('')),
    city: z.string().optional().or(z.literal('')),
    district: z.string().optional().or(z.literal('')),
    country: z.string().optional(),
  }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getCartTotal } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const subtotal = getCartTotal();
  const shipping = 0; // delivery is zero
  const total = subtotal + shipping; // no tax

  if (items.length === 0) {
    router.push('/shop/cart');
    return null;
  }

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);

    try {
      const orderId = generateOrderId();

      const itemsText = items
        .map(
          (item) =>
            `- ${item.product.name} x ${item.quantity} = ${formatCurrency(
              item.product.price * item.quantity
            )}`
        )
        .join('\n');

      const addressParts = [data.address?.street, data.address?.city, data.address?.district]
        .filter(Boolean)
        .join(', ');

      const message =
        `New Order Request (MTN Merchant)\n\n` +
        `Order ID: ${orderId}\n` +
        `Customer: ${data.firstName} ${data.lastName}\n` +
        `Phone: ${data.phone}\n` +
        (data.email ? `Email: ${data.email}\n` : '') +
        (addressParts ? `Delivery Address: ${addressParts}\n` : '') +
        `\nItems:\n${itemsText}\n\n` +
        `Subtotal: ${formatCurrency(subtotal)}\n` +
        `Delivery: ${formatCurrency(shipping)}\n` +
        `Total: ${formatCurrency(total)}\n\n` +
        `Payment Instructions: Pay to 665095 by dialing *165*3#\n` +
        `After payment, reply with your Transaction ID.`;

      const waNumber = '256751092016';
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');

      toast.success('Opening WhatsApp with your order details...');
    } catch (error) {
      console.error(error);
      toast.error('Could not open WhatsApp. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <button
          onClick={() => router.push('/shop/cart')}
          className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    {...register('firstName')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    {...register('lastName')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+256 700 000 000"
                    {...register('phone')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Delivery Address (optional)</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <input
                    {...register('address.street')}
                    placeholder="Enter your full address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      {...register('address.city')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                    <input
                      {...register('address.district')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment - MTN Merchant Code */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment (MTN Merchant Code)</h2>
              <div className="flex items-start p-4 border rounded-lg bg-green-50">
                <Smartphone className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium">MTN Merchant Code</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Pay to <span className="font-semibold">665095</span> by dialing{' '}
                    <span className="font-semibold">*165*3#</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Steps: Dial *165*3# → Merchant Code → Enter 665095 → Amount → Confirm
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    After payment, click &quot;Place Order&quot; below. We&apos;ll message you on WhatsApp to collect your
                    Transaction ID and arrange delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <LoadingSpinner size="sm" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Place Order - {formatCurrency(total)}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

            {/* Items */}
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">{item.quantity}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">{item.product.name}</h4>
                    <p className="text-sm text-gray-500">
                      {formatCurrency(item.product.price)} × {item.quantity}
                    </p>
                  </div>
                  <div className="text-sm font-medium">
                    {formatCurrency(item.product.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-6 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="font-medium">{formatCurrency(shipping)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-600">{formatCurrency(total)}</span>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No extra fees. Delivery is currently free.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/256751092016"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
