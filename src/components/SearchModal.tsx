"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { products, articles } from "@/lib/data";

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const filteredProducts = query.length > 1
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredArticles = query.length > 1
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-burgundy-dark/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 top-0 z-[80] mx-auto max-w-2xl px-4 pt-20 sm:pt-32"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            <div className="bg-cream shadow-2xl">
              {/* Search Input */}
              <div className="flex items-center border-b border-burgundy/10 px-5">
                <SearchIcon size={20} className="text-burgundy/40 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, articles..."
                  className="flex-1 bg-transparent px-4 py-5 text-base text-burgundy-dark placeholder:text-burgundy-dark/30 focus:outline-none"
                />
                <button
                  onClick={onClose}
                  className="p-2 text-burgundy-dark/40 hover:text-burgundy-dark"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Results */}
              {query.length > 1 && (
                <div className="max-h-80 overflow-y-auto px-5 py-4">
                  {filteredProducts.length > 0 && (
                    <div className="mb-4">
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-burgundy/50">
                        Products
                      </h3>
                      {filteredProducts.map((product) => (
                        <a
                          key={product.id}
                          href={`#product-${product.id}`}
                          onClick={onClose}
                          className="flex items-center gap-3 py-2 text-sm text-burgundy-dark hover:text-burgundy transition-colors"
                        >
                          <span className="font-medium">{product.name}</span>
                          <span className="text-burgundy-dark/30">₹{product.price}</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {filteredArticles.length > 0 && (
                    <div>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-burgundy/50">
                        Articles
                      </h3>
                      {filteredArticles.map((article) => (
                        <a
                          key={article.id}
                          href="#period-talks"
                          onClick={onClose}
                          className="block py-2 text-sm text-burgundy-dark hover:text-burgundy transition-colors"
                        >
                          {article.title}
                        </a>
                      ))}
                    </div>
                  )}

                  {filteredProducts.length === 0 && filteredArticles.length === 0 && (
                    <p className="py-4 text-center text-sm text-burgundy-dark/35">
                      No results for &ldquo;{query}&rdquo;
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
