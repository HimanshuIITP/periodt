"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function EducateHero() {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#FDFBF7]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#F0DADA]/40 via-[#FDFBF7]/10 to-[#C88284]/20 blur-[80px] opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-row items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0DADA]/60 border border-[#C88284]/30 mb-8"
        >
          <BookOpen className="w-4 h-4 text-[#4A0E1B]" />
          <span className="font-inter text-sm font-semibold tracking-wide text-[#4A0E1B] uppercase">Knowledge Hub</span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="max-w-[900px] font-playfair text-[48px] sm:text-[64px] lg:text-[80px] font-bold leading-[1.1] tracking-tight text-[#4A0E1B] mb-6"
        >
          Empowering through <br />
          <span className="italic text-[#C88284]">body literacy.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="max-w-[650px] font-inter text-lg sm:text-xl leading-relaxed text-[#4A0E1B]/80"
        >
          An unbiased, stigma-free resource for understanding your body, your cycle, and the options available to you. Let's unlearn the myths and focus on the facts.
        </motion.p>
      </div>
    </section>
  );
}
