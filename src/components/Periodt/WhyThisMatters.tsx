"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Sparkles, Megaphone, School, HeartPulse, DollarSign, Building2, Globe2, MessagesSquare, Scale, Users, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface BenefitItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

function BenefitItem({ title, description, icon: Icon, delay = 0 }: BenefitItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" as const }}
      className="flex gap-6"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-[#F6F3EC] border border-[#C88284]/20 rounded-full flex items-center justify-center shadow-sm">
        <Icon className="w-5 h-5 text-[#4A0E1B]" strokeWidth={2} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#4A0E1B] font-playfair text-[24px] md:text-[28px] font-bold leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-[#4A0E1B] font-inter text-base md:text-lg font-normal leading-relaxed opacity-80">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyThisMatters({ className }: { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  const y = isLargeScreen ? yTranslate : 0;

  const tags = [
    "Period Poverty",
    "Mental Health",
    "Workplace Rights",
    "Education",
    "Gender Equality",
  ];

  const benefits: Array<{ title: string; description: string; icon: LucideIcon }> = [
    {
      title: "Making Products Accessible",
      description: "Nobody should have to stress about affording pads or tampons. It's that simple.",
      icon: DollarSign
    },
    {
      title: "No More Missed Days",
      description: "A period shouldn't get in the way of learning. We want to make sure everyone has what they need to stay in class, comfortably.",
      icon: School
    },
    {
      title: "Mind & Body Connection",
      description: "Hormones are a lot to handle. We're here to validate those tough days and help you find the support you deserve.",
      icon: HeartPulse
    },
    {
      title: "Better Workplaces",
      description: "Working through cramps is the worst. We're pushing for environments that actually understand how our bodies work.",
      icon: Building2
    },
    {
      title: "Dropping the Shame",
      description: "Hiding tampons up your sleeve? We've all been there. It's time to stop treating a natural bodily function like a secret.",
      icon: MessagesSquare
    },
    {
      title: "Changing the Rules",
      description: "Taxing tampons like luxury items is ridiculous. We're working to get free products in schools and public spaces.",
      icon: Scale
    },
    {
      title: "Global Support",
      description: "In some parts of the world, getting your period can mean being isolated. We want to change that narrative globally.",
      icon: Globe2
    },
    {
      title: "For Everyone Who Bleeds",
      description: "Periods don't just happen to women. Using inclusive language is just about showing respect for everyone's dignity.",
      icon: Users
    },
    {
      title: "Understanding Our Bodies",
      description: "It's crazy how little research there is on female biology. We need better funding for reproductive health.",
      icon: FileText
    },
    {
      title: "Speaking Up",
      description: "The more we talk about our bodies, the less scary it gets. Let's make it easier for the next generation.",
      icon: Megaphone
    },
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <section className={cn("w-full bg-[#FDFBF7] py-16 md:py-24 lg:py-[120px] flex justify-center", className)}>
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-[48px] justify-between">

              {/* Left Column - Sticky */}
              <div className="w-full lg:max-w-[622px] flex flex-col items-start lg:sticky lg:top-[120px] self-start">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="px-4 py-1.5 bg-[#F0DADA]/50 border border-[#C88284]/30 rounded-full flex items-center gap-2 mb-8"
                >
                  <Sparkles className="w-4 h-4 text-[#4A0E1B]" />
                  <span className="text-[#4A0E1B] font-inter text-sm font-medium uppercase tracking-wide">Why This Matters</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
                  className="text-[#4A0E1B] font-playfair text-[40px] sm:text-[48px] md:text-[60px] font-bold leading-tight tracking-tight mb-6"
                >
                  This goes way beyond <i className="text-[#C88284]">just biology.</i>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
                  className="text-[#4A0E1B] font-inter text-lg md:text-xl font-normal leading-relaxed opacity-80 mb-12 max-w-[560px]"
                >
                  How we handle periods impacts almost every part of life—from showing up to school to feeling comfortable at work. It's time we treat menstrual health with the care it deserves.
                </motion.p>

                <div className="flex flex-wrap gap-3">
                  {tags.map((tag: string, idx: number) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, ease: "easeOut" as const }}
                      className="px-6 py-2 border border-[#4A0E1B]/20 rounded-full text-[#4A0E1B] font-inter text-sm md:text-base font-medium hover:bg-[#F6F3EC] transition-colors cursor-default shadow-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Right Column - Scrollable List */}
              <div ref={containerRef} className="flex-1 lg:max-w-[578px] flex items-start pr-0 lg:h-[300vh] h-auto relative w-full">
                <div className="lg:sticky lg:top-[120px] lg:h-[800px] h-auto flex items-start w-full lg:overflow-hidden overflow-visible">
                  <div className="hidden lg:block absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent z-10 pointer-events-none" />

                  <div className="hidden lg:flex flex-col items-center mr-8 xl:mr-10 relative w-[2px] bg-[#4A0E1B]/10 self-stretch">
                    <motion.div
                      style={{ scaleY, originY: 0 }}
                      className="w-full bg-[#C88284] absolute top-0 left-0 h-full rounded-full"
                    />
                  </div>

                  <motion.div
                    ref={listRef}
                    style={{ y }}
                    className="w-full lg:w-[514px] flex flex-col gap-12 md:gap-16 lg:pt-28 lg:pb-40 pt-10 pb-10"
                  >
                    {benefits.map((benefit: { title: string; description: string; icon: LucideIcon }, idx: number) => (
                      <BenefitItem
                        key={idx}
                        title={benefit.title}
                        description={benefit.description}
                        icon={benefit.icon}
                        delay={0.4 + idx * 0.1}
                      />
                    ))}
                  </motion.div>

                  <div className="hidden lg:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent z-10 pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
