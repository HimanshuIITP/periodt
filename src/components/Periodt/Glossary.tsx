"use client";

import React from "react";
import { motion } from "framer-motion";

const hormones = [
  {
    name: "Estrogen",
    role: "The Builder",
    description: "Rises during the follicular phase to rebuild the uterine lining and mature the egg. Often brings higher energy levels and glowing skin."
  },
  {
    name: "Progesterone",
    role: "The Stabilizer",
    description: "Dominates the luteal phase. It stabilizes the uterine lining for a potential pregnancy. If none occurs, levels drop, triggering your period. Can cause fatigue or moodiness."
  },
  {
    name: "Luteinizing Hormone (LH)",
    role: "The Trigger",
    description: "A sudden spike in LH triggers the release of the egg from the ovary, known as ovulation."
  },
  {
    name: "Follicle-Stimulating Hormone (FSH)",
    role: "The Initiator",
    description: "Stimulates the growth of ovarian follicles in the ovary before the release of an egg."
  }
];

export default function Glossary() {
  return (
    <section className="py-24 bg-[#4A0E1B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-[40px] md:text-[56px] font-bold leading-tight mb-6">
            The Hormone <span className="italic text-[#C88284]">Glossary</span>
          </h2>
          <p className="font-inter text-lg text-white/70 max-w-2xl mx-auto">
            The chemical messengers running the show.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hormones.map((hormone, i) => (
            <motion.div
              key={hormone.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="text-[#C88284] font-inter text-sm font-bold tracking-widest uppercase mb-4">
                {hormone.role}
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">{hormone.name}</h3>
              <p className="font-inter text-white/70 leading-relaxed text-sm">
                {hormone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
