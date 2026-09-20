"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isCTAHovered, setIsCTAHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
        className="relative w-full overflow-hidden min-h-[800px] lg:min-h-[900px] bg-[#FDFBF7]"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          {isMounted && (
            <img
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000"
              alt="Background"
              className="w-full h-full object-cover opacity-30"
              style={{ filter: "hue-rotate(320deg) saturate(150%)" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/80 via-[#FDFBF7]/50 to-[#FDFBF7]" />
        </div>

        {/* Animated Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full h-[180px] md:h-[260px] lg:h-[320px] overflow-hidden z-10 pointer-events-none">
          <motion.svg
            viewBox="0 0 1440 450"
            preserveAspectRatio="none"
            className="w-full h-full translate-y-[2px]"
          >
            {/* Back wave */}
            <motion.path
              fill="#C88284"
              initial={{ opacity: 0.6 }}
              animate={{
                d: [
                  "M0,450 L1440,450 L1440,150 C1100,50 350,250 0,100 Z",
                  "M0,450 L1440,450 L1440,50 C1000,250 400,50 0,150 Z",
                  "M0,450 L1440,450 L1440,150 C1100,50 350,250 0,100 Z"
                ]
              }}
              transition={{
                duration: 12,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            {/* Front wave */}
            <motion.path
              fill="#4A0E1B"
              animate={{
                d: [
                  "M0,450 L1440,450 L1440,200 C1060,100 420,300 0,150 Z",
                  "M0,450 L1440,450 L1440,150 C1060,300 420,100 0,220 Z",
                  "M0,450 L1440,450 L1440,200 C1060,100 420,300 0,150 Z"
                ]
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-12">
          {/* Hero Content */}
          <div className="flex flex-col items-center mt-12 lg:mt-[80px]">

            {/* Heading */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" as const }}
              className="max-w-[850px] w-full text-center font-playfair text-[48px] sm:text-[60px] lg:text-[80px] font-bold leading-tight lg:leading-[88px] tracking-tight lg:tracking-[-2px] text-[#4A0E1B]"
            >
              Period talk? <br />
              <span className="italic font-semibold text-[#C88284]">We’re so done with the awkward.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" as const }}
              className="max-w-[700px] w-full text-center mt-6 font-inter text-lg lg:text-[22px] font-normal leading-relaxed lg:leading-[34px] tracking-[-0.4px] text-[#4A0E1B]/80"
            >
              No whispers. No "you know what." Just periods.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={() => router.push('/team')}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" as const }}
              onMouseEnter={() => setIsCTAHovered(true)}
              onMouseLeave={() => setIsCTAHovered(false)}
              layout
              className={
                "flex items-center gap-3 py-2 rounded-full bg-[#FDFBF7] mt-10 lg:mt-12 group cursor-pointer relative h-14 border border-[#FDFBF7]/20 transition-all duration-300 shadow-xl shadow-black/10 " +
                (isCTAHovered ? "flex-row-reverse pl-2 pr-6" : "flex-row pl-6 pr-2")
              }
            >
              <motion.span
                layout
                className="font-inter text-base lg:text-[18px] font-medium leading-[28px] text-[#4A0E1B]"
              >
                Meet our team
              </motion.span>

              <motion.div
                layout
                className="w-10 h-10 rounded-full bg-[#4A0E1B] flex items-center justify-center relative overflow-hidden shrink-0"
              >
                <motion.div
                  animate={{
                    x: isCTAHovered ? [-24, 0] : 0,
                    opacity: isCTAHovered ? [0, 1] : 1
                  }}
                  transition={{ duration: 0.3, delay: isCTAHovered ? 0.1 : 0 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-[#FDFBF7]" />
                </motion.div>
              </motion.div>
            </motion.button>


          </div>
        </div>
      </motion.section>
    </>
  );
}
