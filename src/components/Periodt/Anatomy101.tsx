"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const anatomyParts = [
  {
    id: "uterus",
    name: "The Uterus",
    description: "A hollow, muscular organ where a fertilized egg develops. Its lining (endometrium) thickens each month and sheds during menstruation if pregnancy doesn't occur.",
    color: "bg-[#C88284]"
  },
  {
    id: "ovaries",
    name: "The Ovaries",
    description: "Two almond-shaped glands that store eggs and produce vital hormones like estrogen and progesterone, which regulate your cycle.",
    color: "bg-[#4A0E1B]"
  },
  {
    id: "fallopian",
    name: "Fallopian Tubes",
    description: "Narrow tubes connecting the ovaries to the uterus. During ovulation, an egg travels down these tubes, where fertilization usually happens.",
    color: "bg-[#E6C5C5]"
  },
  {
    id: "cervix",
    name: "The Cervix",
    description: "The lower part of the uterus that opens into the vagina. It changes position and produces different types of mucus throughout your cycle to facilitate or block sperm.",
    color: "bg-[#D9A5A6]"
  }
];

export default function Anatomy101() {
  const [activePart, setActivePart] = useState(anatomyParts[0]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-[40px] md:text-[56px] font-bold text-[#4A0E1B] leading-tight mb-6">
            Anatomy <span className="italic text-[#C88284]">101</span>
          </h2>
          <p className="font-inter text-lg text-[#4A0E1B]/70 max-w-2xl mx-auto">
            Understanding your own biology is the first step to advocating for your health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Interactive List */}
          <div className="flex flex-col gap-4">
            {anatomyParts.map((part) => (
              <button
                key={part.id}
                onClick={() => setActivePart(part)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 ${
                  activePart.id === part.id 
                    ? "bg-[#FDFBF7] border border-[#4A0E1B]/20 shadow-md" 
                    : "hover:bg-[#FDFBF7]/50 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${part.color}`} />
                  <h3 className="font-playfair text-2xl font-bold text-[#4A0E1B]">{part.name}</h3>
                </div>
                <AnimatePresence>
                  {activePart.id === part.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="font-inter text-base text-[#4A0E1B]/80 leading-relaxed pl-7">
                        {part.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Visualizer (Abstract representation) */}
          <div className="relative w-full aspect-square rounded-3xl bg-[#FDFBF7] flex items-center justify-center p-8 overflow-hidden border border-[#4A0E1B]/5">
            <motion.div
              key={activePart.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className={`w-64 h-64 rounded-full ${activePart.color} opacity-20 blur-2xl absolute`}
            />
            
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
               <motion.img 
                 src="/images/educate_anatomy_3d.jpg" 
                 alt="Anatomy 3D Render"
                 className="w-full max-w-[400px] h-auto object-contain rounded-2xl shadow-lg mix-blend-multiply pointer-events-none"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               />
               
               {/* Soft color tint over the 3D render based on active part */}
               <motion.div
                 key={activePart.id + "tint"}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 0.15 }}
                 transition={{ duration: 1 }}
                 className={`absolute inset-0 ${activePart.color} mix-blend-color max-w-[400px] max-h-[400px] m-auto pointer-events-none rounded-2xl`}
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
