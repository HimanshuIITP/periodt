"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";

export default function BrandIntro() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section ref={ref} className="bg-cream py-24 lg:py-32" aria-label="Brand introduction">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left — Large editorial statement */}
          <div className="lg:col-span-5">
            <motion.p
              className="text-sm font-medium uppercase tracking-[0.2em] text-burgundy/60 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              About Us
            </motion.p>
            <motion.h2
              className="headline-lg text-4xl text-burgundy-dark sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Hi, we&rsquo;re{" "}
              <span className="text-burgundy">Periodt.</span>
            </motion.h2>
          </div>

          {/* Right — Copy */}
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.h3
              className="headline-md text-2xl text-burgundy-dark/90 sm:text-3xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Periods are natural.
              <br />
              Talking about them should be too.
            </motion.h3>

            <motion.div
              className="space-y-4 text-base leading-relaxed text-burgundy-dark/65 lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <p>
                Periodt exists because period care shouldn&rsquo;t come with shame, confusion, or compromise. We&rsquo;re building a brand around comfort, transparency, and accessibility — making products that are easier to use, gentler on the planet, and honestly talked about.
              </p>
              <p>
                Whether it&rsquo;s your first period or your five hundredth, we want the experience to feel simpler, more comfortable, and a little more cared for.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 h-px w-24 bg-burgundy/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
