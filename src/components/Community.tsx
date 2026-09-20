"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";
import { School, Users, Handshake, MessagesSquare } from "lucide-react";

const initiatives = [
  { icon: School, label: "School awareness sessions" },
  { icon: MessagesSquare, label: "Menstrual education programs" },
  { icon: Users, label: "Community conversations" },
  { icon: Handshake, label: "NGO and organizational partnerships" },
];

export default function Community() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section
      id="community"
      ref={ref}
      className="bg-white py-24 lg:py-32"
      aria-label="Community and Education"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.p
              className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-burgundy/60"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </motion.p>
            <motion.h2
              className="headline-lg text-3xl text-burgundy-dark sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Let&rsquo;s make period conversations normal.
            </motion.h2>
            <motion.p
              className="mt-6 text-base leading-relaxed text-burgundy-dark/60 lg:text-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Beyond products, Periodt works to create awareness and education around menstrual health. Through school sessions, community programs and partnerships, we&rsquo;re helping normalize conversations that matter.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <a
                href="#"
                className="bg-burgundy px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-burgundy-dark"
              >
                Bring Period Talks to your school
              </a>
              <a
                href="#"
                className="border-2 border-burgundy/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-burgundy-dark transition-colors hover:border-burgundy/40"
              >
                Partner with Periodt
              </a>
            </motion.div>
          </div>

          {/* Right — Initiatives */}
          <div className="grid grid-cols-2 gap-6">
            {initiatives.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center gap-4 bg-cream/60 p-8 text-center transition-colors hover:bg-cream"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-burgundy/15">
                    <Icon size={24} className="text-burgundy" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-burgundy-dark/70 leading-snug">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
