"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Minus, Plus, Check } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { useInView } from "@/lib/hooks";

export default function FeaturedProduct() {
  const product = products[0]; // Eco-Friendly Pads as featured
  const { addItem } = useCart();
  const { ref, isInView } = useInView(0.15);

  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    product.variants?.forEach((v) => {
      defaults[v.name] = v.options[0];
    });
    return defaults;
  });
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity, selectedVariants);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section
      id={`product-${product.id}`}
      ref={ref}
      className="bg-ivory py-24 lg:py-32"
      aria-label="Featured product"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative aspect-[4/5] overflow-hidden bg-cream"
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/featured-product.jpg"
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {product.badge && (
              <span className="mb-4 inline-block self-start bg-burgundy/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-burgundy">
                {product.badge}
              </span>
            )}

            <h2 className="headline-lg text-3xl text-burgundy-dark sm:text-4xl lg:text-5xl">
              {product.name}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-burgundy-dark/60 lg:text-lg">
              {product.description}
            </p>

            {/* Benefits */}
            <ul className="mt-6 space-y-2">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-burgundy-dark/70">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-burgundy/10">
                    <Check size={12} className="text-burgundy" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold text-burgundy-dark">₹{product.price}</span>
              {product.comparePrice && (
                <span className="text-lg text-burgundy-dark/35 line-through">
                  ₹{product.comparePrice}
                </span>
              )}
            </div>

            {/* Variants */}
            {product.variants?.map((variant) => (
              <div key={variant.name} className="mt-6">
                <label className="mb-2 block text-sm font-medium text-burgundy-dark/70">
                  {variant.name}
                </label>
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setSelectedVariants((prev) => ({ ...prev, [variant.name]: option }))
                      }
                      className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        selectedVariants[variant.name] === option
                          ? "bg-burgundy text-cream"
                          : "border border-burgundy/20 text-burgundy-dark/70 hover:border-burgundy/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-burgundy/20">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-burgundy-dark/60 transition-colors hover:text-burgundy-dark"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-burgundy-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-burgundy-dark/60 transition-colors hover:text-burgundy-dark"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  added
                    ? "bg-green-800 text-white"
                    : "bg-burgundy text-cream hover:bg-burgundy-dark hover:shadow-lg"
                }`}
              >
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="border border-burgundy/20 p-4 transition-colors hover:border-burgundy/40"
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  size={18}
                  className={wishlisted ? "fill-burgundy text-burgundy" : "text-burgundy-dark/50"}
                />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-6 border-t border-burgundy/10 pt-6">
              {["Skin-conscious materials", "Comfort-focused design", "Thoughtful packaging"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium uppercase tracking-wider text-burgundy-dark/40"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
