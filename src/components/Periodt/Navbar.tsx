"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Educate", href: "/educate" },
    { name: "Whats next", href: "/#whats-next" },
    { name: "Journal", href: "/journal" },
    { name: "Our Team", href: "#" }
  ];

  return (
    <>
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 lg:pt-6 pointer-events-none px-4">
        <motion.nav
          layout
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" as const }}
          className={
            "pointer-events-auto flex items-center justify-between transition-all duration-500 " +
            (isScrolled
              ? "w-full max-w-[900px] bg-white/70 backdrop-blur-xl saturate-[1.5] border border-[#4A0E1B]/10 rounded-full shadow-[0_8px_32px_rgba(74,14,27,0.08)] px-5 py-2.5"
              : "w-full max-w-7xl bg-transparent border-transparent px-0 sm:px-2 lg:px-4 py-4")
          }
        >
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
            <span className={"font-playfair font-bold text-[#4A0E1B] tracking-tight transition-all duration-500 " + (isScrolled ? "text-2xl" : "text-3xl")}>Periodt.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.name === "Home" && pathname === "/");
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={
                      "font-inter leading-6 tracking-[-0.3px] text-[#4A0E1B] transition-all " +
                      (isActive
                        ? "font-semibold opacity-100"
                        : "font-normal opacity-80 hover:opacity-100 hover:font-semibold") +
                      (isScrolled ? " text-sm" : " text-base")
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 shrink-0">
            <motion.button
              onMouseEnter={() => setIsNavHovered(true)}
              onMouseLeave={() => setIsNavHovered(false)}
              layout
              className={
                "hidden sm:flex items-center gap-2 rounded-full bg-[#4A0E1B] border border-[#4A0E1B]/40 group cursor-pointer relative transition-all duration-500 " +
                (isScrolled ? "py-1 h-10" : "py-1.5 h-11") + " " +
                (isNavHovered ? "flex-row-reverse pl-1.5 pr-4" : "flex-row pl-4 pr-1.5")
              }
            >
              <motion.span
                layout
                className={"font-inter font-medium tracking-[-0.3px] text-white transition-all duration-500 " + (isScrolled ? "text-sm" : "text-base")}
              >
                Contact Us
              </motion.span>

              <motion.div
                layout
                className={"rounded-full bg-white flex items-center justify-center relative overflow-hidden shrink-0 transition-all duration-500 " + (isScrolled ? "w-7 h-7" : "w-8 h-8")}
              >
                <motion.div
                  animate={{
                    x: isNavHovered ? [-20, 0] : 0,
                    opacity: isNavHovered ? [0, 1] : 1
                  }}
                  transition={{ duration: 0.3, delay: isNavHovered ? 0.1 : 0 }}
                >
                  <ArrowUpRight className={"text-[#4A0E1B] transition-all duration-500 " + (isScrolled ? "w-3 h-3" : "w-3.5 h-3.5")} />
                </motion.div>
              </motion.div>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A0E1B] bg-[#F0DADA] rounded-full"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring" as const, damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] lg:hidden bg-[#FDFBF7] px-6 py-8 flex flex-col gap-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-playfair text-3xl font-bold text-[#4A0E1B] tracking-tight">Periodt.</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#4A0E1B] bg-[#4A0E1B]/5 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, ease: "easeOut" as const }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-inter text-2xl font-semibold text-[#4A0E1B]"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <button className="w-full py-4 rounded-full bg-[#4A0E1B] text-white font-inter font-medium text-lg">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
