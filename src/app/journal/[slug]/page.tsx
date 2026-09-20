"use client";

import React from "react";
import Navbar from "@/components/Periodt/Navbar";
import FooterCTA from "@/components/Periodt/FooterCTA";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      <article className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          {/* Back button */}
          <Link href="/journal" className="inline-flex items-center gap-2 text-[#4A0E1B]/60 hover:text-[#4A0E1B] transition-colors mb-8 font-inter text-sm font-semibold uppercase tracking-wide">
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-[#4A0E1B]/60 font-inter text-sm uppercase tracking-widest font-semibold">
                {article.date}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C88284]" />
              <div className="flex gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[#C88284] font-inter text-sm uppercase tracking-widest font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[64px] font-bold text-[#4A0E1B] leading-[1.1] tracking-tight mb-8">
              {article.title}
            </h1>
          </header>
        </div>

        {/* Hero Image */}
        <div className="max-w-[1000px] mx-auto mb-16">
          <div className="w-full h-[400px] md:h-[600px] rounded-[32px] overflow-hidden shadow-2xl">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-[750px] mx-auto">
          <div 
            className="
              [&>h2]:font-playfair [&>h2]:text-[32px] [&>h2]:md:text-[40px] [&>h2]:font-bold [&>h2]:text-[#4A0E1B] [&>h2]:mb-6 [&>h2]:mt-12
              [&>h3]:font-playfair [&>h3]:text-[24px] [&>h3]:md:text-[28px] [&>h3]:font-bold [&>h3]:text-[#4A0E1B] [&>h3]:mb-4 [&>h3]:mt-8
              [&>p]:font-inter [&>p]:text-[18px] [&>p]:md:text-[20px] [&>p]:text-[#4A0E1B]/90 [&>p]:leading-[1.8] [&>p]:mb-8
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul]:mt-4
              [&>ul>li]:font-inter [&>ul>li]:text-[18px] [&>ul>li]:text-[#4A0E1B]/90 [&>ul>li]:mb-3 [&>ul>li]:leading-[1.7]
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#C88284] [&>blockquote]:bg-[#F0DADA]/20 [&>blockquote]:p-8 [&>blockquote]:rounded-r-2xl [&>blockquote]:my-10 [&>blockquote]:font-playfair [&>blockquote]:text-[24px] [&>blockquote]:italic [&>blockquote]:text-[#4A0E1B] [&>blockquote]:leading-[1.6]
              [&>strong]:font-semibold [&>strong]:text-[#4A0E1B]
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>

      <FooterCTA />
    </main>
  );
}
