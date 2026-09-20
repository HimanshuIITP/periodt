"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Droplets, RefreshCw, Package, Activity, ArrowRight } from "lucide-react";

const roadmapItems = [
  {
    id: "napkins",
    name: "Biodegradable Pads",
    icon: Leaf,
    description: "We're designing pads that are actually good for the planet and don't feel like you're wearing a diaper. No compromises on comfort.",
    features: [
      "Panty Liners for just-in-case days",
      "Normal Flow for your everyday",
      "Heavy Flow for peace of mind",
      "Overnight Flow so you can actually sleep"
    ],
    image: "/images/product-pads.jpg",
  },
  {
    id: "cup",
    name: "The Period Cup",
    icon: Droplets,
    description: "A soft silicone cup that saves you money and trips to the drugstore. Better for your body, better for the earth.",
    features: [
      "Pop it in and forget it for 12 hours",
      "Lasts for years (literally)",
      "Keeps your natural pH happy",
      "No more bathroom trash"
    ],
    image: "/images/product-cup.jpg",
  },
  {
    id: "underwear",
    name: "Period Underwear",
    icon: RefreshCw,
    description: "They look and feel like your favorite pair of undies, but they hold everything in. Say goodbye to leaks.",
    features: [
      "Holds way more than you'd think (4 tampons worth)",
      "Just toss them in the wash",
      "No weird smells",
      "So comfy you'll forget you're bleeding"
    ],
    image: "/images/product-underwear.jpg",
  },
  {
    id: "kits",
    name: "Care Kits",
    icon: Package,
    description: "We put together these little boxes of joy for whatever you're going through—whether it's your very first period or just a really bad cramp day.",
    features: [
      "First Timer: 3 pads, wipes, spare undies, and a friendly guide.",
      "NGO Kit: A full pack of pads and wipes for community drops.",
      "The Cozy Kit: Pads, wipes, sanitizer, tea, and electrolytes.",
      "On-The-Go: 5 pads, wipes, sanitizer, electrolytes, spare undies, and paper soap."
    ],
    image: "/images/product-kit.jpg",
  },
  {
    id: "belt",
    name: "Cramp Relief Belt",
    icon: Activity,
    description: "Like a warm hug for your uterus. Wear it under your clothes and go about your day without wincing in pain.",
    features: [
      "Heat that you can actually adjust",
      "Soothing vibrations",
      "Recharges like your phone",
      "Thin enough to hide under your sweater"
    ],
    image: "/images/hero-product.jpg",
  }
];

export default function WhatsNext() {
  const [activeId, setActiveId] = useState(roadmapItems[0].id);
  const activeItem = roadmapItems.find(p => p.id === activeId)!;

  return (
    <section className="py-24 bg-[#FDFBF7]" id="whats-next">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0DADA]/50 border border-[#C88284]/30 mb-6"
          >
            <span className="font-inter text-sm font-medium text-[#4A0E1B] uppercase tracking-wide">The Future Vision</span>
          </motion.div>
          <h2 className="font-playfair text-[40px] md:text-[56px] font-bold text-[#4A0E1B] leading-tight mb-6">
            What's <span className="italic text-[#C88284]">Next?</span>
          </h2>
          <p className="font-inter text-lg text-[#4A0E1B]/70 max-w-3xl mx-auto">
            Right now, we're putting all our energy into education and Periodt Talks. But behind the scenes? We're dreaming up products we'd actually want to use. We're teaming up with schools and community groups to make sure these essentials get into the hands of people who need them, for free.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Navigation Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
            {roadmapItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all whitespace-nowrap lg:whitespace-normal shrink-0 border ${
                  activeId === item.id
                    ? "bg-[#4A0E1B] border-[#4A0E1B] text-white shadow-lg"
                    : "bg-white border-[#4A0E1B]/10 text-[#4A0E1B] hover:bg-[#F6F3EC]"
                }`}
              >
                <item.icon className={`w-6 h-6 ${activeId === item.id ? "text-white" : "text-[#C88284]"}`} />
                <span className="font-inter font-semibold text-lg">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-[#4A0E1B]/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-8 h-full"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-[#FDFBF7] shrink-0 shadow-inner">
                    <img src={activeItem.image} alt={activeItem.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-3xl font-bold text-[#4A0E1B] mb-4">{activeItem.name}</h3>
                    <p className="font-inter text-lg text-[#4A0E1B]/80 leading-relaxed mb-6">
                      {activeItem.description}
                    </p>
                    
                    <div className="bg-[#F0DADA]/30 p-6 rounded-2xl">
                      <h4 className="font-inter font-semibold text-[#4A0E1B] mb-4 text-sm uppercase tracking-wider">
                        Included / Features
                      </h4>
                      <ul className="space-y-3">
                        {activeItem.features.map((feature, i) => (
                          <li key={i} className="font-inter text-[15px] text-[#4A0E1B]/90 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C88284] shrink-0" /> 
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 flex items-center justify-between border-t border-[#4A0E1B]/10">
                  <span className="font-inter text-sm font-medium text-[#4A0E1B]/60">Currently in development</span>
                  <div className="flex items-center gap-2 text-[#C88284] font-inter font-semibold text-sm cursor-pointer hover:opacity-80 transition-opacity">
                    Join Waitlist <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
