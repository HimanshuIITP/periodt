"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Heart, Share2, Megaphone } from "lucide-react";

interface ActionPlan {
  name: string;
  description: string;
  icon: React.ElementType;
  ctaText: string;
  features: string[];
}

const actions: ActionPlan[] = [
  {
    name: "Bring Us to Your Community",
    description: "Want us to come talk at your school or community center?",
    icon: Share2,
    ctaText: "Contact Us",
    features: [
      "Partner with us for fun, educational workshops",
      "Help make periods less awkward in your community",
      "Get all our talking points and resources",
      "Help your friends and peers learn the facts",
    ],
  },
  {
    name: "Chip In",
    description: "Help us get pads and tampons to people who can't afford them.",
    icon: Heart,
    ctaText: "Make a Donation",
    features: [
      "Fund period products for local schools",
      "Support shelters in your area",
      "Help set up free dispensers",
      "Every little bit counts (and is tax-deductible)",
    ],
  },
  {
    name: "Use Your Voice",
    description: "Help us push for better rules and fairer laws.",
    icon: Megaphone,
    ctaText: "Sign the Petition",
    features: [
      "Help end the ridiculous tampon tax",
      "Demand free products in all schools",
      "Support time off for bad cramps",
      "Message your local reps",
    ],
  },
];

function ActionCard({
  action,
  isVisualActive,
  onMouseEnter,
  onMouseLeave,
}: {
  action: ActionPlan;
  isVisualActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={"relative flex flex-col items-start w-full lg:w-[404px] p-[32px] md:p-[40px] rounded-[32px] border transition-all duration-500 overflow-hidden group " + (isVisualActive ? "border-[#4A0E1B] bg-[#4A0E1B] shadow-2xl" : "border-[#4A0E1B]/10 bg-white")}
      animate={{
        y: isVisualActive ? -10 : 0,
      }}
      transition={{ duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] as const }}
    >
      <div className="relative z-10 w-full flex flex-col h-full">
        <div className="flex flex-col gap-[16px]">
          <div className={"w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-500 " + (isVisualActive ? "bg-[#C88284]/20" : "bg-[#F0DADA]/40")}>
            <action.icon className={"w-6 h-6 " + (isVisualActive ? "text-[#FDFBF7]" : "text-[#4A0E1B]")} />
          </div>
          
          <h3 className={"font-playfair text-[32px] font-bold leading-tight tracking-[-0.8px] transition-colors duration-500 " + (isVisualActive ? "text-[#FDFBF7]" : "text-[#4A0E1B]")}>
            {action.name}
          </h3>
          <p className={"font-inter text-[16px] font-normal leading-[26px] opacity-90 transition-colors duration-500 min-h-[52px] " + (isVisualActive ? "text-[#FDFBF7]" : "text-[#4A0E1B]")}>
            {action.description}
          </p>
        </div>

        <div className={"mt-[32px] border-t w-full transition-colors duration-500 " + (isVisualActive ? "border-[#FDFBF7]/20" : "border-[#4A0E1B]/10")} />

        <div className="mt-[32px] flex flex-col flex-grow">
          <ul className="flex flex-col gap-[16px]">
            {action.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={"mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-500 " + (isVisualActive ? "bg-[#C88284]" : "bg-[#C88284]")} />
                <span
                  className={"font-inter text-[16px] font-medium leading-[26px] transition-colors duration-500 " + (isVisualActive ? "text-[#FDFBF7]" : "text-[#4A0E1B]/80")}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          className={"mt-[40px] flex items-center justify-between self-stretch rounded-full border transition-all duration-500 relative overflow-hidden " + (isBtnHovered || isVisualActive ? "bg-[#FDFBF7] border-[#FDFBF7] text-[#4A0E1B]" : "bg-[#FDFBF7] border-[#4A0E1B]/10 text-[#4A0E1B]") + " " + (isBtnHovered ? "p-[8px_20px_8px_8px] flex-row-reverse" : "p-[8px_8px_8px_24px] flex-row")}
        >
          <motion.span
            layout
            className="font-inter text-[16px] md:text-[18px] font-semibold leading-[28px] z-10"
          >
            {action.ctaText}
          </motion.span>
          <motion.div
            layout
            className={"flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 z-10 " + (isBtnHovered || isVisualActive ? "bg-[#4A0E1B]" : "bg-[#F0DADA]/50")}
          >
            <ArrowUpRight
              size={20}
              strokeWidth={2.5}
              className={"transition-colors duration-300 " + (isBtnHovered || isVisualActive ? "text-white" : "text-[#4A0E1B]")}
            />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}

export default function TakeAction({ className }: { className?: string }) {
  const [activePlan, setActivePlan] = useState("Donate Products");
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" />

      <section
        id="take-action"
        className={"w-full bg-[#FDFBF7] py-20 lg:py-32 overflow-hidden flex justify-center " + (className || "")}
      >
        <div className="w-full max-w-[1248px] lg:px-0 px-6 flex flex-col items-center">

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0DADA]/50 border border-[#C88284]/30"
          >
            <Sparkles size={16} strokeWidth={2.5} className="text-[#4A0E1B]" />
            <span className="font-inter text-sm font-medium text-[#4A0E1B] uppercase tracking-wide">How you can help out</span>
          </motion.div>

          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 w-full max-w-[800px] text-center text-[#4A0E1B] font-playfair text-[40px] sm:text-[52px] lg:text-[64px] font-bold leading-tight tracking-[-1.5px] sm:tracking-[-2px]"
          >
            Want to <span className="italic text-[#C88284]">get involved?</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 mb-16 w-full max-w-[650px] text-center font-inter text-[16px] sm:text-[18px] font-normal leading-[28px] text-[#4A0E1B] opacity-80"
          >
            Whether you have a little time, some extra resources, or just a loud voice, we'd love your help.
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-6 w-full justify-center items-stretch">
            {actions.map((action: ActionPlan, idx: number) => {
              const isVisualActive = hoveredPlan ? hoveredPlan === action.name : activePlan === action.name;
              return (
                <motion.div
                  key={action.name}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + idx * 0.1, ease: [0.21, 0.45, 0.32, 0.9] as const }}
                  className="w-full lg:w-auto flex"
                >
                  <ActionCard
                    action={action}
                    isVisualActive={mounted && isVisualActive}
                    onMouseEnter={() => setHoveredPlan(action.name)}
                    onMouseLeave={() => setHoveredPlan(null)}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
