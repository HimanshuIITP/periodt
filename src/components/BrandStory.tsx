"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";

export default function BrandStory() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      id="brand-story"
      ref={ref}
      className="relative overflow-hidden bg-burgundy-dark py-32 lg:py-44"
      aria-label="Brand story"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/brand-story.jpg"
          alt="Women having a warm, open conversation in a bright space"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/90 via-burgundy-dark/70 to-burgundy-dark/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cream/40"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.p>

          <motion.h2
            className="headline-xl text-4xl text-cream sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Why Periodt?
          </motion.h2>

          <motion.div
            className="mt-8 space-y-5 text-base leading-relaxed text-cream/60 lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p>
              Periodt was born out of a simple frustration: why is something as natural as a period still surrounded by shame, confusion and poor quality products?
            </p>
            <p>
              We started with one question — what if period care could be more comfortable, more environmentally conscious, and more openly discussed? That question became a brand, and that brand became a community.
            </p>
            <p>
              Today, Periodt is building period care for a generation that refuses to whisper about something half the world experiences.
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#"
              className="inline-flex items-center border-b border-cream/30 pb-1 text-sm font-medium uppercase tracking-wider text-cream/70 transition-colors hover:border-cream hover:text-cream"
            >
              Read the full story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
