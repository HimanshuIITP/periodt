"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // The total duration to show the splash screen before animating out
    const timeout = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 800); // Wait for exit animation to finish before notifying parent
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timeout);
  }, [onComplete]);

  const letters = ["P", "e", "r", "i", "o", "d", "t", "."];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9] as any,
      },
    },
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="splash"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#4A0E1B]"
        >
          {/* Logo container */}
          <div className="flex flex-col items-center justify-center gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex font-playfair text-6xl md:text-8xl font-bold text-[#FDFBF7]"
            >
              {letters.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
