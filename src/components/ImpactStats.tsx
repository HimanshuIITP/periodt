"use client";

import { motion } from "framer-motion";
import { useInView, useAnimatedCounter } from "@/lib/hooks";
import { impactStats } from "@/lib/data";

function StatCard({
  stat,
  index,
  isActive,
}: {
  stat: (typeof impactStats)[0];
  index: number;
  isActive: boolean;
}) {
  const count = useAnimatedCounter(stat.value, 2000, isActive);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <span className="font-serif text-5xl font-bold text-burgundy sm:text-6xl lg:text-7xl">
        {count.toLocaleString()}
        {stat.suffix}
      </span>
      <p className="mt-3 text-sm font-medium text-burgundy-dark/50 uppercase tracking-wider">
        {stat.label}
      </p>
      {stat.isPlaceholder && (
        <p className="mt-1 text-[10px] text-burgundy-dark/30 italic">
          *Placeholder data
        </p>
      )}
    </motion.div>
  );
}

export default function ImpactStats() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section
      id="impact"
      ref={ref}
      className="bg-ivory py-24 lg:py-32"
      aria-label="Impact statistics"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-burgundy/60">
            Our Impact
          </p>
          <h2 className="headline-lg text-4xl text-burgundy-dark sm:text-5xl">
            Better care. Bigger impact.
          </h2>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} isActive={isInView} />
          ))}
        </div>

        <motion.p
          className="mt-12 text-center text-xs text-burgundy-dark/30 italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          * All numbers above are placeholder estimates and will be updated with verified data.
        </motion.p>
      </div>
    </section>
  );
}
