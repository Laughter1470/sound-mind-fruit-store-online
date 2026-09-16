'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 803 123 4567',
    href: 'tel:+2348031234567',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+234 803 123 4567',
    href: 'https://wa.me/2348031234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@naturesharvest.ng',
    href: 'mailto:hello@naturesharvest.ng',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: '12 Farm Road, Lekki Phase 1, Lagos, Nigeria',
    href: '#',
  },
];

const openingHours = [
  { day: 'Monday – Friday', hours: '8:00 AM – 7:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 6:00 PM' },
  { day: 'Sunday', hours: '10:00 AM – 4:00 PM' },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: 'Message sent!',
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
          Have a question about our products or your order? We're here to help. Reach out
          and we'll respond within 24 hours.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact info */}
        <div className="space-y-6 lg:col-span-1">
          {/* Contact cards */}
          <div className="space-y-3">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  <p className="text-sm font-medium text-foreground">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Opening hours */}
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-lg font-bold text-foreground">Opening Hours</h3>
            </div>
            <div className="mt-3 space-y-2 text-sm">
              {openingHours.map((item) => (
                <div key={item.day} className="flex justify-between">
                  <span className="text-muted-foreground">{item.day}</span>
                  <span className="font-medium text-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="overflow-hidden rounded-xl border border-border/60">
            <div className="relative flex h-48 items-center justify-center bg-muted">
              <div className="absolute inset-0 opacity-30">
                <div className="h-full w-full bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
              </div>
              <div className="z-10 flex flex-col items-center gap-2 text-muted-foreground">
                <MapPin className="h-8 w-8 text-primary" />
                <p className="text-sm font-medium">Lekki Phase 1, Lagos</p>
                <p className="text-xs">Google Maps placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <h2 className="font-serif text-xl font-bold text-foreground">Send Us a Message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+234 803 123 4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="What's this about?" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto" disabled={submitting}>
                  {submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
