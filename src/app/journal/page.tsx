"use client";

import React, { useState } from "react";
import Navbar from "@/components/Periodt/Navbar";
import FooterCTA from "@/components/Periodt/FooterCTA";
import { articles, Article } from "@/data/articles";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ArticleModal from "@/components/Periodt/ArticleModal";

const getTagStyles = (tag: string): string => {
  const t = tag.toLowerCase();
  if (t === "health") return "bg-[#F0DADA]/60 text-[#4A0E1B]";
  if (t === "policy") return "bg-[#E5F3EA] text-[#138E5F]";
  if (t === "culture") return "bg-[#FFF2C6] text-[#B45309]";
  if (t === "eco") return "bg-[#E5F3EA] text-[#138E5F]";
  return "bg-[#F6F3EC] text-[#4A0E1B]/70";
};

export default function JournalIndex() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 lg:px-[96px]">
        <div className="max-w-[1248px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0DADA]/60 border border-[#C88284]/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#4A0E1B]" />
              <span className="text-[#4A0E1B] text-[13px] font-inter font-semibold uppercase tracking-widest">The Journal</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-[48px] md:text-[64px] font-bold text-[#4A0E1B] leading-tight mb-6"
            >
              Conversations that <span className="italic text-[#C88284]">matter.</span>
            </motion.h1>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div onClick={() => setSelectedArticle(article)} key={article.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group cursor-pointer flex flex-col h-full bg-white rounded-[32px] overflow-hidden border border-[#4A0E1B]/10 hover:shadow-[0_20px_60px_rgba(74,14,27,0.08)] transition-all duration-500"
                >
                  <div className="w-full h-[250px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col p-8 flex-1">
                    <span className="text-[#4A0E1B]/60 font-inter text-sm uppercase tracking-widest font-semibold mb-3">
                      {article.date}
                    </span>
                    <h3 className="text-[#4A0E1B] font-playfair text-[24px] font-bold leading-tight group-hover:text-[#C88284] transition-colors duration-300 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-[#4A0E1B]/80 font-inter text-base leading-relaxed mb-6 flex-1 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map(tag => (
                          <span key={tag} className={"px-3 py-1 rounded-md font-inter text-[11px] font-semibold tracking-wide uppercase " + getTagStyles(tag)}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F0DADA]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4 text-[#4A0E1B]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />

      <ArticleModal 
        article={selectedArticle} 
        isOpen={!!selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </main>
  );
}
