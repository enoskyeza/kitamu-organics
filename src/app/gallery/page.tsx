'use client';

import * as React from 'react';
import Image from 'next/image';
import PageHeader from "@/components/sections/PageHeader";

type Category =
  | 'Beekeeping'
  | 'Products'
  | 'Production'
  | 'Community'
  | 'Nature'
  | 'Brand'
  | 'Events';

type GalleryItem = {
  id: string;
  fileId: string;      // Google Drive file ID
  title: string;
  category: Category;
  alt?: string;
};


/** Build a direct image URL from a Google Drive fileId.
 * Uses googleusercontent CDN and supports simple sizing.
 */
// Prefer googleusercontent; fall back to Drive "uc" and "thumbnail"
const srcCandidates = (id: string, size = 1600) => [
  `https://lh3.googleusercontent.com/u/0/d/${id}=w${size}`,
  `https://lh3.googleusercontent.com/d/${id}=w${size}`,
  `https://drive.google.com/uc?export=view&id=${id}`,
  `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`,
];

// Drop-in component with fallbacks
function GDriveImg({
  id,
  alt,
  size = 1600,
  className = '',
}: { id: string; alt: string; size?: number; className?: string }) {
  const [i, setI] = React.useState(0);
  const urls = React.useMemo(() => srcCandidates(id, size), [id, size]);

  // Provide a reasonable intrinsic size for optimization; layout will scale via CSS
  const width = size;
  const height = Math.round(size * 0.66);

  return (
    <Image
      src={urls[i]}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      referrerPolicy="no-referrer"
      onError={() => setI((v) => (v + 1 < urls.length ? v + 1 : v))}
      className={className}
    />
  );
}


// const driveImg = (fileId: string, size: number = 1600) =>
//   `https://lh3.googleusercontent.com/d/${fileId}=w${size}`;

// const driveImg = (fileId: string, size: number = 1600) =>
//   `https://drive.google.com/file/d/${fileId}/view`;

const FOLDER_ID = '1UmE35oo6Xwcxj5aoGhlFwgMOduvUVB0F'; // Kitamu folder (for the "View on Drive" link only)

/** --- EDIT ME: paste your real file IDs and categories --- */
const ITEMS: GalleryItem[] = [
  // Example entries — replace REPLACE_ME with real Drive file IDs
  { id: 'honey-jar-1', fileId: '18qBm-3ZMYRTgH0cr_8Out8CIx7ML9Y8y', title: 'Kitamu Shop', category: 'Products', alt: 'Jar of raw honey 250g on a wooden table' },
  { id: 'honey-jar-2', fileId: '1GHs_R2w9cWEQHEnWy4iNjjWeeS4qYvCs', title: 'Sheer Butter Catalogue', category: 'Products', alt: '500g jar of honey with label' },
  { id: 'comb-close', fileId: '1jE74WW_AIk0bWN0DA1v6x0hIxRd4B8Jw', title: 'Beehives Close-up', category: 'Beekeeping', alt: 'Macro shot of honeycomb' },
  { id: 'beekeeper-field', fileId: '1alQkaqCtpalLhOguF9nES3KlU1p0_HJs', title: 'Beekeeping in the Field', category: 'Beekeeping', alt: 'Beekeeper tending to hive in green field' },
  { id: 'brand-shot', fileId: '1k7jBrogvGmPXeDhFM_E7MkkNwBYHkqUy', title: 'Brand Flatlay', category: 'Brand', alt: 'Kitamu brand items laid out' },
  { id: 'wild-flowers', fileId: '1RiXJCOcKN-O8vKJR6_IHzNgzXmOX1pGf', title: 'Hive inspection', category: 'Nature', alt: 'Wild flowers near apiary' },
  { id: 'production-bottling', fileId: '1VsBeZ22CIkE2kYYsoQ4NU0X4BpdhAVbr', title: 'Bottling Line', category: 'Production', alt: 'Bottling process of honey' },
  { id: 'market-stand', fileId: '1thVRfhPHLHlMfu7shPqlWhpzTSmaCLf6', title: 'Market Display', category: 'Events', alt: 'Kitamu products at a local market stand' },
  { id: 'event-stall', fileId: '1NzK92U2NTDeGvcsxBRVf8Tm94ijZw1WT', title: 'Community Event Stall', category: 'Events', alt: 'Event stall with banner' },
  { id: 'gift-pack', fileId: '1UsRlxxQnCgLtcec6UxphTaCdLR2oijhM', title: 'Gift Pack', category: 'Products', alt: 'Gift pack of assorted Kitamu products' },
];


