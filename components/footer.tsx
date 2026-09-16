'use client';

import Link from 'next/link';
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footerLinks = {
  Shop: [
    { label: 'Fresh Fruits', href: '/shop?category=fruits' },
    { label: 'Dry Fruits', href: '/shop?category=dry-fruits' },
    { label: 'Seeds', href: '/shop?category=seeds' },
    { label: 'Nuts', href: '/shop?category=nuts' },
    { label: 'Soups', href: '/shop?category=soups' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Wishlist', href: '/wishlist' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/50">
      {/* Newsletter */}
      <div className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Stay Fresh with Our Newsletter
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get the latest updates on seasonal produce, special offers and new soup arrivals.
              </p>
            </div>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-5 w-5 text-primary" />
              </span>
              Nature's Harvest
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Fresh fruits, premium nuts, healthy seeds and delicious freshly prepared soups —
              delivered with care from our farm to your table.
            </p>
            <div className="mt-4 flex gap-2">
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="font-semibold text-foreground">Shop</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.Shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>+234 803 123 4567</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>hello@naturesharvest.ng</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>12 Farm Road, Lekki Phase 1, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nature's Harvest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
