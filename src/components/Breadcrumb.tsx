import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bhairavainvisiblegrills.in/' },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href ? { item: `https://bhairavainvisiblegrills.in${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="flex items-center gap-1.5 text-xs lg:text-sm" aria-label="Breadcrumb">
        <Link to="/" className="text-primary hover:underline flex items-center gap-1">
          <Home className="w-3 h-3 lg:w-4 lg:h-4" /> Home
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 text-primary/50" />
            {item.href ? (
              <Link
                to={item.href}
                className="text-primary hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primary/70">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
