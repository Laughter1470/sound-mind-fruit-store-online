import type { CategoryInfo, Product, SizeOption } from './types';

export const categories: CategoryInfo[] = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    slug: 'fruits',
    description: 'Hand-picked seasonal fruits, delivered fresh from farm to table.',
    image:
      'https://images.pexels.com/photos/12194256/pexels-photo-12194256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Apple',
  },
  {
    id: 'dry-fruits',
    name: 'Dry Fruits',
    slug: 'dry-fruits',
    description: 'Naturally dried fruits with no added sugar — pure sweetness.',
    image:
      'https://images.pexels.com/photos/18435590/pexels-photo-18435590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Citrus',
  },
  {
    id: 'seeds',
    name: 'Seeds',
    slug: 'seeds',
    description: 'Nutrient-packed seeds for snacking, baking and smoothies.',
    image:
      'https://images.pexels.com/photos/34623198/pexels-photo-34623198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Sprout',
  },
  {
    id: 'nuts',
    name: 'Nuts',
    slug: 'nuts',
    description: 'Premium quality nuts, roasted and raw for every taste.',
    image:
      'https://images.pexels.com/photos/37180553/pexels-photo-37180553.png?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Nut',
  },
  {
    id: 'soups',
    name: 'Soups',
    slug: 'soups',
    description: 'Freshly prepared traditional soups, sold by volume.',
    image:
      'https://images.pexels.com/photos/17696680/pexels-photo-17696680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Soup',
  },
];

const weightSizes: SizeOption[] = [
  { label: '250g', value: '250g', priceMultiplier: 1 },
  { label: '500g', value: '500g', priceMultiplier: 1.85 },
  { label: '1kg', value: '1kg', priceMultiplier: 3.5 },
];

const volumeSizes: SizeOption[] = [
  { label: '1 Litre', value: '1l', priceMultiplier: 1 },
  { label: '2 Litres', value: '2l', priceMultiplier: 1.9 },
  { label: '5 Litres', value: '5l', priceMultiplier: 4.5 },
];

const reviewTemplates = (name: string, rating: number, comment: string) => ({
  id: Math.random().toString(36).substring(7),
  name,
  rating,
  date: '2025-08-15',
  comment,
});

