"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[70] bg-burgundy-dark/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 bottom-0 z-[80] flex w-full max-w-md flex-col bg-cream shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-burgundy/10 px-6 py-5">
              <h2 className="font-serif text-xl font-semibold text-burgundy-dark">
                Your Cart
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-burgundy-dark/50 transition-colors hover:text-burgundy-dark"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-burgundy/15" />
                  <p className="text-sm text-burgundy-dark/40">
                    Your cart is empty
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-2 text-sm font-medium text-burgundy underline"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex gap-4 border-b border-burgundy/5 pb-6"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-ivory">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-semibold text-burgundy-dark">
                            {item.product.name}
                          </h3>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-burgundy-dark/30 transition-colors hover:text-burgundy-dark"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <X size={14} />
                          </button>
                        </div>
                        {Object.entries(item.selectedVariants).length > 0 && (
                          <p className="mt-0.5 text-xs text-burgundy-dark/40">
                            {Object.entries(item.selectedVariants)
                              .map(([k, v]) => `${k}: ${v}`)
                              .join(" / ")}
                          </p>
                        )}
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center border border-burgundy/15">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="px-2 py-1 text-burgundy-dark/50"
                              aria-label="Decrease"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center text-xs font-medium text-burgundy-dark">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="px-2 py-1 text-burgundy-dark/50"
                              aria-label="Increase"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-burgundy-dark">
                            ₹{item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-burgundy/10 px-6 py-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-burgundy-dark/60">
                    Subtotal
                  </span>
                  <span className="font-serif text-xl font-bold text-burgundy-dark">
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>
                <p className="mb-4 text-xs text-burgundy-dark/35">
                  Shipping calculated at checkout.
                </p>
                <button className="w-full bg-burgundy py-4 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-burgundy-dark">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
