"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { articles } from "@/lib/data";
import { useInView } from "@/lib/hooks";
import { ArrowRight } from "lucide-react";

export default function PeriodTalks() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="period-talks"
      ref={ref}
      className="bg-cream py-24 lg:py-32"
      aria-label="Period Talks"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.p
              className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-burgundy/60"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Period Talks
            </motion.p>
            <motion.h2
              className="headline-lg text-4xl text-burgundy-dark sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Knowledge changes the conversation.
            </motion.h2>
          </div>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-burgundy transition-colors hover:text-burgundy-dark"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            View all articles <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* Editorial Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Feature Article */}
          <motion.article
            className="group lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ivory">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="mb-2 inline-block bg-cream/90 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-burgundy-dark">
                  {articles[0].category}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-cream lg:text-3xl">
                  {articles[0].title}
                </h3>
                <p className="mt-2 text-sm text-cream/70">{articles[0].readTime}</p>
              </div>
            </div>
          </motion.article>

          {/* Side Articles */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {articles.slice(1).map((article, i) => (
              <motion.article
                key={article.id}
                className="group flex gap-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-ivory sm:h-28 sm:w-28">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="120px"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-burgundy/60">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-burgundy-dark leading-snug transition-colors group-hover:text-burgundy sm:text-lg">
                    {article.title}
                  </h3>
                  <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-burgundy/70">
                    Read article <ArrowRight size={12} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
