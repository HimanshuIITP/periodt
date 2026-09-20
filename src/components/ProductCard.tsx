"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/data";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.article
      className="group relative flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-4 top-4 bg-burgundy px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cream">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute right-4 top-4 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-white/80 backdrop-blur-sm"
          aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        >
          <Heart
            size={18}
            className={wishlisted ? "fill-burgundy text-burgundy" : "text-burgundy-dark/60"}
          />
        </button>

        {/* Hover CTA */}
        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={`#product-${product.id}`}
            className="block w-full bg-burgundy py-3 text-center text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-burgundy-dark"
          >
            Shop now
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-semibold text-burgundy-dark">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2 shrink-0">
            <span className="text-base font-semibold text-burgundy-dark">
              ₹{product.price}
            </span>
            {product.comparePrice && (
              <span className="text-sm text-burgundy-dark/40 line-through">
                ₹{product.comparePrice}
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-burgundy-dark/55 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="mt-1 flex items-center gap-1.5">
          <div className="flex gap-0.5" aria-label={`Rating: ${product.rating} out of 5`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-3.5 w-3.5 ${
                  star <= Math.round(product.rating)
                    ? "text-burgundy"
                    : "text-burgundy/20"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-burgundy-dark/40">({product.reviewCount})</span>
        </div>
      </div>
    </motion.article>
  );
}
