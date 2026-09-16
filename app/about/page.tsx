import Link from 'next/link';
import { Leaf, Heart, ShieldCheck, Truck, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';

const values = [
  {
    icon: Leaf,
    title: 'Freshness First',
    description: 'We source our produce daily from trusted local farms. Everything arrives fresh — never sitting in warehouses for days.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    description: 'Every product is hand-checked by our team before it leaves us. If it\'s not good enough for our families, it\'s not good enough for yours.',
  },
  {
    icon: Heart,
    title: 'Made with Care',
    description: 'Our soups are prepared fresh daily in our kitchen using traditional recipes and the finest ingredients, just like home cooking.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'We deliver across Lagos with same-day options available. Your order arrives carefully packed and ready to enjoy.',
  },
];

const stats = [
  { value: '10,000+', label: 'Happy Customers' },
  { value: '50+', label: 'Products Available' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '3 yrs', label: 'Serving Lagos' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <Button variant="ghost" className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
                <Leaf className="mr-1.5 h-4 w-4" />
                Our Story
              </Button>
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Bringing Fresh, Natural Food to Every Nigerian Home
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Nature's Harvest was born from a simple belief: everyone deserves access to
                fresh, high-quality food without the hassle. What started as a small stall at
                a local market has grown into a trusted online store serving thousands of
                families across Lagos.
              </p>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                We partner directly with local farmers and source the finest nuts, seeds and
                dry fruits to bring you nature's best — delivered fresh to your door.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/10873329/pexels-photo-10873329.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Fresh produce"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-card p-6 text-center transition-all hover:shadow-md"
            >
              <p className="font-serif text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/5677795/pexels-photo-5677795.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Fresh fruits and vegetables"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-base text-muted-foreground">
                We believe that eating fresh, healthy food shouldn't be complicated or
                expensive. Our mission is to make quality produce, nuts, seeds and
                traditional soups accessible to every household — with the convenience of
                online ordering and the reliability of same-day delivery.
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                By working directly with local farmers, we ensure fair prices for growers and
                the freshest possible produce for you. It's a win-win that keeps our community
                healthy and our farmers thriving.
              </p>
              <Button asChild size="lg" className="mt-6 rounded-full">
                <Link href="/shop">
                  Shop Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          title="What We Stand For"
          subtitle="The values that guide everything we do"
          centered
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border/60 bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-center sm:p-12">
          <div className="relative">
            <Users className="mx-auto h-12 w-12 text-white/80" />
            <h2 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
              Join Thousands of Happy Customers
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/80 sm:text-base">
              Experience the freshness and quality that keeps families coming back. Your next
              healthy meal is just a click away.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-6 rounded-full">
              <Link href="/shop">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
