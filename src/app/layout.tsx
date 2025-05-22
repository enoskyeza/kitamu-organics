import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kitamu Natural Organics",
    description: `Kitamu Organics Limited champions circular, farmer‑managed natural regeneration through nature‑based 
    beekeeping in Northern Uganda. We work with over 4,000 households to bring you pure honey, cold‑pressed shea butter, 
    artisanal nut butters, honey wine, lemongrass oil, bee venom, and beeswax—quality, 
    eco‑friendly products delivered nationwide.`,
    keywords: [
        'Kitamu Organics',
        'beekeeping Uganda',
        'organic honey',
        'cold pressed shea butter',
        'sustainable agribusiness',
        'natural products',
        'local economic development'
    ],
    openGraph: {
        title: "Kitamu Natural Organics – Sustainable Beekeeping & Natural Products",
        description: "Pure honey, cold‑pressed shea butter, artisanal nut butters, honey wine and more—direct from 4,000+ Northern Uganda farmers.",
        url: "https://kitamunaturalorganics.com/",
        siteName: "Kitamu Organics",
        images: [
            {
                url: "https://kitamunaturalorganics.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Kitamu Natural Organics Products"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kitamu Organics – Eco‑Friendly Beekeeping & Products',
        description: 'Pure honey, shea butter, nut butters, honey wine and more from Northern Uganda.'
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
