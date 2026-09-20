"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";
import { Feather, Leaf, DollarSign, MessageCircle } from "lucide-react";

const pillars = [
  {
    icon: Feather,
    title: "Comfort",
    description: "Designed around everyday movement and real routines. Not lab conditions.",
  },
  {
    icon: Leaf,
    title: "Conscious",
    description:
      "Thoughtful materials and reduced-waste product choices where applicable.",
  },
  {
    icon: DollarSign,
    title: "Accessible",
    description: "Period care should be easier to afford and easier to understand.",
  },
  {
    icon: MessageCircle,
    title: "Honest",
    description:
      "No shame. No unnecessary secrets. Just better conversations about periods.",
  },
];

export default function WhyPeriodt() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      id="why-periodt"
      ref={ref}
      className="bg-burgundy-dark py-24 lg:py-32"
      aria-label="Why Periodt"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cream/40">
            Why Periodt
          </p>
          <h2 className="headline-lg text-4xl text-cream sm:text-5xl">
            Period care should feel this simple.
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="group"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-cream/15 transition-colors duration-300 group-hover:border-cream/30 group-hover:bg-cream/5">
                  <Icon size={22} className="text-blush" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-cream">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/50">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
