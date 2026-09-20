"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Article } from "@/data/articles";

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && article && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[1000px] max-h-full bg-[#FDFBF7] rounded-[32px] shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#4A0E1B] hover:bg-[#4A0E1B] hover:text-white transition-colors shadow-sm cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto hide-scrollbar w-full h-full">
              {/* Hero Image */}
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent" />
              </div>

              {/* Article Content Area */}
              <div className="px-6 sm:px-12 lg:px-20 py-12 -mt-20 relative z-10">
                <header className="mb-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-[#4A0E1B]/80 font-inter text-sm uppercase tracking-widest font-semibold bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                      {article.date}
                    </span>
                    <div className="flex gap-2">
                      {article.tags.map((tag) => (
                        <span key={tag} className="text-[#C88284] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm font-inter text-sm uppercase tracking-widest font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h1 className="font-playfair text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-[#4A0E1B] leading-[1.1] tracking-tight mb-8">
                    {article.title}
                  </h1>
                </header>

                <div 
                  className="
                    [&>h2]:font-playfair [&>h2]:text-[28px] [&>h2]:md:text-[36px] [&>h2]:font-bold [&>h2]:text-[#4A0E1B] [&>h2]:mb-6 [&>h2]:mt-12
                    [&>h3]:font-playfair [&>h3]:text-[22px] [&>h3]:md:text-[26px] [&>h3]:font-bold [&>h3]:text-[#4A0E1B] [&>h3]:mb-4 [&>h3]:mt-8
                    [&>p]:font-inter [&>p]:text-[16px] [&>p]:md:text-[18px] [&>p]:text-[#4A0E1B]/90 [&>p]:leading-[1.8] [&>p]:mb-8
                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul]:mt-4
                    [&>ul>li]:font-inter [&>ul>li]:text-[16px] [&>ul>li]:md:text-[18px] [&>ul>li]:text-[#4A0E1B]/90 [&>ul>li]:mb-3 [&>ul>li]:leading-[1.7]
                    [&>blockquote]:border-l-4 [&>blockquote]:border-[#C88284] [&>blockquote]:bg-[#F0DADA]/30 [&>blockquote]:p-6 [&>blockquote]:md:p-8 [&>blockquote]:rounded-r-2xl [&>blockquote]:my-10 [&>blockquote]:font-playfair [&>blockquote]:text-[20px] [&>blockquote]:md:text-[24px] [&>blockquote]:italic [&>blockquote]:text-[#4A0E1B] [&>blockquote]:leading-[1.6]
                    [&>strong]:font-semibold [&>strong]:text-[#4A0E1B]
                    pb-12
                  "
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
