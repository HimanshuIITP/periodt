"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Info, AlertCircle, BookOpen, Brain, Sparkles } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  uiSrc: string;
  width: string;
  className?: string;
  delay?: number;
  isMounted?: boolean;
}

function FeatureCard({ title, description, icon: Icon, uiSrc, className = "", delay = 0, isMounted = false }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] as const }}
      className={"flex flex-col items-start shrink-0 border border-[#4A0E1B]/10 overflow-hidden bg-white group w-full rounded-[24px] sm:rounded-[32px] " + className}
    >
      <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] overflow-hidden flex items-center justify-center bg-[#F6F3EC]">
        {isMounted && (
          <img
            src={uiSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-[#4A0E1B]/10 group-hover:bg-[#4A0E1B]/5 transition-colors duration-500" />
      </div>

      <div className="p-6 sm:p-10 flex flex-col sm:flex-row items-start gap-5 self-stretch bg-white">
        <div className="w-12 h-12 p-3 flex items-center justify-center border border-[#C88284]/20 bg-[#F0DADA]/30 rounded-full shrink-0">
          <Icon className="w-6 h-6 text-[#4A0E1B] stroke-[2px]" />
        </div>
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[#4A0E1B] font-playfair text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-[#4A0E1B] font-inter text-base sm:text-lg font-normal leading-relaxed opacity-80">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function MythsVsFacts({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const cards: Array<{ title: string; description: string; icon: React.ElementType; uiSrc: string; width: string }> = [
    {
      title: "Myth: Periods are dirty",
      description: "Fact: Menstruation is a natural, healthy biological process. The stigma surrounding it is entirely socially constructed.",
      icon: AlertCircle,
      uiSrc: "/images/myth_dirty_1789907282204.jpg",
      width: "676px"
    },
    {
      title: "Myth: Severe pain is normal",
      description: "Fact: While mild discomfort is common, debilitating pain is not normal and could indicate conditions like endometriosis.",
      icon: Info,
      uiSrc: "/images/myth_pain_1789907297027.jpg",
      width: "548px"
    },
    {
      title: "Myth: You shouldn't exercise",
      description: "Fact: Light to moderate exercise can actually help alleviate cramps and improve your mood during your cycle.",
      icon: Brain,
      uiSrc: "/images/myth_exercise_1789907308660.jpg",
      width: "548px"
    },
    {
      title: "Myth: PMS is just 'in your head'",
      description: "Fact: Premenstrual Syndrome is a recognized medical condition driven by very real hormonal fluctuations.",
      icon: BookOpen,
      uiSrc: "/images/myth_pms_1789907324849.jpg",
      width: "676px"
    }
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section className={"w-full bg-[#FDFBF7] py-20 lg:py-32 overflow-hidden " + (className || "")}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C88284]/30 bg-[#F0DADA]/50 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#4A0E1B]" />
                <span className="text-[#4A0E1B] text-center font-inter text-sm font-medium tracking-wide uppercase">
                  Body Literacy
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 w-full max-w-[800px] text-[#4A0E1B] text-center font-playfair text-[40px] sm:text-[48px] lg:text-[64px] font-bold leading-tight tracking-[-1.2px]"
              >
                Let's separate fact
                <br className="block sm:hidden" />
                {" from "}
                <span className="text-[#C88284] italic">
                  fiction
                </span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-4 w-full max-w-[600px] text-[#4A0E1B] text-center font-inter text-lg sm:text-xl font-normal leading-relaxed opacity-80"
              >
                For generations, misinformation has fueled period stigma. It's time we unlearn the myths and embrace the science of our bodies.
              </motion.p>
            </div>

            <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {cards.map((card, idx) => (
                <FeatureCard
                  key={idx}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  uiSrc={card.uiSrc}
                  width={card.width}
                  isMounted={isMounted}
                  delay={0.2 + idx * 0.1}
                  className="w-full"
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