/** Utility to compute category counts */
const getCategoryCounts = (items: GalleryItem[]) =>
  items.reduce<Record<string, number>>((acc, it) => {
    acc[it.category] = (acc[it.category] || 0) + 1;
    return acc;
  }, {});

export default function KitamuGalleryPage() {
  const [active, setActive] = React.useState<'All' | Category>('All');
  const [lightbox, setLightbox] = React.useState<GalleryItem | null>(null);

  const categories = React.useMemo(() => {
    const unique = Array.from(new Set(ITEMS.map(i => i.category))) as Category[];
    return ['All' as const, ...unique];
  }, []);

  const counts = React.useMemo(() => getCategoryCounts(ITEMS), []);
  const filtered = React.useMemo(
    () => (active === 'All' ? ITEMS : ITEMS.filter(i => i.category === active)),
    [active]
  );

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <PageHeader
          title={"Kitamu Natural Organics — Gallery"}
          subtitle={"A curated look at our beekeeping journey, products, and community moments."}
      />
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map(cat => {
              const isActive = active === cat;
              const count = cat === 'All'
                ? ITEMS.length
                : counts[String(cat)] || 0;

              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={[
                    "px-3.5 py-2 rounded-full border text-sm transition",
                    isActive
                      ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-amber-300 hover:text-amber-700"
                  ].join(' ')}
                  aria-pressed={isActive}
                >
                  {cat} <span className="ml-1 text-[11px] opacity-70">({count})</span>
                </button>
              );
            })}
            <a
              href={`https://drive.google.com/drive/folders/${FOLDER_ID}?usp=sharing`}
              target="_blank"
              className="ml-auto text-sm text-amber-700 hover:text-amber-800 underline underline-offset-4"
              rel="noreferrer"
            >
              View all on Google Drive
            </a>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-neutral-300 bg-white p-10 text-center text-neutral-600">
            No images in this category yet.
          </div>
        ) : (
          <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {filtered.map(item => (
              <figure
                key={item.id}
                className="mb-4 break-inside-avoid rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden group"
              >
                {/* Use <img> for zero-config. You can switch to next/image later. */}
                <GDriveImg id={item.fileId} alt={item.alt || item.title} className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]" />

                <figcaption className="p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-medium text-neutral-900">{item.title}</h3>
                      <p className="text-xs text-neutral-500">{item.category}</p>
                    </div>
                    <button
                      onClick={() => setLightbox(item)}
                      className="shrink-0 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 hover:border-amber-300 hover:text-amber-700"
                    >
                      View
                    </button>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-neutral-950/50 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900 hover:bg-white"
              aria-label="Close"
            >
              Close
            </button>
            {/*<GDriveImg id={item.fileId} alt={item.alt || item.title} className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]" />*/}

            {/*<img*/}
            {/*  src={driveImg(lightbox.fileId, 2400)}*/}
            {/*  alt={lightbox.alt || lightbox.title}*/}
            {/*  className="w-full h-auto rounded-xl"*/}
            {/*/>*/}
            <div className="px-2 pt-3 pb-1 text-white/90">
              <div className="text-sm font-medium">{lightbox.title}</div>
              <div className="text-xs opacity-80">{lightbox.category}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
