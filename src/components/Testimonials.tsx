"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { useInView } from "@/lib/hooks";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      ref={ref}
      className="bg-cream py-24 lg:py-32"
      aria-label="Customer testimonials"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-burgundy/60">
            What People Say
          </p>
          <h2 className="headline-lg text-4xl text-burgundy-dark sm:text-5xl">
            Heard from our community.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.id}
              className="flex flex-col border-t border-burgundy/10 pt-8"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.2 }}
            >
              <Quote size={24} className="mb-4 text-burgundy/20" />
              <p className="flex-1 font-serif text-lg leading-relaxed text-burgundy-dark/80 italic lg:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-burgundy-dark">
                  {testimonial.name}
                </p>
                <p className="text-xs text-burgundy-dark/40">{testimonial.location}</p>
                {testimonial.isPlaceholder && (
                  <p className="mt-1 text-[10px] text-burgundy-dark/25 italic">
                    *Placeholder testimonial
                  </p>
                )}
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
