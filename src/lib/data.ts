export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  comparePrice?: number;
  image: string;
  images: string[];
  benefits: string[];
  variants?: { name: string; options: string[] }[];
  badge?: string;
  rating: number;
  reviewCount: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  isPlaceholder: boolean;
}

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  isPlaceholder: boolean;
}

export const products: Product[] = [
  {
    id: "eco-pads",
    name: "Eco-Friendly Pads",
    slug: "eco-friendly-pads",
    category: "Pads",
    shortDescription: "Gentle on you. Gentler on the planet.",
    description:
      "Our eco-friendly pads are made with plant-based top sheets and biodegradable packaging. Designed for everyday comfort with reduced environmental impact.",
    price: 299,
    comparePrice: 399,
    image: "/images/product-pads.jpg",
    images: ["/images/product-pads.jpg", "/images/featured-product.jpg"],
    benefits: [
      "Plant-based top sheet",
      "Biodegradable packaging",
      "Dermatologically considered",
      "Up to 8 hours of comfort",
    ],
    variants: [
      { name: "Flow", options: ["Regular", "Heavy", "Overnight"] },
      { name: "Pack", options: ["10 pads", "20 pads", "30 pads"] },
    ],
    badge: "Bestseller",
    rating: 4.6,
    reviewCount: 234,
  },
  {
    id: "menstrual-cup",
    name: "Menstrual Cup",
    slug: "menstrual-cup",
    category: "Cups",
    shortDescription: "Reusable. Reliable. Ready when you are.",
    description:
      "Medical-grade silicone menstrual cup designed for comfort and ease. One cup, years of use, significantly less waste.",
    price: 599,
    image: "/images/product-cup.jpg",
    images: ["/images/product-cup.jpg"],
    benefits: [
      "Medical-grade silicone",
      "Up to 12 hours of wear",
      "Reusable for years",
      "Comes with cotton carry pouch",
    ],
    variants: [
      { name: "Size", options: ["Small", "Medium", "Large"] },
    ],
    rating: 4.7,
    reviewCount: 189,
  },
  {
    id: "period-underwear",
    name: "Reusable Period Underwear",
    slug: "period-underwear",
    category: "Underwear",
    shortDescription: "Leak-proof comfort you can wash and rewear.",
    description:
      "Multi-layer absorbent period underwear. Machine washable, reusable, and designed to replace single-use products.",
    price: 799,
    comparePrice: 999,
    image: "/images/product-underwear.jpg",
    images: ["/images/product-underwear.jpg"],
    benefits: [
      "4-layer absorbent technology",
      "Machine washable",
      "Leak-proof design",
      "Comfortable everyday fit",
    ],
    variants: [
      { name: "Size", options: ["XS", "S", "M", "L", "XL"] },
      { name: "Style", options: ["Bikini", "Hipster", "High-waist"] },
    ],
    rating: 4.5,
    reviewCount: 156,
  },
  {
    id: "comfort-kit",
    name: "Comfort Kit",
    slug: "comfort-kit",
    category: "Kits",
    shortDescription: "Everything you need. Thoughtfully bundled.",
    description:
      "A curated period care bundle with eco-friendly pads, a hot water bottle cover, herbal tea, and a reusable pouch. Makes a thoughtful gift.",
    price: 1499,
    comparePrice: 1899,
    image: "/images/product-kit.jpg",
    images: ["/images/product-kit.jpg"],
    benefits: [
      "Eco-friendly pad pack",
      "Knitted hot water bottle cover",
      "Herbal wellness tea",
      "Reusable cotton pouch",
    ],
    badge: "Gift Pick",
    rating: 4.8,
    reviewCount: 98,
  },
];

export const articles: Article[] = [
  {
    id: "first-period",
    title: "Understanding Your First Period",
    slug: "understanding-your-first-period",
    excerpt:
      "Your first period can feel like a big deal. Here's what to expect, what's normal, and how to feel prepared.",
    category: "Basics",
    readTime: "5 min read",
    image: "/images/brand-story.jpg",
    date: "2025-03-15",
  },
  {
    id: "hygiene-101",
    title: "Period Hygiene 101",
    slug: "period-hygiene-101",
    excerpt:
      "Simple, evidence-based hygiene practices to keep you comfortable and healthy during your period.",
    category: "Health",
    readTime: "4 min read",
    image: "/images/hero-product.jpg",
    date: "2025-03-10",
  },
  {
    id: "cups-guide",
    title: "Menstrual Cups: A Beginner's Guide",
    slug: "menstrual-cups-beginners-guide",
    excerpt:
      "Curious about menstrual cups? Here's an honest guide covering how they work, how to use them, and what to expect.",
    category: "Guides",
    readTime: "7 min read",
    image: "/images/product-cup.jpg",
    date: "2025-02-28",
  },
  {
    id: "myths",
    title: "Period Myths We Need to Stop Believing",
    slug: "period-myths",
    excerpt:
      "From pickle jars to temple visits — unpacking common period myths with science and sensitivity.",
    category: "Culture",
    readTime: "6 min read",
    image: "/images/featured-product.jpg",
    date: "2025-02-20",
  },
  {
    id: "cycle-explained",
    title: "What Actually Happens During Your Cycle?",
    slug: "what-happens-during-your-cycle",
    excerpt:
      "A clear, visual guide to the four phases of the menstrual cycle and what each one means for your body.",
    category: "Education",
    readTime: "8 min read",
    image: "/images/product-kit.jpg",
    date: "2025-02-15",
  },
];

/* PLACEHOLDER DATA — All testimonials below are fictional and for layout purposes only. */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Finally, period care that feels thoughtfully designed. The packaging, the product, everything.",
    name: "Placeholder Reviewer",
    location: "Mumbai",
    isPlaceholder: true,
  },
  {
    id: "t2",
    quote: "I switched to the menstrual cup and I genuinely can't imagine going back. So much easier.",
    name: "Placeholder Reviewer",
    location: "Bangalore",
    isPlaceholder: true,
  },
  {
    id: "t3",
    quote: "The comfort kit made such a sweet gift for my younger sister. She loved every part of it.",
    name: "Placeholder Reviewer",
    location: "Delhi",
    isPlaceholder: true,
  },
];

/* PLACEHOLDER DATA — All impact numbers below are illustrative and unverified. */
export const impactStats: ImpactStat[] = [
  {
    id: "s1",
    value: 150,
    suffix: "+",
    label: "Awareness sessions conducted",
    isPlaceholder: true,
  },
  {
    id: "s2",
    value: 25000,
    suffix: "+",
    label: "People reached",
    isPlaceholder: true,
  },
  {
    id: "s3",
    value: 50000,
    suffix: "+",
    label: "Products distributed",
    isPlaceholder: true,
  },
  {
    id: "s4",
    value: 40,
    suffix: "+",
    label: "Community partnerships",
    isPlaceholder: true,
  },
];
