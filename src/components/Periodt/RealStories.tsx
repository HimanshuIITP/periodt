"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { Sparkles, ArrowLeft, ArrowRight, Quote } from "lucide-react";

// --- Testimonial Data ---

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Growing up, I was taught to hide my period. Speaking openly about it now feels like a rebellion. We need to normalize this completely natural process.",
    name: "Aisha M.",
    role: "Community Organizer",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    text: "Access to period products allowed me to stay in school without shame. It's not just about hygiene; it's about giving girls the opportunity to succeed.",
    name: "Priya K.",
    role: "Student & Advocate",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    text: "It took me 10 years to be diagnosed with endometriosis because my pain was dismissed as 'normal cramps'. We need better education and medical empathy.",
    name: "Sarah J.",
    role: "Health Educator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    text: "I didn't realize how much the stigma affected me until I started working in an office with a progressive menstrual leave policy. It changed my life.",
    name: "Elena R.",
    role: "Graphic Designer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    text: "Men need to be part of the conversation too. Educating my sons about menstruation has been crucial in raising compassionate, informed allies.",
    name: "David W.",
    role: "Parent & Teacher",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const displayTestimonials: Testimonial[] = [...testimonials, ...testimonials, ...testimonials];

// --- Main Component ---

export default function RealStories({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(660);
  const gap = 24;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!carouselTrackRef.current) return;
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (entries[0]) {
        setCarouselWidth(entries[0].contentRect.width);
      }
    });
    observer.observe(carouselTrackRef.current);
    return () => observer.disconnect();
  }, [isMounted]);

  useEffect(() => {
    if (isAutoPlaying && isMounted) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 5000);
    }
    return () => resetTimeout();
  }, [currentIndex, isAutoPlaying, isMounted]);

  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex % testimonials.length + testimonials.length);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < testimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + testimonials.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleResizeWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(width - 48);
      } else if (width < 1024) {
        setCardWidth(500);
      } else {
        setCardWidth(660);
      }
    };
    handleResizeWidth();
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }, []);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <div className={"flex flex-col w-full " + (className || "")}>
        {/* Testimonial Section */}
        <section className="w-full bg-[#F6F3EC] py-20 lg:py-32 overflow-hidden flex justify-center">
          <div className="w-full max-w-[1440px] flex flex-col items-center overflow-hidden">

            <div className="w-full max-w-[1248px] px-6 lg:px-0 flex flex-col items-center text-center mt-0 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0DADA]/50 border border-[#C88284]/30 mb-6">
                <Quote className="w-4 h-4 text-[#4A0E1B] fill-[#4A0E1B]" />
                <span className="text-sm font-medium text-[#4A0E1B] tracking-wide uppercase">Real Voices</span>
              </div>

              <h2 className="text-[#4A0E1B] text-[40px] sm:text-[48px] md:text-[60px] font-playfair font-bold leading-tight tracking-tight max-w-[800px] mb-6">
                Stories of breaking the <i className="text-[#C88284]">silence</i>
              </h2>

              <p className="text-[#4A0E1B] opacity-80 font-inter text-[16px] md:text-[18px] leading-[28px] max-w-[600px]">
                Hear from individuals around the world who are fighting period stigma, advocating for their health, and creating change in their communities.
              </p>
            </div>

            <div ref={carouselTrackRef} className="relative w-full overflow-visible mt-4">
              <div className="relative flex justify-start items-center overflow-visible min-h-[400px] md:min-h-[500px]">
                <motion.div
                  className="flex gap-6 items-center flex-nowrap"
                  animate={{
                    x: (carouselWidth / 2) - (cardWidth / 2) - (currentIndex * (cardWidth + gap)),
                  }}
                  transition={isTransitioning ? { type: "spring" as const, stiffness: 300, damping: 30 } : { duration: 0 }}
                >
                  {displayTestimonials.map((item: Testimonial, idx: number) => {
                    const isActive = idx === currentIndex;
                    return (
                      <div
                        key={item.id + "-" + idx}
                        className={
                          "relative flex flex-col items-center shrink-0 rounded-[24px] md:rounded-[32px] transition-all duration-500 overflow-hidden " +
                          "p-[32px] md:p-[48px_48px_40px_48px] " +
                          (isActive
                            ? "bg-[#4A0E1B] shadow-[0_20px_50px_rgba(74,14,27,0.15)]"
                            : "bg-[#FDFBF7] border border-[#4A0E1B]/10 opacity-70 scale-95")
                        }
                        style={{ width: cardWidth + "px" }}
                      >
                        <div className="relative z-10 flex flex-col items-center w-full h-full justify-center">
                          <div className="flex items-center justify-center min-h-[100px] md:min-h-[140px] mb-[40px]">
                            <p
                              className={
                                "font-playfair font-semibold text-center transition-colors duration-500 " +
                                (isActive ? "text-[#FDFBF7] " : "text-[#4A0E1B] ") +
                                (isActive
                                  ? "text-[24px] md:text-[28px] leading-[34px] md:leading-[40px]"
                                  : "text-[20px] md:text-[24px] leading-[28px] md:leading-[32px]")
                              }
                            >
                              {"\u201c" + item.text + "\u201d"}
                            </p>
                          </div>

                          <div className="flex flex-col items-center">
                            <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-[16px] border-2 border-[#C88284]">
                              <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>

                            <p
                              className={
                                "font-inter font-semibold text-[16px] md:text-[18px] leading-[28px] text-center mb-[2px] transition-colors duration-500 " +
                                (isActive ? "text-[#FDFBF7]" : "text-[#4A0E1B]")
                              }
                            >
                              {item.name}
                            </p>

                            <p
                              className={
                                "font-inter text-[14px] md:text-[15px] leading-[20px] text-center transition-colors duration-500 " +
                                (isActive ? "text-[#F0DADA]" : "text-[#4A0E1B]/70")
                              }
                            >
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              <div className="absolute inset-y-0 left-0 w-[100px] md:w-[180px] z-20 pointer-events-none bg-gradient-to-r from-[#F6F3EC] via-[#F6F3EC]/70 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-[100px] md:w-[180px] z-20 pointer-events-none bg-gradient-to-l from-[#F6F3EC] via-[#F6F3EC]/70 to-transparent" />
            </div>

            <div className="w-full max-w-[1248px] flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => handlePrev()}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer border border-[#4A0E1B]/10 bg-[#FDFBF7] hover:bg-[#4A0E1B] hover:text-white group"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-[#4A0E1B] group-hover:text-white transition-colors" />
              </button>
              <button
                onClick={() => handleNext()}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer border border-[#4A0E1B]/10 bg-[#FDFBF7] hover:bg-[#4A0E1B] hover:text-white group"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#4A0E1B] group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
