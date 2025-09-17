import { Suspense } from 'react';
import CheckoutSuccess from "@/app/shop/checkout/success/SuccessPage";
export default function CheckoutSuccessPage() {
  return (
      <Suspense fallback={<div className="p-10 text-center text-gray-600">Loading...</div>}>
        <CheckoutSuccess />
      </Suspense>
  );
}