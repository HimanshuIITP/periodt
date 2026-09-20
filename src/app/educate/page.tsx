"use client";

import Navbar from "@/components/Periodt/Navbar";
import EducateHero from "@/components/Periodt/EducateHero";
import Anatomy101 from "@/components/Periodt/Anatomy101";
import WhatsNext from "@/components/Periodt/WhatsNext";
import Conditions from "@/components/Periodt/Conditions";
import Glossary from "@/components/Periodt/Glossary";
import FooterCTA from "@/components/Periodt/FooterCTA";

export default function EducatePage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <EducateHero />
      <Anatomy101 />
      <WhatsNext />
      <Conditions />
      <Glossary />
      <FooterCTA />
    </main>
  );
}
