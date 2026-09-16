'use client';

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductGrid } from '@/components/product-grid';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { products, categories } from '@/lib/data';
import type { Category } from '@/lib/types';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'name', label: 'Alphabetical' },
];

const priceRanges = [
  { label: 'Under ₦2,000', min: 0, max: 2000 },
  { label: '₦2,000 - ₦5,000', min: 2000, max: 5000 },
  { label: '₦5,000 - ₦10,000', min: 5000, max: 10000 },
  { label: 'Over ₦10,000', min: 10000, max: Infinity },
];

const ITEMS_PER_PAGE = 8;

export default function ShopPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = (searchParams.get('category') as Category | null) || null;
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    initialCategory ? [initialCategory] : []
  );
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [priceRange, setPriceRange] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    const cat = (searchParams.get('category') as Category | null) || null;
    const search = searchParams.get('search') || '';
    setSelectedCategories(cat ? [cat] : []);
    setSearchQuery(search);
  }, [searchParams]);

  const toggleCategory = (cat: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery('');
    setPriceRange(null);
    setSortBy('featured');
    router.push('/shop');
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (priceRange !== null) {
      const range = priceRanges[priceRange];
      result = result.filter((p) => {
        const price = p.basePrice * p.sizes[0].priceMultiplier;
        return price >= range.min && price < range.max;
      });
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case 'price-high':
        result.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [selectedCategories, searchQuery, priceRange, sortBy]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;
  const activeFilterCount =
    selectedCategories.length + (searchQuery ? 1 : 0) + (priceRange !== null ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={cn(
                'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors',
                selectedCategories.includes(cat.id)
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'text-foreground/70 hover:bg-muted'
              )}
            >
              <span
                className={cn(
                  'flex h-4 w-4 items-center justify-center rounded border',
                  selectedCategories.includes(cat.id)
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-input'
                )}
              >
                {selectedCategories.includes(cat.id) && (
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPriceRange(priceRange === idx ? null : idx);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              className={cn(
                'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors',
                priceRange === idx
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'text-foreground/70 hover:bg-muted'
              )}
            >
              <span
                className={cn(
                  'flex h-4 w-4 items-center justify-center rounded-full border',
                  priceRange === idx ? 'border-primary bg-primary' : 'border-input'
                )}
              >
                {priceRange === idx && <span className="h-2 w-2 rounded-full bg-primary-foreground" />}
              </span>
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <Button variant="outline" className="w-full" onClick={clearFilters}>
          Clear all filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-serif text-3xl font-bold text-foreground">Shop</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      {/* Search bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setVisibleCount(ITEMS_PER_PAGE);
          }}
          className="relative flex-1"
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(ITEMS_PER_PAGE);
            }}
            className="pl-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </form>

        {/* Sort */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SlidersHorizontal className="mr-2 h-4 w-4 text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Mobile filter button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge className="ml-2 bg-primary text-primary-foreground">{activeFilterCount}</Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetTitle className="mb-4 text-lg font-bold">Filters</SheetTitle>
            <FilterContent />
            <SheetClose asChild>
              <Button className="mt-4 w-full">Show results</Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-xl border border-border/60 bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-foreground">Filters</h2>
              {activeFilterCount > 0 && (
                <button onClick={clearFilters} className="text-xs text-primary hover:underline">
                  Clear all
                </button>
              )}
            </div>
            <FilterContent />
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          {/* Active filter badges */}
          {activeFilterCount > 0 && (
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {selectedCategories.map((cat) => {
                const info = categories.find((c) => c.id === cat);
                return (
                  <Badge key={cat} variant="secondary" className="gap-1">
                    {info?.name}
                    <button onClick={() => toggleCategory(cat)} className="ml-1">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                );
              })}
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery('')} className="ml-1">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {priceRange !== null && (
                <Badge variant="secondary" className="gap-1">
                  {priceRanges[priceRange].label}
                  <button onClick={() => setPriceRange(null)} className="ml-1">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}

          {visibleProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20 text-center">
              <Search className="h-12 w-12 text-muted-foreground/40" />
              <h3 className="mt-4 font-serif text-lg font-bold text-foreground">No products found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your filters or search terms.
              </p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          ) : (
            <>
              <ProductGrid products={visibleProducts} />
              {hasMore && (
                <div className="mt-8 text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                  >
                    Load More Products
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
