import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

export interface BreadcrumbItem {
  name: string;
  url?: string;
  onClick?: () => void;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = '',
  showHomeIcon = true
}) => {
  if (!items || items.length === 0) return null;

  // Schema.org JSON-LD BreadcrumbList object
  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': item.name,
      ...(item.url
        ? { 'item': item.url.startsWith('http') ? item.url : `https://hevinycosmetics.com${item.url}` }
        : {})
    }))
  };

  return (
    <>
      {/* Schema.org JSON-LD for Google Rich Results & Google Search Console */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />

      {/* Semantic HTML5 & Microdata Breadcrumbs UI */}
      <nav
        aria-label="Breadcrumb"
        className={`py-2 text-xs font-sans select-none ${className}`}
      >
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center flex-wrap gap-1 text-neutral-500"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isCurrent = item.current || isLast;

            return (
              <li
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center gap-1"
              >
                {item.url && !isCurrent ? (
                  <a
                    itemProp="item"
                    href={item.url}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    className="hover:text-[#243330] hover:underline underline-offset-4 transition-colors flex items-center gap-1 font-medium text-neutral-600"
                  >
                    {index === 0 && showHomeIcon && (
                      <HomeIcon className="w-3.5 h-3.5 text-neutral-400 shrink-0" aria-hidden="true" />
                    )}
                    <span itemProp="name">{item.name}</span>
                  </a>
                ) : (
                  <span
                    itemProp="name"
                    className="text-[#243330] font-semibold truncate max-w-[220px] sm:max-w-md"
                    aria-current={isCurrent ? 'page' : undefined}
                  >
                    {item.name}
                  </span>
                )}
                
                <meta itemProp="position" content={String(index + 1)} />

                {!isLast && (
                  <ChevronRightIcon
                    className="w-3 h-3 text-neutral-300 shrink-0 mx-0.5"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
