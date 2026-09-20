"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Periodt/Navbar";
import SplashScreen from "@/components/Periodt/SplashScreen";
import Header from "@/components/Periodt/Header";
import TheReality from "@/components/Periodt/TheReality";
import MythsVsFacts from "@/components/Periodt/MythsVsFacts";
import TheCycle from "@/components/Periodt/TheCycle";
import WhyThisMatters from "@/components/Periodt/WhyThisMatters";
import TakeAction from "@/components/Periodt/TakeAction";
import SupportNetwork from "@/components/Periodt/SupportNetwork";
import WhatsNext from "@/components/Periodt/WhatsNext";
import Blog from "@/components/Periodt/Blog";
import FooterCTA from "@/components/Periodt/FooterCTA";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <main className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <Header />
      <TheReality />
      <MythsVsFacts />
      <TheCycle />
      <WhyThisMatters />
      <TakeAction />
      <SupportNetwork />
      <WhatsNext />
      <Blog />
      <FooterCTA />
    </main>
    </>
  );
}
