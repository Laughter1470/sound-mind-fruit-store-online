import Link from 'next/link';
import {
  Truck,
  ShieldCheck,
  Leaf,
  HeartHandshake,
  ArrowRight,
  Star,
  Quote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CategoryCard } from '@/components/category-card';
import { ProductGrid } from '@/components/product-grid';
import { SectionHeading } from '@/components/section-heading';
import { StarRating } from '@/components/star-rating';
import {
  products,
  categories,
  getFeaturedProducts,
  getBestSellers,
  getProductsByCategory,
} from '@/lib/data';

const testimonials = [
  {
    name: 'Amara Okafor',
    location: 'Lekki, Lagos',
    rating: 5,
    text: 'The freshest produce I\'ve ever ordered online. The fruits were perfectly ripe and the egusi soup tasted homemade. Highly recommend!',
  },
  {
    name: 'Chidi Mensah',
    location: 'Victoria Island, Lagos',
    rating: 5,
    text: 'I order nuts and seeds every week for my family. The quality is consistently excellent and delivery is always on time. Nature\'s Harvest never disappoints.',
  },
  {
    name: 'Fatima Bello',
    location: 'Ikoyi, Lagos',
    rating: 4,
    text: 'The soups are absolutely delicious and save me so much time. The vegetable soup tastes just like my grandmother\'s recipe. Will keep ordering!',
  },
];

const features = [
  {
    icon: Leaf,
    title: 'Farm Fresh',
    description: 'Sourced daily from trusted local farms for maximum freshness.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day delivery across Lagos. Fresh to your door in hours.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description: 'Every product is hand-checked for quality before it leaves us.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted by Families',
    description: 'Over 10,000 happy customers and counting across Nigeria.',
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const bestSellers = getBestSellers();
  const fruits = getProductsByCategory('fruits');
  const seedsAndNuts = [...getProductsByCategory('seeds'), ...getProductsByCategory('nuts')].slice(0, 4);
  const soups = getProductsByCategory('soups');

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="animate-fade-up">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
                <Leaf className="mr-1.5 h-3.5 w-3.5" />
                Farm to Table, Delivered Fresh
              </Badge>
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Fresh. Natural.{' '}
                <span className="text-primary">Delicious.</span>
              </h1>
              <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
                Order fresh fruits, healthy seeds, premium dry fruits, nuts and delicious
                freshly prepared soups. Delivered with care, straight to your door.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full text-base">
                  <Link href="/shop">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full text-base">
                  <Link href="/shop?category=soups">Explore Soups</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-medium text-foreground">4.9/5</span>
                  <span>customer rating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Quality guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>Same-day delivery</span>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative animate-fade-in">
              <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl sm:aspect-[4/3] lg:aspect-square">
                <img
                  src="https://images.pexels.com/photos/12194256/pexels-photo-12194256.jpeg?auto=compress&cs=tinysrgb&h=900&w=900"
                  alt="Fresh fruits and produce"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -bottom-4 -left-2 rounded-2xl bg-card p-3 shadow-lg border border-border/60 sm:left-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Free Delivery</p>
                    <p className="text-xs text-muted-foreground">On orders over ₦25,000</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-1 rounded-2xl bg-card p-3 shadow-lg border border-border/60 sm:right-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                    <Leaf className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">100% Fresh</p>
                    <p className="text-xs text-muted-foreground">Daily sourced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          title="Shop by Category"
          subtitle="Find exactly what you need from our fresh selection"
          link={{ label: 'View all', href: '/shop' }}
        />
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              count={products.filter((p) => p.category === cat.id).length}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Products"
            subtitle="Handpicked favourites our customers love"
            link={{ label: 'Shop all', href: '/shop' }}
          />
          <div className="mt-6">
            <ProductGrid products={featured} />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          title="Best Sellers"
          subtitle="Our most popular products, loved by thousands"
          link={{ label: 'Shop all', href: '/shop' }}
        />
        <div className="mt-6">
          <ProductGrid products={bestSellers} />
        </div>
      </section>

      {/* Fresh Fruits */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Fresh Fruits"
            subtitle="Crisp, sweet and bursting with natural goodness"
            link={{ label: 'See all fruits', href: '/shop?category=fruits' }}
          />
          <div className="mt-6">
            <ProductGrid products={fruits} />
          </div>
        </div>
      </section>

      {/* Seeds & Nuts */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          title="Healthy Seeds & Nuts"
          subtitle="Nutrient-dense powerhouses for your daily wellness"
          link={{ label: 'See all seeds & nuts', href: '/shop?category=seeds' }}
        />
        <div className="mt-6">
          <ProductGrid products={seedsAndNuts} />
        </div>
      </section>

      {/* Soup Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Freshly Prepared Soups"
            subtitle="Authentic Nigerian soups, made fresh daily in our kitchen"
            link={{ label: 'See all soups', href: '/shop?category=soups' }}
          />
          <div className="mt-6">
            <ProductGrid products={soups} />
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary">
          <img
            src="https://images.pexels.com/photos/1334131/pexels-photo-1334131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Fresh produce"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="relative flex flex-col items-start gap-4 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Get Free Delivery on Orders Over ₦25,000
              </h2>
              <p className="mt-2 text-sm text-white/80 sm:text-base">
                Stock up on your favourite fresh fruits, nuts and soups. Free same-day
                delivery across Lagos when you spend ₦25,000 or more.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="rounded-full text-base shrink-0">
              <Link href="/shop">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We're committed to bringing you the freshest, healthiest food"
          centered
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border/60 bg-card p-6 text-center transition-all hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Real stories from real customers across Lagos"
            centered
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{t.text}</p>
                <div className="mt-4 border-t border-border/60 pt-4">
                  <StarRating rating={t.rating} size="md" />
                  <p className="mt-2 font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
