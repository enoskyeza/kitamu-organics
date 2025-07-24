'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Package, Truck, ArrowRight } from 'lucide-react';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get('orderId');
    if (!id) {
      router.push('/');
      return;
    }
    setOrderId(id);
  }, [searchParams, router]);

  if (!orderId) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your order. We've received your payment and will start processing your order shortly.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Order Number:</span>
              <div className="font-semibold text-gray-900">{orderId}</div>
            </div>
            <div>
              <span className="text-gray-600">Estimated Delivery:</span>
              <div className="font-semibold text-gray-900">
                {new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString('en-UG', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What happens next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Order Processing</h3>
              <p className="text-sm text-gray-600">
                We'll prepare your organic products with care
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Out for Delivery</h3>
              <p className="text-sm text-gray-600">
                Your order will be on its way to you
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivered</h3>
              <p className="text-sm text-gray-600">
                Enjoy your fresh organic products!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-green-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">Questions about your order?</h3>
          <p className="text-gray-600 mb-4">
            Our customer service team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
            <span>📞 +256 700 123 456</span>
            <span>✉️ hello@organicug.com</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/products"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            Continue Shopping
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="/dashboard/orders"
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Track Order
          </Link>
        </div>
      </div>
    </div>
  );
}