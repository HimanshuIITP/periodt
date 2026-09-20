"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const floatingWords = [
  { text: "Comfort", x: "8%", y: "20%", delay: 0 },
  { text: "Care", x: "78%", y: "30%", delay: 0.8 },
  { text: "Conscious", x: "15%", y: "72%", delay: 1.6 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
      aria-label="Hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-product.jpg"
          alt="Periodt period care products arranged on cream marble surface with dried botanicals"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-cream/40 to-cream" />
      </div>

      {/* Floating Words */}
      {floatingWords.map((word) => (
        <motion.span
          key={word.text}
          className="absolute hidden font-serif text-lg italic text-burgundy/25 select-none lg:block"
          style={{ left: word.x, top: word.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: word.delay + 1, duration: 1.2 }}
        >
          <motion.span
            className="inline-block"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: word.delay,
            }}
          >
            {word.text}
          </motion.span>
        </motion.span>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12 w-full">
        <div className="max-w-2xl pt-32 pb-20 lg:pt-40 lg:pb-32">
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-burgundy/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Periodt.
          </motion.p>

          <motion.h1
            className="headline-xl text-5xl text-burgundy-dark sm:text-6xl lg:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Your period.
            <br />
            <span className="text-burgundy">Better cared for.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-burgundy-dark/70 lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Thoughtfully designed period care for comfort, confidence and everyday life.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-burgundy px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-burgundy-dark hover:shadow-lg"
            >
              Shop Periodt
            </a>
            <a
              href="#period-talks"
              className="inline-flex items-center justify-center border-2 border-burgundy/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-burgundy-dark transition-all duration-300 hover:border-burgundy hover:bg-burgundy/5"
            >
              Explore Period Talks
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest text-burgundy/40">Scroll</span>
        <motion.div
          className="h-8 w-px bg-burgundy/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
