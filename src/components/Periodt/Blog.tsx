"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { articles, Article } from "@/data/articles";
import ArticleModal from "./ArticleModal";

const getTagStyles = (tag: string): string => {
  const t = tag.toLowerCase();
  if (t === "health") return "bg-[#F0DADA]/60 text-[#4A0E1B]";
  if (t === "policy") return "bg-[#E5F3EA] text-[#138E5F]";
  if (t === "culture") return "bg-[#FFF2C6] text-[#B45309]";
  return "bg-[#F6F3EC] text-[#4A0E1B]/70";
};

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  onClick: () => void;
  imageTop?: boolean;
  delay?: number;
}

function BlogCard({ image, date, title, description, tags, onClick, imageTop = true, delay = 0 }: BlogCardProps) {
  return (
    <div onClick={onClick} className="w-full lg:w-[612px]">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col items-start bg-[#FDFBF7] hover:bg-white rounded-[32px] overflow-hidden border border-[#4A0E1B]/10 shadow-[0_4px_24px_rgba(74,14,27,0.02)] hover:shadow-[0_20px_60px_rgba(74,14,27,0.08)] transition-all duration-500 w-full lg:w-[612px]"
    >
      {imageTop && (
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}

      <div className="flex flex-col p-8 md:p-[48px] gap-4 w-full self-stretch lg:w-[612px]">
        <div className="flex items-center justify-between">
          <span className="text-[#4A0E1B] font-inter text-[14px] md:text-[16px] uppercase tracking-widest font-semibold opacity-70">
            {date}
          </span>
          <div className="w-8 h-8 rounded-full bg-[#F0DADA]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRight className="w-4 h-4 text-[#4A0E1B]" />
          </div>
        </div>
        
        <h3 className="text-[#4A0E1B] font-playfair text-[28px] md:text-[36px] font-bold leading-[1.1] md:leading-[42px] tracking-tight group-hover:text-[#C88284] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-[#4A0E1B] font-inter text-base md:text-[18px] leading-[28px] opacity-80 mt-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-6">
          {tags.map((tag: string, i: number) => (
            <div
              key={i}
              className={"px-3 py-1.5 rounded-md text-center font-inter text-[13px] font-semibold tracking-wide " + getTagStyles(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {!imageTop && (
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      </motion.div>
    </div>
  );
}

export default function Blog({ className }: { className?: string }) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <section className={"w-full bg-[#F6F3EC] py-20 md:py-[120px] flex justify-center " + (className || "")}>
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            {/* Header Content */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-[80px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDFBF7] border border-[#C88284]/30 shadow-sm mb-6"
              >
                <Sparkles className="w-4 h-4 text-[#4A0E1B]" />
                <span className="text-[#4A0E1B] text-[13px] font-inter font-medium uppercase tracking-widest">Journal</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-[40px] sm:text-[48px] md:text-[64px] font-playfair font-bold text-[#4A0E1B] leading-[1.1] md:leading-[70px] tracking-tight md:tracking-[-1.5px] mb-6 max-w-[800px]"
              >
                Conversations that <span className="italic text-[#C88284]">matter</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[16px] md:text-[20px] text-[#4A0E1B] leading-[1.6] md:leading-[30px] max-w-[650px] font-inter opacity-80"
              >
                Deep dives into menstrual health, policy changes, and stories from our community breaking the silence.
              </motion.p>
            </div>

            {/* Blog Cards Grid */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center">
              {articles.slice(0, 2).map((article, index) => (
                <BlogCard
                  key={article.slug}
                  image={article.image}
                  date={article.date}
                  title={article.title}
                  description={article.description}
                  tags={article.tags}
                  onClick={() => setSelectedArticle(article)}
                  imageTop={index % 2 === 0}
                  delay={0.3 + (index * 0.1)}
                />
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Link href="/journal">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#4A0E1B] text-white font-inter font-semibold rounded-full hover:bg-[#C88284] transition-colors shadow-lg flex items-center gap-2"
                >
                  Read the Full Journal <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ArticleModal 
        article={selectedArticle} 
        isOpen={!!selectedArticle} 
        onClose={() => setSelectedArticle(null)} 
      />
    </>
  );
}