export const products: Product[] = [
  // Fresh Fruits
  {
    id: 'fresh-apples',
    name: 'Fresh Apples',
    slug: 'fresh-apples',
    category: 'fruits',
    shortDescription: 'Crisp, juicy apples straight from the orchard.',
    description:
      'Our fresh apples are hand-picked at peak ripeness from trusted local orchards. Each apple is crisp, sweet and bursting with natural flavour. Perfect for snacking, baking or adding to your favourite smoothies. Rich in fibre, vitamin C and antioxidants.',
    basePrice: 1500,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/3746517/pexels-photo-3746517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/3746517/pexels-photo-3746517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9541084/pexels-photo-9541084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14456110/pexels-photo-14456110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.8,
    reviewCount: 124,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    origin: 'Local farms, Plateau State',
    storage: 'Refrigerate or store in a cool, dry place',
    nutrition: {
      servingSize: '1 medium apple (182g)',
      calories: '95 kcal',
      nutrients: [
        { label: 'Fibre', value: '4.4g' },
        { label: 'Vitamin C', value: '14% DV' },
        { label: 'Potassium', value: '195mg' },
        { label: 'Sugar', value: '19g' },
      ],
    },
    reviews: [
      reviewTemplates('Ada Okafor', 5, 'The apples were so fresh and crunchy! Will definitely order again.'),
      reviewTemplates('Chidi Eze', 4, 'Good quality apples, arrived quickly and well packaged.'),
    ],
  },
  {
    id: 'oranges',
    name: 'Oranges',
    slug: 'oranges',
    category: 'fruits',
    shortDescription: 'Sweet, juicy oranges packed with vitamin C.',
    description:
      'Sun-ripened oranges bursting with sweet juice and natural citrus flavour. These oranges are perfect for fresh juice, snacking or adding a zesty kick to your meals. Each orange is rich in vitamin C, folate and potassium.',
    basePrice: 1200,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/37543950/pexels-photo-37543950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/37543950/pexels-photo-37543950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17975562/pexels-photo-17975562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/35810222/pexels-photo-35810222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.7,
    reviewCount: 89,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    origin: 'Benue State',
    storage: 'Store at room temperature or refrigerate',
    nutrition: {
      servingSize: '1 medium orange (131g)',
      calories: '62 kcal',
      nutrients: [
        { label: 'Vitamin C', value: '92% DV' },
        { label: 'Fibre', value: '3.1g' },
        { label: 'Folate', value: '14% DV' },
        { label: 'Sugar', value: '12g' },
      ],
    },
    reviews: [
      reviewTemplates('Ngozi Obi', 5, 'Super juicy and sweet. Made the best fresh juice with these!'),
      reviewTemplates('Emeka Nwosu', 4, 'Fresh and good value for money.'),
    ],
  },
  {
    id: 'bananas',
    name: 'Bananas',
    slug: 'bananas',
    category: 'fruits',
    shortDescription: 'Ripe, sweet bananas — nature\'s energy snack.',
    description:
      'Perfectly ripened bananas that are naturally sweet and creamy. Great for a quick energy boost, smoothies, baking or simply enjoying on their own. Rich in potassium, vitamin B6 and dietary fibre.',
    basePrice: 800,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/16829200/pexels-photo-16829200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/16829200/pexels-photo-16829200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.6,
    reviewCount: 67,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    origin: 'Ogun State',
    storage: 'Store at room temperature',
    nutrition: {
      servingSize: '1 medium banana (118g)',
      calories: '105 kcal',
      nutrients: [
        { label: 'Potassium', value: '422mg' },
        { label: 'Vitamin B6', value: '20% DV' },
        { label: 'Fibre', value: '3.1g' },
        { label: 'Sugar', value: '14g' },
      ],
    },
    reviews: [
      reviewTemplates('Funke Adebayo', 5, 'Perfectly ripe and sweet. My kids love them!'),
    ],
  },
  {
    id: 'pineapple',
    name: 'Pineapple',
    slug: 'pineapple',
    category: 'fruits',
    shortDescription: 'Tropical, golden-sweet pineapple bursting with flavour.',
    description:
      'Fresh tropical pineapple with golden, juicy flesh and a delightfully sweet-tart flavour. Perfect for fruit salads, smoothies, grilling or enjoying fresh. Contains bromelain, an enzyme that aids digestion, plus plenty of vitamin C and manganese.',
    basePrice: 2000,
    unit: 'per fruit',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/4412924/pexels-photo-4412924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/4412924/pexels-photo-4412924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/15554362/pexels-photo-15554362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.9,
    reviewCount: 52,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    origin: 'Cross River State',
    storage: 'Refrigerate after cutting',
    nutrition: {
      servingSize: '1 cup chunks (165g)',
      calories: '82 kcal',
      nutrients: [
        { label: 'Vitamin C', value: '131% DV' },
        { label: 'Manganese', value: '76% DV' },
        { label: 'Fibre', value: '2.3g' },
        { label: 'Sugar', value: '16g' },
      ],
    },
    reviews: [
      reviewTemplates('Tunde Bello', 5, 'So sweet and juicy! Tastes like it was just picked from the farm.'),
    ],
  },
  {
    id: 'watermelon',
    name: 'Watermelon',
    slug: 'watermelon',
    category: 'fruits',
    shortDescription: 'Refreshing, hydrating watermelon — perfect for hot days.',
    description:
      'Crisp, refreshing watermelon with deep red, sweet flesh. This hydrating fruit is over 90% water, making it the perfect treat for hot weather. Rich in lycopene, vitamin C and vitamin A. Great for fruit salads, juices or snacking.',
    basePrice: 1800,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/8743922/pexels-photo-8743922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/8743922/pexels-photo-8743922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7284760/pexels-photo-7284760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.5,
    reviewCount: 38,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    origin: 'Local farms',
    storage: 'Refrigerate after cutting',
    nutrition: {
      servingSize: '1 cup (152g)',
      calories: '46 kcal',
      nutrients: [
        { label: 'Vitamin C', value: '21% DV' },
        { label: 'Vitamin A', value: '18% DV' },
        { label: 'Lycopene', value: 'High' },
        { label: 'Water', value: '92%' },
      ],
    },
    reviews: [
      reviewTemplates('Bola Ahmed', 4, 'Sweet and refreshing. Great for the hot weather!'),
    ],
  },

  // Dry Fruits
  {
    id: 'dates',
    name: 'Premium Dates',
    slug: 'dates',
    category: 'dry-fruits',
    shortDescription: 'Soft, naturally sweet dates — nature\'s caramel.',
    description:
      'Premium quality dates that are soft, chewy and naturally sweet. These dates are perfect for snacking, baking or adding natural sweetness to smoothies and desserts. Rich in fibre, potassium and natural sugars for a healthy energy boost.',
    basePrice: 3500,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/18435590/pexels-photo-18435590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/18435590/pexels-photo-18435590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/30709483/pexels-photo-30709483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.9,
    reviewCount: 95,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    origin: 'Imported',
    storage: 'Store in an airtight container in a cool place',
    nutrition: {
      servingSize: '100g (about 7 dates)',
      calories: '277 kcal',
      nutrients: [
        { label: 'Fibre', value: '6.7g' },
        { label: 'Potassium', value: '696mg' },
        { label: 'Sugar', value: '63g' },
        { label: 'Magnesium', value: '54mg' },
      ],
    },
    reviews: [
      reviewTemplates('Aisha Mohammed', 5, 'Best dates I\'ve had in a long time. So soft and sweet!'),
      reviewTemplates('Yusuf Ali', 4, 'Good quality, well packaged and fresh.'),
    ],
  },
  {
    id: 'raisins',
    name: 'Raisins',
    slug: 'raisins',
    category: 'dry-fruits',
    shortDescription: 'Sun-dried raisins, naturally sweet and chewy.',
    description:
      'Sun-dried raisins that are plump, chewy and naturally sweet. Perfect for baking, snacking, or adding to cereals and trail mixes. A great source of iron, potassium and dietary fibre.',
    basePrice: 2800,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/8992915/pexels-photo-8992915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/8992915/pexels-photo-8992915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.6,
    reviewCount: 42,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    origin: 'Imported',
    storage: 'Store in an airtight container',
    nutrition: {
      servingSize: '100g',
      calories: '299 kcal',
      nutrients: [
        { label: 'Fibre', value: '3.7g' },
        { label: 'Iron', value: '15% DV' },
        { label: 'Potassium', value: '749mg' },
        { label: 'Sugar', value: '59g' },
      ],
    },
    reviews: [
      reviewTemplates('Grace Okoro', 4, 'Good quality raisins, perfect for my baking.'),
    ],
  },
  {
    id: 'dried-mango',
    name: 'Dried Mango',
    slug: 'dried-mango',
    category: 'dry-fruits',
    shortDescription: 'Tropical dried mango strips, sweet and tangy.',
    description:
      'Sweet and tangy dried mango strips that capture the tropical flavour of fresh mangoes. These are naturally dried with no added sugar, preserving their vibrant taste and nutritional value. Rich in vitamin A, vitamin C and dietary fibre.',
    basePrice: 3200,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/8995296/pexels-photo-8995296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/8995296/pexels-photo-8995296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.7,
    reviewCount: 31,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    origin: 'Imported',
    storage: 'Store in an airtight container',
    nutrition: {
      servingSize: '100g',
      calories: '314 kcal',
      nutrients: [
        { label: 'Vitamin A', value: '25% DV' },
        { label: 'Vitamin C', value: '60% DV' },
        { label: 'Fibre', value: '2.4g' },
        { label: 'Sugar', value: '49g' },
      ],
    },
    reviews: [
      reviewTemplates('Ifeoma Chukwu', 5, 'Love the chewy texture and tropical taste. Not too sweet!'),
    ],
  },
  {
    id: 'dried-banana',
    name: 'Dried Banana Chips',
    slug: 'dried-banana',
    category: 'dry-fruits',
    shortDescription: 'Crunchy banana chips, a perfect healthy snack.',
    description:
      'Crunchy dried banana chips that make a delicious and satisfying snack. These banana chips retain the natural sweetness of ripe bananas with a satisfying crunch. Great for snacking, trail mixes or topping your morning cereal.',
    basePrice: 2500,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/30622220/pexels-photo-30622220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/30622220/pexels-photo-30622220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.4,
    reviewCount: 28,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    origin: 'Local',
    storage: 'Store in an airtight container',
    nutrition: {
      servingSize: '100g',
      calories: '346 kcal',
      nutrients: [
        { label: 'Potassium', value: '536mg' },
        { label: 'Fibre', value: '3.9g' },
        { label: 'Vitamin B6', value: '28% DV' },
        { label: 'Sugar', value: '47g' },
      ],
    },
    reviews: [
      reviewTemplates('David Ojo', 4, 'Crunchy and tasty. Good healthy snack option.'),
    ],
  },

  // Seeds
  {
    id: 'sunflower-seeds',
    name: 'Sunflower Seeds',
    slug: 'sunflower-seeds',
    category: 'seeds',
    shortDescription: 'Nutrient-rich sunflower seeds, great for snacking.',
    description:
      'Fresh sunflower seeds that are rich in vitamin E, magnesium and healthy fats. Perfect for snacking, adding to salads, or sprinkling over your favourite dishes. These seeds are carefully cleaned and packed for maximum freshness.',
    basePrice: 2000,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/19282822/pexels-photo-19282822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/19282822/pexels-photo-19282822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/18686055/pexels-photo-18686055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.5,
    reviewCount: 36,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    origin: 'Local farms',
    storage: 'Store in an airtight container in a cool place',
    nutrition: {
      servingSize: '100g',
      calories: '584 kcal',
      nutrients: [
        { label: 'Vitamin E', value: '166% DV' },
        { label: 'Magnesium', value: '81% DV' },
        { label: 'Protein', value: '21g' },
        { label: 'Healthy Fats', value: '51g' },
      ],
    },
    reviews: [
      reviewTemplates('Patricia Eze', 4, 'Good quality seeds. Fresh and well cleaned.'),
    ],
  },
  {
    id: 'pumpkin-seeds',
    name: 'Pumpkin Seeds',
    slug: 'pumpkin-seeds',
    category: 'seeds',
    shortDescription: 'Protein-packed pumpkin seeds with a rich, nutty flavour.',
    description:
      'Premium pumpkin seeds (pepitas) with a rich, nutty flavour and satisfying crunch. These seeds are an excellent source of protein, magnesium, zinc and healthy fats. Perfect for snacking, baking or adding to salads and soups.',
    basePrice: 2200,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/34623198/pexels-photo-34623198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/34623198/pexels-photo-34623198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.7,
    reviewCount: 44,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    origin: 'Local farms',
    storage: 'Store in an airtight container',
    nutrition: {
      servingSize: '100g',
      calories: '559 kcal',
      nutrients: [
        { label: 'Protein', value: '30g' },
        { label: 'Magnesium', value: '156% DV' },
        { label: 'Zinc', value: '70% DV' },
        { label: 'Iron', value: '33% DV' },
      ],
    },
    reviews: [
      reviewTemplates('Samuel Adeyemi', 5, 'Excellent quality. I add them to my smoothies every morning.'),
      reviewTemplates('Mary Onuoha', 4, 'Fresh and crunchy. Good value.'),
    ],
  },
  {
    id: 'chia-seeds',
    name: 'Chia Seeds',
    slug: 'chia-seeds',
    category: 'seeds',
    shortDescription: 'Superfood chia seeds, rich in omega-3 and fibre.',
    description:
      'Nutrient-dense chia seeds packed with omega-3 fatty acids, fibre, protein and antioxidants. These tiny superfood seeds absorb liquid to form a gel-like texture, making them perfect for puddings, smoothies and baking. A complete protein source containing all nine essential amino acids.',
    basePrice: 4000,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/1114205/pexels-photo-1114205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/1114205/pexels-photo-1114205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.8,
    reviewCount: 57,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    origin: 'Imported',
    storage: 'Store in an airtight container in a cool, dry place',
    nutrition: {
      servingSize: '100g',
      calories: '486 kcal',
      nutrients: [
        { label: 'Omega-3', value: '17.5g' },
        { label: 'Fibre', value: '34g' },
        { label: 'Protein', value: '17g' },
        { label: 'Calcium', value: '63% DV' },
      ],
    },
    reviews: [
      reviewTemplates('Joy Ezeala', 5, 'Great quality chia seeds. Perfect for my overnight oats!'),
      reviewTemplates('Michael Obi', 4, 'Good product. Packaging could be better but seeds are fresh.'),
    ],
  },
  {
    id: 'sesame-seeds',
    name: 'Sesame Seeds',
    slug: 'sesame-seeds',
    category: 'seeds',
    shortDescription: 'Aromatic sesame seeds for cooking and baking.',
    description:
      'Clean, premium sesame seeds with a delicate nutty flavour and satisfying crunch. These versatile seeds are perfect for baking bread, making tahini, sprinkling over stir-fries or adding to salads. Rich in calcium, copper and healthy fats.',
    basePrice: 2500,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/7439731/pexels-photo-7439731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/7439731/pexels-photo-7439731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.5,
    reviewCount: 23,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    origin: 'Local farms',
    storage: 'Store in an airtight container',
    nutrition: {
      servingSize: '100g',
      calories: '573 kcal',
      nutrients: [
        { label: 'Calcium', value: '98% DV' },
        { label: 'Copper', value: '163% DV' },
        { label: 'Protein', value: '18g' },
        { label: 'Healthy Fats', value: '50g' },
      ],
    },
    reviews: [
      reviewTemplates('Esther Okon', 4, 'Good quality seeds. Use them for baking all the time.'),
    ],
  },

  // Nuts
  {
    id: 'cashews',
    name: 'Cashews',
    slug: 'cashews',
    category: 'nuts',
    shortDescription: 'Creamy, premium cashews — buttery and delicious.',
    description:
      'Premium grade cashew nuts that are creamy, buttery and delightfully crunchy. These cashews are carefully sourced and processed to maintain their premium quality. Rich in healthy fats, protein, copper and magnesium. Perfect for snacking or cooking.',
    basePrice: 5000,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/37180553/pexels-photo-37180553.png?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/37180553/pexels-photo-37180553.png?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.9,
    reviewCount: 112,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    origin: 'Oyo State',
    storage: 'Store in an airtight container in a cool place',
    nutrition: {
      servingSize: '100g',
      calories: '553 kcal',
      nutrients: [
        { label: 'Healthy Fats', value: '44g' },
        { label: 'Protein', value: '18g' },
        { label: 'Copper', value: '110% DV' },
        { label: 'Magnesium', value: '73% DV' },
      ],
    },
    reviews: [
      reviewTemplates('Kunle Odunsi', 5, 'Fresh, creamy and delicious. Best cashews I\'ve bought online!'),
      reviewTemplates('Hauwa Bello', 5, 'Excellent quality. Well packaged and very fresh.'),
      reviewTemplates('Femi Ajayi', 4, 'Good cashews, though a bit pricey. Quality is great though.'),
    ],
  },
  {
    id: 'almonds',
    name: 'Almonds',
    slug: 'almonds',
    category: 'nuts',
    shortDescription: 'Crunchy almonds packed with protein and vitamin E.',
    description:
      'Premium quality almonds that are crunchy, fresh and full of flavour. These almonds are an excellent source of protein, healthy fats, vitamin E and magnesium. Perfect for snacking, baking or adding to your morning smoothie bowl.',
    basePrice: 5500,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.8,
    reviewCount: 78,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    origin: 'Imported',
    storage: 'Store in an airtight container in a cool place',
    nutrition: {
      servingSize: '100g',
      calories: '579 kcal',
      nutrients: [
        { label: 'Protein', value: '21g' },
        { label: 'Vitamin E', value: '132% DV' },
        { label: 'Magnesium', value: '67% DV' },
        { label: 'Healthy Fats', value: '50g' },
      ],
    },
    reviews: [
      reviewTemplates('Lola Martins', 5, 'Fresh and crunchy. Great for my daily snack.'),
    ],
  },
  {
    id: 'peanuts',
    name: 'Roasted Peanuts',
    slug: 'peanuts',
    category: 'nuts',
    shortDescription: 'Freshly roasted peanuts, crunchy and savoury.',
    description:
      'Freshly roasted peanuts with a satisfying crunch and rich, savoury flavour. These peanuts are a great source of plant-based protein, healthy fats and various vitamins and minerals. Perfect for snacking, cooking or making homemade peanut butter.',
    basePrice: 1800,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/39289748/pexels-photo-39289748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/39289748/pexels-photo-39289748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.6,
    reviewCount: 65,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    origin: 'Kano State',
    storage: 'Store in an airtight container',
    nutrition: {
      servingSize: '100g',
      calories: '567 kcal',
      nutrients: [
        { label: 'Protein', value: '26g' },
        { label: 'Healthy Fats', value: '49g' },
        { label: 'Folate', value: '60% DV' },
        { label: 'Niacin', value: '85% DV' },
      ],
    },
    reviews: [
      reviewTemplates('Ibrahim Sani', 5, 'Freshly roasted and perfectly crunchy. Great value!'),
    ],
  },
  {
    id: 'walnuts',
    name: 'Walnuts',
    slug: 'walnuts',
    category: 'nuts',
    shortDescription: 'Brain-boosting walnuts, rich in omega-3.',
    description:
      'Premium walnuts with a rich, earthy flavour and satisfying crunch. These walnuts are an excellent source of plant-based omega-3 fatty acids, making them a brain-boosting superfood. Perfect for snacking, baking or adding to salads and cereals.',
    basePrice: 6000,
    unit: 'per kg',
    sizes: weightSizes,
    image:
      'https://images.pexels.com/photos/37309469/pexels-photo-37309469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/37309469/pexels-photo-37309469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8705561/pexels-photo-8705561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.7,
    reviewCount: 41,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    origin: 'Imported',
    storage: 'Store in an airtight container in a cool place',
    nutrition: {
      servingSize: '100g',
      calories: '654 kcal',
      nutrients: [
        { label: 'Omega-3', value: '9.1g' },
        { label: 'Protein', value: '15g' },
        { label: 'Magnesium', value: '45% DV' },
        { label: 'Antioxidants', value: 'Very High' },
      ],
    },
    reviews: [
      reviewTemplates('Chioma Nwankwo', 5, 'Fresh walnuts, not bitter at all. Great quality!'),
    ],
  },

  // Soups
  {
    id: 'egusi-soup',
    name: 'Egusi Soup',
    slug: 'egusi-soup',
    category: 'soups',
    shortDescription: 'Rich, hearty melon seed soup — a Nigerian classic.',
    description:
      'Our Egusi Soup is freshly prepared with ground melon seeds, fresh vegetables, palm oil and a blend of traditional spices. This rich and hearty soup is a beloved Nigerian classic, perfect when served with pounded yam, fufu or eba. Made fresh daily using only the finest ingredients.',
    basePrice: 3500,
    unit: 'per litre',
    sizes: volumeSizes,
    image:
      'https://images.pexels.com/photos/20434734/pexels-photo-20434734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/20434734/pexels-photo-20434734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/20434731/pexels-photo-20434731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.9,
    reviewCount: 156,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    origin: 'Made fresh in our kitchen',
    storage: 'Refrigerate and consume within 3 days, or freeze for up to 1 month',
    reviews: [
      reviewTemplates('Nkechi Eze', 5, 'Tastes just like my mother\'s cooking! So rich and flavourful.'),
      reviewTemplates('Ahmed Yusuf', 5, 'The best egusi soup I\'ve ordered. Generous portions too!'),
      reviewTemplates('Blessing Okafor', 4, 'Delicious soup, very authentic taste. Will order again.'),
    ],
  },
  {
    id: 'ogbono-soup',
    name: 'Ogbono Soup',
    slug: 'ogbono-soup',
    category: 'soups',
    shortDescription: 'Smooth, drawy ogbono soup with rich traditional flavour.',
    description:
      'Our Ogbono Soup is made from carefully ground wild mango seeds, cooked with fresh palm oil, assorted vegetables and traditional spices. This soup has a distinctive smooth, drawy texture and rich flavour that pairs perfectly with fufu, eba or pounded yam. Prepared fresh daily.',
    basePrice: 3500,
    unit: 'per litre',
    sizes: volumeSizes,
    image:
      'https://images.pexels.com/photos/8321980/pexels-photo-8321980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/8321980/pexels-photo-8321980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.8,
    reviewCount: 98,
    isBestSeller: true,
    isFeatured: false,
    inStock: true,
    origin: 'Made fresh in our kitchen',
    storage: 'Refrigerate and consume within 3 days, or freeze for up to 1 month',
    reviews: [
      reviewTemplates('Uche Anozie', 5, 'Perfect drawy texture and amazing taste. Highly recommended!'),
      reviewTemplates('Amaka Obi', 4, 'Very good ogbono. Could use a bit more spice but still delicious.'),
    ],
  },
  {
    id: 'vegetable-soup',
    name: 'Vegetable Soup',
    slug: 'vegetable-soup',
    category: 'soups',
    shortDescription: 'Nutritious vegetable soup loaded with fresh greens.',
    description:
      'Our Vegetable Soup (Edikaikong style) is packed with fresh ugu leaves, waterleaf, assorted meats and traditional spices. This nutrient-rich soup is both delicious and healthy, offering a perfect balance of flavours. Best served with fufu, eba or pounded yam.',
    basePrice: 3800,
    unit: 'per litre',
    sizes: volumeSizes,
    image:
      'https://images.pexels.com/photos/17696680/pexels-photo-17696680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/17696680/pexels-photo-17696680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.9,
    reviewCount: 87,
    isBestSeller: false,
    isFeatured: true,
    inStock: true,
    origin: 'Made fresh in our kitchen',
    storage: 'Refrigerate and consume within 3 days, or freeze for up to 1 month',
    reviews: [
      reviewTemplates('Glory Akpan', 5, 'So much fresh vegetable in every spoonful! Absolutely delicious.'),
      reviewTemplates('Tope Adewale', 5, 'This is the best vegetable soup I\'ve had. Very authentic.'),
    ],
  },
  {
    id: 'okra-soup',
    name: 'Okra Soup',
    slug: 'okra-soup',
    category: 'soups',
    shortDescription: 'Fresh okra soup with a perfect drawy texture.',
    description:
      'Our Okra Soup is made with freshly chopped okra, cooked with palm oil, assorted proteins and traditional seasonings. This soup has the classic drawy texture that okra lovers crave. Perfect when paired with fufu, eba or pounded yam.',
    basePrice: 3200,
    unit: 'per litre',
    sizes: volumeSizes,
    image:
      'https://images.pexels.com/photos/8696758/pexels-photo-8696758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/8696758/pexels-photo-8696758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.7,
    reviewCount: 73,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    origin: 'Made fresh in our kitchen',
    storage: 'Refrigerate and consume within 3 days, or freeze for up to 1 month',
    reviews: [
      reviewTemplates('Rita Ezeh', 5, 'Perfect okra soup with the right drawy consistency. Love it!'),
    ],
  },
  {
    id: 'pepper-soup',
    name: 'Pepper Soup',
    slug: 'pepper-soup',
    category: 'soups',
    shortDescription: 'Spicy, aromatic pepper soup — warming and flavourful.',
    description:
      'Our Pepper Soup is a spicy, aromatic broth made with a traditional blend of pepper soup spices, fresh herbs and your choice of proteins. This warming soup is perfect for any weather and is known for its bold, distinctive flavour. Can be enjoyed on its own or with rice.',
    basePrice: 3000,
    unit: 'per litre',
    sizes: volumeSizes,
    image:
      'https://images.pexels.com/photos/772518/pexels-photo-772518.png?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/772518/pexels-photo-772518.png?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    rating: 4.8,
    reviewCount: 64,
    isBestSeller: false,
    isFeatured: false,
    inStock: true,
    origin: 'Made fresh in our kitchen',
    storage: 'Refrigerate and consume within 3 days, or freeze for up to 1 month',
    reviews: [
      reviewTemplates('Kemi Lawal', 5, 'The spice level is perfect! So warming and delicious.'),
      reviewTemplates('Obinna Okeke', 4, 'Great pepper soup flavour. Very authentic.'),
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getRelatedProducts(
  product: Product,
  limit = 4
): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
