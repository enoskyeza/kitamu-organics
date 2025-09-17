'use client';

import React from 'react';
import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string; // if omitted, item is treated as the current page
};

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  /** Tailwind gradient classes override (optional). Keep default for brand consistency */
  gradientClass?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  gradientClass = 'from-green-800 to-green-900',
}: PageHeaderProps) {
  const lastIndex = breadcrumbs.length - 1;

  return (
    <header className={`bg-gradient-to-br ${gradientClass} py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + Subtitle */}
        <div className="text-center">
          <h1 className="thm-page-title text-white text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">{subtitle}</p>
          )}

          {/* Breadcrumb (moved below subtitle, centered, plain links with separators) */}
          <nav className="text-sm text-white/80" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-0">
              {breadcrumbs.map((crumb, i) => {
                const isLast = i === lastIndex;
                return (
                  <li key={`${crumb.label}-${i}`} className="flex items-center">
                    {crumb.href && !isLast ? (
                      <Link href={crumb.href} className="hover:underline transition-colors duration-150">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current={isLast ? 'page' : undefined} className="font-medium">
                        {crumb.label}
                      </span>
                    )}

                    {/* Separator (don't show after last) */}
                    {!isLast && (
                      <span className="mx-3 text-white/60">{'>'}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
}

/*
Usage (example):

<PageHeader
  title="Our Story"
  subtitle="Empowering communities through nature — how we grew from a small bee farm to a thriving social enterprise."
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
/>

Notes:
- Breadcrumb is now centered below the subtitle and rendered as plain links separated by '/'.
- You can still override the gradient via `gradientClass`.
*/