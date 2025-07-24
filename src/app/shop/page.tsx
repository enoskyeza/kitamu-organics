import { Suspense } from 'react';
import ShopClient from './ShopClient';

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-600">Loading products...</div>}>
      <ShopClient />
    </Suspense>
  );
}
