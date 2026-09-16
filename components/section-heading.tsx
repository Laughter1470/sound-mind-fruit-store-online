import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  link?: { label: string; href: string };
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  link,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between',
        centered && 'items-center text-center sm:flex-col sm:text-center',
        className
      )}
    >
      <div className={cn(centered && 'mx-auto max-w-2xl')}>
        <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
        )}
      </div>
      {link && (
        <Link
          href={link.href}
          className="group inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          {link.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
