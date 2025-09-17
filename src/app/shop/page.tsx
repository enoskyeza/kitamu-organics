import {Suspense} from 'react';
import ShopClient from './ShopClient';
import PageHeader from "@/components/sections/PageHeader";

export default function ShopPage() {
    return (

        <section>
            <PageHeader
                title={"Kitamu Shop"}
                subtitle={"Discover our full range of fresh organic products"}
                breadcrumbs={[{label: 'Home', href: '/'}, {label: 'shop', href: '/shop'}]}
            />
            <Suspense fallback={<div className="p-10 text-center text-gray-600">Loading products...</div>}>
                <ShopClient/>
            </Suspense>
        </section>
    );
}
