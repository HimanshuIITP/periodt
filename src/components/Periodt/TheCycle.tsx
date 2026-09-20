"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Droplet,
  Flower2,
  Sun,
  Moon,
  Activity,
  Brain,
  Heart
} from "lucide-react";

const phases = [
  {
    id: 1,
    label: "Menstruation",
    days: "Days 1-5",
    icon: Droplet,
    blobColor1: "#4A0E1B",
    blobColor2: "#C88284",
    speed: 8,
    title: "The Release",
    description: "The cycle begins. Your body sheds the uterine lining from the previous cycle.",
    textColorClass: "text-[#4A0E1B]",
    lightBgClass: "bg-[#4A0E1B]/10",
    details: [
      { icon: Activity, title: "Hormones", text: "Estrogen and progesterone drop to their absolute lowest levels, which triggers the bleeding." },
      { icon: Brain, title: "Mind & Mood", text: "Energy draws inward. You may feel reflective, tired, or crave solitude. It's a natural time to pause." },
      { icon: Heart, title: "Focus", text: "Rest, hydration, light stretching, and nutrient-dense warm foods. Honor your body's need for recovery." }
    ]
  },
  {
    id: 2,
    label: "Follicular",
    days: "Days 6-14",
    icon: Flower2,
    blobColor1: "#C88284",
    blobColor2: "#F0DADA",
    speed: 6,
    title: "The Awakening",
    description: "A surge of new energy as your body begins to prepare to release a new egg.",
    textColorClass: "text-[#C88284]",
    lightBgClass: "bg-[#C88284]/20",
    details: [
      { icon: Activity, title: "Hormones", text: "Follicle-Stimulating Hormone (FSH) signals the ovaries. Estrogen begins a steady, energizing climb." },
      { icon: Brain, title: "Mind & Mood", text: "Brain fog lifts. You'll likely feel a massive boost in optimism, creativity, and mental clarity." },
      { icon: Heart, title: "Focus", text: "Brainstorming, high-intensity workouts, socializing, and starting ambitious new projects." }
    ]
  },
  {
    id: 3,
    label: "Ovulation",
    days: "Days 15-17",
    icon: Sun,
    blobColor1: "#D4A373",
    blobColor2: "#F6F3EC",
    speed: 4,
    title: "The Peak",
    description: "The main event. An egg is released and travels down the fallopian tube.",
    textColorClass: "text-[#D4A373]",
    lightBgClass: "bg-[#D4A373]/30",
    details: [
      { icon: Activity, title: "Hormones", text: "Estrogen hits its peak. A sharp spike in Luteinizing Hormone (LH) triggers the egg's release. Testosterone also rises." },
      { icon: Brain, title: "Mind & Mood", text: "Peak confidence. You may feel highly magnetic, communicative, and incredibly social." },
      { icon: Heart, title: "Focus", text: "Important conversations, public speaking, community events, and maximizing physical energy." }
    ]
  },
  {
    id: 4,
    label: "Luteal",
    days: "Days 18-28",
    icon: Moon,
    blobColor1: "#8B737A",
    blobColor2: "#4A0E1B",
    speed: 10,
    title: "The Winding Down",
    description: "The body prepares for a new cycle. Energy naturally begins to taper off.",
    textColorClass: "text-[#8B737A]",
    lightBgClass: "bg-[#8B737A]/20",
    details: [
      { icon: Activity, title: "Hormones", text: "Progesterone dominates. If no pregnancy occurs, both estrogen and progesterone crash." },
      { icon: Brain, title: "Mind & Mood", text: "The 'nesting' phase begins. As hormones drop, you may experience PMS, anxiety, or mood swings." },
      { icon: Heart, title: "Focus", text: "Organizing, completing tasks, gentle walks, honoring food cravings, and prioritizing deep self-care." }
    ]
  }
];

function AnimatedBlob({ color1, color2, speed }: { color1: string, color2: string, speed: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#FDFBF7]">
      {/* Base soft gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          background: `linear-gradient(120deg, ${color1} 0%, transparent 100%)` 
        }} 
      />
      <motion.div
        animate={{
          x: ["0%", "15%", "-5%", "0%"],
          y: ["0%", "-15%", "5%", "0%"],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: speed * 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] rounded-full opacity-30 blur-[80px]"
        style={{ backgroundColor: color1 }}
      />
      <motion.div
        animate={{
          x: ["0%", "-15%", "15%", "0%"],
          y: ["0%", "15%", "-15%", "0%"],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: speed * 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[10%] -right-[10%] w-[90%] h-[90%] rounded-full opacity-30 blur-[80px]"
        style={{ backgroundColor: color2 }}
      />
      <motion.div
        animate={{
          x: ["0%", "10%", "-15%", "0%"],
          y: ["0%", "15%", "-10%", "0%"],
        }}
        transition={{ duration: speed * 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[60%] h-[60%] rounded-full opacity-20 blur-[60px]"
        style={{ backgroundColor: color1 }}
      />
      {/* Glass overlay for creamy blending */}
      <div className="absolute inset-0 backdrop-blur-[30px] bg-white/30" />
    </div>
  );
}

