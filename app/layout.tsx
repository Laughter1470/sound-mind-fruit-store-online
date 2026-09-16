import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { CartProvider } from '@/lib/cart-context';
import { WishlistProvider } from '@/lib/wishlist-context';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Nature\'s Harvest — Fresh Fruits, Nuts, Seeds & Soups',
  description:
    'Order fresh fruits, healthy seeds, dry fruits, premium nuts and delicious freshly prepared soups. Delivered fresh to your door.',
  openGraph: {
    title: 'Nature\'s Harvest — Fresh Fruits, Nuts, Seeds & Soups',
    description:
      'Order fresh fruits, healthy seeds, dry fruits, premium nuts and delicious freshly prepared soups. Delivered fresh to your door.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <WishlistProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
