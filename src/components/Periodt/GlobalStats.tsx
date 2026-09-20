"use client";

import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { ArrowUpRight, Globe2, HeartHandshake, BookOpen } from "lucide-react";

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      onUpdate: (latest: number) => setDisplayValue(Math.round(latest)),
      ease: "easeOut" as const,
    });
    return () => controls.stop();
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  brandName: string;
  description: string;
  percentage: number;
  suffix: string;
  statLabel: string;
  bgColor: string;
  delay?: number;
}

function FeatureCard({
  icon,
  brandName,
  description,
  percentage,
  suffix,
  statLabel,
  bgColor,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      style={{ backgroundColor: bgColor }}
      className="flex w-full lg:w-[400px] p-8 md:p-10 flex-col items-start rounded-[32px] border border-[#4A0E1B]/5"
    >
      <div className="flex items-center gap-[12px] mb-[24px]">
        <div className="h-[48px] w-[48px] rounded-full bg-white flex items-center justify-center shadow-sm">
          {icon}
        </div>
      </div>

      <p className="font-inter text-[16px] md:text-[18px] font-medium leading-[26px] text-[#4A0E1B] opacity-90 min-h-0 md:min-h-[112px]">
        {description}
      </p>

      <div className="mt-8 md:mt-[60px]">
        <h2 className="font-playfair text-[48px] md:text-[60px] font-bold leading-[46px] md:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#4A0E1B]">
          <Counter value={percentage} />{suffix}
        </h2>
        <p className="mt-[12px] md:mt-[16px] font-inter text-[16px] md:text-[18px] font-medium leading-[24px] md:leading-[28px] text-[#4A0E1B] opacity-70">
          {statLabel}
        </p>
      </div>
    </motion.div>
  );
}

export default function GlobalStats({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section
        className={"w-full bg-[#FDFBF7] py-20 lg:py-32 flex justify-center " + (className || "")}
      >
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-[80px] gap-8">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" as const }}
                className="max-w-[700px] text-[40px] md:text-[60px] font-playfair font-bold leading-[1.1] tracking-[-1.2px] md:tracking-[-1.8px] text-[#4A0E1B]"
              >
                The undeniable truth about <i className="text-[#C88284]">period poverty</i>
              </motion.h1>

              <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{
                  paddingLeft: isHovered ? 8 : 24,
                  paddingRight: isHovered ? 24 : 8,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center h-[60px] min-w-fit w-max bg-[#4A0E1B] rounded-full group cursor-pointer transition-colors duration-300 hover:bg-[#3A0A14] overflow-hidden gap-[12px] shadow-lg shadow-[#4A0E1B]/20"
              >
                <motion.div
                  layout="position" 
                  style={{ order: isHovered ? 2 : 1 } as React.CSSProperties}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 35 }}
                  className="font-inter text-[18px] font-medium leading-[28px] text-white whitespace-nowrap"
                >
                  See The Report
                </motion.div>
                <motion.div
                  layout="position" 
                  style={{ order: isHovered ? 1 : 2 } as React.CSSProperties}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 35 }}
                  className="w-[44px] h-[44px] bg-[#FDFBF7] rounded-full flex items-center justify-center shrink-0"
                >
                  <ArrowUpRight className="w-[20px] h-[20px] text-[#4A0E1B]" />
                </motion.div>
              </motion.button>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col lg:flex-row gap-[24px]">
              <FeatureCard
                delay={0.1}
                bgColor="#F6F3EC"
                brandName="Global Impact"
                icon={<Globe2 className="w-6 h-6 text-[#4A0E1B]" />}
                description="Millions of individuals lack access to safe, hygienic menstrual products, leading to serious health risks and missed opportunities."
                percentage={500}
                suffix="M+"
                statLabel="People affected by period poverty globally"
              />
              <FeatureCard
                delay={0.2}
                bgColor="#F0DADA"
                brandName="Education"
                icon={<BookOpen className="w-6 h-6 text-[#4A0E1B]" />}
                description="The stigma surrounding periods forces countless young girls to skip school, severely impacting their education and future prospects."
                percentage={1}
                suffix="in 4"
                statLabel="Girls miss school due to lack of access"
              />
              <FeatureCard
                delay={0.3}
                bgColor="#C88284"
                brandName="Action"
                icon={<HeartHandshake className="w-6 h-6 text-white" />}
                description="Awareness and policy changes can break down these barriers, ensuring dignity, health, and equality for everyone."
                percentage={35}
                suffix="%"
                statLabel="Increase in graduation rates when products are provided"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