export default function TheCycle({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(1);
  const activePhase = phases.find(p => p.id === activeTab) || phases[0];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section className={"w-full bg-[#FDFBF7] py-20 lg:py-32 overflow-hidden " + (className || "")}>
        <div className="w-full max-w-[1248px] mx-auto relative px-4 md:px-6">
          <div className="flex flex-col items-center">

            {/* Header */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C88284]/30 bg-[#F0DADA]/50 whitespace-nowrap mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#4A0E1B]" strokeWidth={2.5} />
              <span className="text-[#4A0E1B] text-center font-inter text-sm font-medium uppercase tracking-wide">
                Body Literacy
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#4A0E1B] font-playfair text-[40px] sm:text-[48px] lg:text-[64px] font-bold leading-tight tracking-[-1.2px] text-center mb-16"
            >
              The 4 phases of your <br className="hidden lg:block" />
              <span className="text-[#C88284] italic">
                menstrual cycle
              </span>
            </motion.h2>

            {/* Interactive Timeline */}
            <div className="relative w-full max-w-4xl mx-auto mb-16 px-4">
              {/* Line background */}
              <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-1 bg-[#4A0E1B]/10 -translate-y-1/2 rounded-full hidden sm:block" />
              {/* Progress Line */}
              <motion.div
                className="absolute top-[28px] left-[12.5%] h-1 bg-[#C88284] -translate-y-1/2 rounded-full hidden sm:block origin-left z-0"
                animate={{ width: `${((activeTab - 1) / 3) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-0 relative z-10 w-full">
                {phases.map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => setActiveTab(phase.id)}
                    className="flex flex-col items-center gap-3 group relative w-full sm:flex-1"
                  >
                    <motion.div
                      animate={{ scale: activeTab === phase.id ? 1.15 : 1 }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-[4px] shadow-sm transition-colors duration-300 ${
                        activeTab === phase.id
                          ? "border-[#FDFBF7] bg-[#4A0E1B]"
                          : "border-[#FDFBF7] bg-[#F6F3EC] group-hover:border-[#C88284]/30"
                      }`}
                    >
                      <phase.icon
                        className={`w-6 h-6 transition-colors duration-300 ${
                          activeTab === phase.id ? "text-white" : "text-[#4A0E1B]/60"
                        }`}
                      />
                    </motion.div>
                    <div className="flex flex-col items-center bg-[#FDFBF7] px-2">
                      <span
                        className={`font-inter font-semibold transition-colors duration-300 ${
                          activeTab === phase.id ? "text-[#4A0E1B]" : "text-[#4A0E1B]/50"
                        }`}
                      >
                        {phase.label}
                      </span>
                      <span className="text-xs font-inter text-[#4A0E1B]/40 mt-0.5">{phase.days}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Rich Content Area */}
            <div className="w-full flex flex-col lg:flex-row gap-6">
              
              {/* Left visual panel */}
              <div className="w-full lg:w-[40%] bg-white rounded-[32px] p-8 md:p-12 border border-[#4A0E1B]/10 shadow-[0_8px_30px_rgba(74,14,27,0.04)] relative overflow-hidden flex flex-col justify-center min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={"blob-" + activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <AnimatedBlob color1={activePhase.blobColor1} color2={activePhase.blobColor2} speed={activePhase.speed} />
                  </motion.div>
                </AnimatePresence>

                <div className="relative z-10 flex flex-col items-start text-left">
                  <motion.div
                    key={"icon-" + activeTab}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 shadow-sm flex items-center justify-center p-4 mb-8"
                  >
                    <activePhase.icon className={`w-8 h-8 ${activePhase.textColorClass}`} />
                  </motion.div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={"text-" + activeTab}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-[#4A0E1B] font-playfair text-[32px] lg:text-[40px] font-bold leading-tight tracking-[-1px] mb-4">
                        {activePhase.title}
                      </h3>
                      <p className="text-[#4A0E1B]/80 font-inter text-lg font-normal leading-relaxed">
                        {activePhase.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Details Panel */}
              <div className="w-full lg:w-[60%] flex flex-col gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={"details-" + activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 w-full h-full"
                  >
                    {activePhase.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-[24px] border border-[#4A0E1B]/10 p-6 md:p-8 shadow-[0_4px_20px_rgba(74,14,27,0.02)] flex flex-col sm:flex-row items-start gap-5 flex-1"
                      >
                        <div className={`p-4 rounded-full shrink-0 ${activePhase.lightBgClass}`}>
                          <detail.icon className={`w-6 h-6 ${activePhase.textColorClass}`} />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="font-playfair font-bold text-xl md:text-2xl text-[#4A0E1B] mb-2">
                            {detail.title}
                          </h4>
                          <p className="font-inter text-[#4A0E1B]/70 leading-relaxed text-base md:text-lg">
                            {detail.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
