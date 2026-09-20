"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const facts = [
  "“1 in 5 young women in India still lack access to hygienic period care.”",
  "“Over 70% of adolescent girls in India are unaware of menstruation before their first period, leading to fear and shame.”",
  "“Women spend nearly one-third of their lives in the post-menopausal phase, yet it is rarely included in basic health conversations.”",
  "“23% of girls in India drop out of school upon reaching puberty due to a lack of adequate sanitation and awareness.”",
  "“Globally, 500 million women and girls suffer from period poverty.”"
];

export default function TheReality() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#4A0E1B] overflow-hidden flex flex-col items-center">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C88284]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C88284]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl w-full z-10"
      >
        <motion.h2 
          variants={fadeUp} 
          className="font-playfair text-[56px] md:text-[80px] font-bold text-white mb-16 tracking-tight"
        >
          The Reality.
        </motion.h2>

        <div className="flex flex-col gap-12 md:gap-16">
          {facts.map((fact, index) => (
            <motion.p
              key={index}
              variants={fadeUp}
              className="font-inter text-xl md:text-3xl lg:text-[32px] text-white/90 font-light leading-relaxed md:leading-[1.4] tracking-tight italic border-l-2 border-[#C88284] pl-6 md:pl-10 py-2"
            >
              {fact}
            </motion.p>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-24 pt-16 border-t border-white/10">
          <h3 className="font-inter font-black text-3xl md:text-4xl lg:text-5xl text-white text-center md:text-right uppercase tracking-tight leading-tight">
            WE ARE HERE TO<br />
            <span className="text-[#C88284]">CHANGE THAT NARRATIVE</span><br />
            TOGETHER.
          </h3>
        </motion.div>
      </motion.div>

    </section>
  );
}
