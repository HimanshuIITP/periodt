"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";

function InstagramIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const gridImages = [
  { src: "/images/hero-product.jpg", alt: "Periodt product flat lay" },
  { src: "/images/product-pads.jpg", alt: "Eco-friendly pads" },
  { src: "/images/product-cup.jpg", alt: "Menstrual cup" },
  { src: "/images/product-underwear.jpg", alt: "Period underwear" },
  { src: "/images/product-kit.jpg", alt: "Comfort kit" },
  { src: "/images/featured-product.jpg", alt: "Featured product packaging" },
];

export default function InstagramGrid() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      ref={ref}
      className="bg-white py-24 lg:py-32"
      aria-label="Instagram feed"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          className="mb-12 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <InstagramIcon size={28} className="mb-4 text-burgundy" />
          <h2 className="headline-lg text-3xl text-burgundy-dark sm:text-4xl">
            Join the Periodt movement.
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-dark"
          >
            @periodt.official_
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {gridImages.map((img, i) => (
            <motion.div
              key={img.src}
              className="group relative aspect-square overflow-hidden bg-ivory"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-burgundy-dark/0 transition-colors duration-300 group-hover:bg-burgundy-dark/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <InstagramIcon size={24} className="text-cream" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
