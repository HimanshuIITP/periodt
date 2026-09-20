"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  description: string;
}

const leftNodes: NodeItem[] = [
  {
    id: "schools",
    name: "Schools & Universities",
    description: "Hosting chats and answering the real questions.",
  },
  {
    id: "workplaces",
    name: "Workplaces",
    description: "Making taking a day off for cramps totally normal.",
  },
  {
    id: "healthcare",
    name: "Healthcare Providers",
    description: "Listening to our bodies and trusting our pain.",
  },
  {
    id: "government",
    name: "Local Governments",
    description: "Dropping the tax on things we actually need.",
  },
];

const rightNodes: NodeItem[] = [
  {
    id: "ngos",
    name: "Community Partners",
    description: "Teaming up to spread the word and share resources.",
  },
  {
    id: "families",
    name: "Families",
    description: "Making period talk as normal as asking what's for dinner.",
  },
  {
    id: "media",
    name: "Media & Culture",
    description: "Showing periods on screen without making a big deal of it.",
  },
  {
    id: "brands",
    name: "Sustainable Brands",
    description: "Giving us products that are safe for our bodies and the planet.",
  },
];

const topValues: Record<number, string> = { 0: "0px", 1: "96px", 2: "192px", 3: "288px" };

export default function SupportNetwork({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      setWindowWidth(window.innerWidth);
    }, 0);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLargeScreen = isMounted && windowWidth >= 1024;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section className={"w-full bg-[#F6F3EC] py-16 md:py-[120px] overflow-hidden relative flex justify-center " + (className || "")}>
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">

            {/* Header Content */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-[100px]">
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0DADA]/50 border border-[#C88284]/30 mb-6"
              >
                <Star className="w-4 h-4 text-[#4A0E1B] fill-[#4A0E1B]" />
                <span className="text-[#4A0E1B] text-[13px] font-semibold font-inter uppercase tracking-widest">Our Ecosystem</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-[36px] sm:text-[48px] md:text-[60px] font-bold font-playfair text-[#4A0E1B] leading-[1.1] md:leading-[64px] tracking-tight md:tracking-[-1.5px] mb-6 max-w-[800px] text-center"
              >
                We're all in this <br className="hidden md:block"/>
                <span className="italic text-[#C88284]">together.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[16px] md:text-[20px] text-[#4A0E1B] leading-[1.6] md:leading-[30px] max-w-[700px] font-inter font-normal opacity-80 text-center"
              >
                Real change happens when we team up. From dinner tables to boardrooms, here's how we're building a community that cares.
              </motion.p>
            </div>

            {/* Integration Visualization */}
            <div className="relative w-full max-w-[1240px] mx-auto min-h-[400px] lg:h-[368px] flex items-center justify-center">

              {/* Desktop Only SVG Visualization */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                viewBox="0 0 1240 368"
              >
                <defs>
                  <linearGradient id="line-gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C88284" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#4A0E1B" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="line-gradient-right" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#C88284" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#4A0E1B" stopOpacity="0.5" />
                  </linearGradient>
                </defs>

                {/* Left Connection Paths */}
                {[225, 195, 165, 135].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const startX = 620 + 84 * Math.cos(rad);
                  const startY = 184 + 84 * Math.sin(rad);
                  const cardY = [40, 136, 232, 328][i];
                  const dPath = "M " + startX + " " + startY + " Q " + (startX - 150) + " " + startY + " 280 " + cardY;
                  return (
                    <React.Fragment key={"path-left-" + i}>
                      <path
                        d={dPath}
                        stroke="url(#line-gradient-left)"
                        fill="none"
                        strokeWidth="2"
                        strokeDasharray="4 6"
                        opacity="0.8"
                      />
                      <motion.circle r="4" fill="#4A0E1B">
                        <animateMotion
                          dur="4s"
                          repeatCount="indefinite"
                          path={dPath}
                          begin={i * 0.5 + "s"}
                        />
                      </motion.circle>
                    </React.Fragment>
                  );
                })}

                {/* Right Connection Paths */}
                {[-45, -15, 15, 45].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const startX = 620 + 84 * Math.cos(rad);
                  const startY = 184 + 84 * Math.sin(rad);
                  const cardY = [40, 136, 232, 328][i];
                  const dPath = "M " + startX + " " + startY + " Q " + (startX + 150) + " " + startY + " 960 " + cardY;
                  return (
                    <React.Fragment key={"path-right-" + i}>
                      <path
                        d={dPath}
                        stroke="url(#line-gradient-right)"
                        fill="none"
                        strokeWidth="2"
                        strokeDasharray="4 6"
                        opacity="0.8"
                      />
                      <motion.circle r="4" fill="#4A0E1B">
                        <animateMotion
                          dur="4s"
                          repeatCount="indefinite"
                          path={dPath}
                          begin={(i * 0.5 + 0.25) + "s"}
                        />
                      </motion.circle>
                    </React.Fragment>
                  );
                })}

                {/* Static Connection Dots at Seal */}
                {[225, 195, 165, 135, -45, -15, 15, 45].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  return (
                    <motion.circle
                      key={"seal-dot-" + i}
                      cx={620 + 84 * Math.cos(rad)}
                      cy={184 + 84 * Math.sin(rad)}
                      r="6"
                      fill="#C88284"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity as number, delay: i * 0.2 }}
                    />
                  );
                })}
              </svg>

              {/* Visualization Container */}
              <div className="w-full flex flex-col lg:block relative z-10 lg:h-full">

                {/* Left column items */}
                <div className="flex flex-wrap lg:grid justify-center gap-4 lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-[300px] mb-8 lg:mb-0">
                  {leftNodes.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className={"w-[260px] sm:w-[280px] lg:w-[300px] h-[72px] lg:h-[80px] bg-[#FDFBF7] rounded-[16px] p-3 lg:p-[16px] flex flex-col justify-center shadow-[0_4px_20px_rgba(74,14,27,0.03)] hover:shadow-[0_12px_40px_rgba(74,14,27,0.08)] transition-all cursor-default border border-[#4A0E1B]/5 lg:absolute hover:border-[#4A0E1B]/20"}
                      style={{ top: isLargeScreen ? topValues[idx] : undefined }}
                    >
                      <span className="text-[#4A0E1B] font-inter font-bold text-[14px] lg:text-[16px] leading-tight">{item.name}</span>
                      <span className="text-[#4A0E1B]/70 text-[12px] lg:text-[13px] font-inter mt-1 leading-snug">{item.description}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Center Seal */}
                <div className="flex items-center justify-center py-8 lg:py-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                  <div className="relative w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity as number, ease: "easeInOut" as const }}
                      className="absolute inset-0 -m-8 lg:-m-[60px] rounded-full bg-[#F0DADA]/50"
                    />
                    <div className="absolute inset-0 -m-4 lg:-m-[30px] rounded-full bg-[#FDFBF7]/60 backdrop-blur-[2px]" />

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring" as const, stiffness: 260, damping: 22 }}
                      viewport={{ once: true }}
                      className="w-full h-full rounded-full bg-[#4A0E1B] shadow-[0_12px_48px_rgba(74,14,27,0.2)] flex items-center justify-center relative z-10 p-2 border-4 border-[#FDFBF7]"
                    >
                      <span className="font-playfair text-white text-2xl lg:text-3xl font-bold tracking-tight">Periodt.</span>
                    </motion.div>
                  </div>
                </div>

                {/* Right column items */}
                <div className="flex flex-wrap lg:grid justify-center gap-4 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[300px] mt-8 lg:mt-0">
                  {rightNodes.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className={"w-[260px] sm:w-[280px] lg:w-[300px] h-[72px] lg:h-[80px] bg-[#FDFBF7] rounded-[16px] p-3 lg:p-[16px] flex flex-col justify-center shadow-[0_4px_20px_rgba(74,14,27,0.03)] hover:shadow-[0_12px_40px_rgba(74,14,27,0.08)] transition-all cursor-default border border-[#4A0E1B]/5 lg:absolute hover:border-[#4A0E1B]/20"}
                      style={{ top: isLargeScreen ? topValues[idx] : undefined }}
                    >
                      <span className="text-[#4A0E1B] font-inter font-bold text-[14px] lg:text-[16px] leading-tight">{item.name}</span>
                      <span className="text-[#4A0E1B]/70 text-[12px] lg:text-[13px] font-inter mt-1 leading-snug">{item.description}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="flex flex-col items-center mt-16 md:mt-[100px] gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 md:px-[32px] py-3 md:py-[14px] rounded-full border border-[#4A0E1B]/10 bg-[#FDFBF7] shadow-[0_4px_24px_rgba(74,14,27,0.05)]"
              >
                <ShieldCheck className="w-5 h-5 text-[#C88284]" />
                <p className="text-[14px] md:text-[16px] font-inter font-medium text-[#4A0E1B]">
                  Together we have donated over <span className="font-bold">2.5 million</span> period products globally.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
