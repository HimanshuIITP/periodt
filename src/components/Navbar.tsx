"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Shop", href: "#products" },
  { label: "Why Periodt", href: "#why-periodt" },
  { label: "Period Talks", href: "#period-talks" },
  { label: "Our Story", href: "#brand-story" },
  { label: "Impact", href: "#impact" },
];

export default function Navbar({ onSearchOpen }: { onSearchOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-burgundy-dark" : "text-burgundy-dark"
            }`}
          >
            Periodt.
          </Link>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-burgundy ${
                    scrolled ? "text-burgundy-dark" : "text-burgundy-dark/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={onSearchOpen}
              className="p-2 text-burgundy-dark/70 transition-colors hover:text-burgundy"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="hidden p-2 text-burgundy-dark/70 transition-colors hover:text-burgundy lg:block"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <button
              onClick={openCart}
              className="relative p-2 text-burgundy-dark/70 transition-colors hover:text-burgundy"
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-burgundy text-[10px] font-bold text-cream">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-burgundy-dark/70 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Nav */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-cream flex flex-col" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="font-serif text-2xl font-bold text-burgundy-dark">
              Periodt.
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-burgundy-dark"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl font-semibold text-burgundy-dark transition-colors hover:text-burgundy"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex justify-center gap-6 pb-12">
            <button className="p-3 text-burgundy-dark/70" aria-label="Search">
              <Search size={22} />
            </button>
            <button className="p-3 text-burgundy-dark/70" aria-label="Account">
              <User size={22} />
            </button>
            <button
              onClick={() => { setMobileOpen(false); openCart(); }}
              className="relative p-3 text-burgundy-dark/70"
              aria-label="Cart"
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-burgundy text-[10px] font-bold text-cream">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
