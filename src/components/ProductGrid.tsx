"use client";

import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import { useInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function ProductGrid() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="products"
      ref={ref}
      className="bg-white py-24 lg:py-32"
      aria-label="Product showcase"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <motion.p
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-burgundy/60"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Products
          </motion.p>
          <motion.h2
            className="headline-lg text-4xl text-burgundy-dark sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Period care, made better.
          </motion.h2>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
