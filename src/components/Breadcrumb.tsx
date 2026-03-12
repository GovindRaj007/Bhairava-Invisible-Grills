import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  /** If set, navigates to this path and scrolls to #services with this category active */
  serviceCategorySlug?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const navigate = useNavigate();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://morsafe.in/' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `https://morsafe.in${item.href}` } : {}),
      })),
    ],
  };

  const handleClick = (item: BreadcrumbItem, e: React.MouseEvent) => {
    if (item.serviceCategorySlug) {
      e.preventDefault();
      // Store the category slug so the services section can read it
      sessionStorage.setItem('activeServiceCategory', item.serviceCategorySlug);
      navigate('/#services');
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="flex items-center gap-1.5 text-xs" aria-label="Breadcrumb">
        <Link to="/" className="text-primary hover:underline flex items-center gap-1">
          <Home className="w-3 h-3" /> Home
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-primary/50" />
            {item.href ? (
              <Link
                to={item.href}
                onClick={(e) => handleClick(item, e)}
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
