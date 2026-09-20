"use client";

import Navbar from "@/components/Periodt/Navbar";
import Header from "@/components/Periodt/Header";
import MythsVsFacts from "@/components/Periodt/MythsVsFacts";
import TheCycle from "@/components/Periodt/TheCycle";
import WhyThisMatters from "@/components/Periodt/WhyThisMatters";
import TakeAction from "@/components/Periodt/TakeAction";
import SupportNetwork from "@/components/Periodt/SupportNetwork";
import WhatsNext from "@/components/Periodt/WhatsNext";
import Blog from "@/components/Periodt/Blog";
import FooterCTA from "@/components/Periodt/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <Header />
      <MythsVsFacts />
      <TheCycle />
      <WhyThisMatters />
      <TakeAction />
      <SupportNetwork />
      <WhatsNext />
      <Blog />
      <FooterCTA />
    </main>
  );
}
