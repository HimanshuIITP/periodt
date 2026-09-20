"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";


const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface CTAButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  href?: string;
}

function CTAButton({ text, variant = 'primary', href }: CTAButtonProps) {
  const isPrimary = variant === 'primary';
  const [isHovered, setIsHovered] = React.useState(false);

  const content = (
    <>
      <motion.span
        layout
        transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
        className="font-inter font-semibold text-[18px] leading-[28px] whitespace-nowrap z-10"
      >
        {text}
      </motion.span>

      <motion.div
        layout
        transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
        className={cn(
          "flex items-center justify-center w-[44px] h-[44px] rounded-full shrink-0 z-20",
          isPrimary ? "bg-white" : "bg-[#4A0E1B]"
        )}
      >
        <ArrowUpRight className={cn("w-5 h-5", isPrimary ? "text-[#4A0E1B]" : "text-white")} />
      </motion.div>
    </>
  );

  const buttonClass = cn(
    "relative flex items-center h-[60px] rounded-full transition-all duration-500 overflow-hidden gap-3 cursor-pointer",
    isPrimary
      ? "bg-[#4A0E1B] text-white shadow-xl shadow-[#4A0E1B]/20"
      : "bg-[#FDFBF7]/80 backdrop-blur-xl border border-[#4A0E1B]/20 text-[#4A0E1B] w-full sm:w-[250px] justify-between shadow-lg",
    isHovered ? "pl-[12px] pr-[24px] flex-row-reverse" : "pl-[24px] pr-[12px] flex-row"
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.98 }}
        className={buttonClass}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      className={buttonClass}
    >
      {content}
    </motion.button>
  );
}

export default function FooterCTA({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    
    // Load Instagram embed script
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };
    } else {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.45, 0.32, 0.9] as const,
      },
    },
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <footer className={"relative w-full overflow-hidden flex flex-col items-center bg-[#FDFBF7] " + (className || "")}>
        
        {/* Abstract Background Element instead of video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="absolute w-[1200px] h-[1200px] rounded-full bg-gradient-to-tr from-[#F0DADA]/40 via-[#FDFBF7]/10 to-[#C88284]/20 blur-[120px] opacity-60" />
        </div>

        {/* CTA SECTION */}
        <section className="w-full relative pt-[140px] pb-0 overflow-hidden flex flex-col items-center">
          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-[96px] relative z-10 flex flex-col items-center">
            <div className="max-w-[1248px] w-full flex flex-col items-center">

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A0E1B] shadow-sm mb-[32px]"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-[13px] font-inter font-semibold uppercase tracking-widest">Your Voice Matters</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-[800px] text-center text-[#4A0E1B] font-bold text-[48px] md:text-[80px] leading-[1.1] md:leading-[88px] tracking-tight md:tracking-[-2px] mb-[24px]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Join the movement to end <span className="italic text-[#C88284]">period stigma.</span>
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-[660px] text-center text-[#4A0E1B] font-inter text-lg md:text-[22px] leading-[1.6] md:leading-[34px] opacity-80 mb-[64px]"
              >
                We organize impactful seminars at schools and institutes, and collaborate with NGOs to foster education and awareness. Join us to make a difference in your community.
              </motion.p>

              {/* Instagram Embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full flex justify-center mt-4"
              >
                <div dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/Ddea49aE6jb/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/Ddea49aE6jb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/Ddea49aE6jb/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by @periodt.official_</a></p></div></blockquote>` }} />
              </motion.div>

            </div>
          </div>
        </section>

        {/* FOOTER LINKS SECTION */}
        <div className="relative w-full flex flex-col items-center mt-12">
          <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-[96px] pt-[64px] pb-[40px] flex flex-col items-start bg-transparent">
            
            <div className="w-full h-[1px] bg-[#4A0E1B]/10 mb-16" />

            {/* Content Row */}
            <motion.div
              className="w-full lg:w-[1248px] pb-[60px] lg:pb-[96px] flex flex-col lg:flex-row items-start gap-[60px] lg:gap-[130px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Left Column */}
              <div className="w-full lg:w-[440px] flex flex-col gap-6">
                <motion.div variants={itemVariants}>
                  <span className="font-playfair text-4xl font-bold text-[#4A0E1B] tracking-tight">Periodt.</span>
                </motion.div>
                <motion.p
                  variants={itemVariants}
                  className="text-[#4A0E1B] font-inter text-[18px] font-normal leading-[28px] opacity-80 mt-2"
                >
                  Dedicated to breaking the silence, providing education, and advocating for menstrual equity worldwide.
                </motion.p>

                {/* Social */}
                <motion.div variants={itemVariants} className="flex gap-4 mt-4">
                  <a href="https://www.instagram.com/periodt.official_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#4A0E1B]/5 hover:bg-[#4A0E1B]/10 flex items-center justify-center text-[#4A0E1B] transition-colors">
                    <Instagram size={20} strokeWidth={2} />
                  </a>
                </motion.div>
              </div>

              {/* Right Column (Link Lists) */}
              <div className="lg:ml-auto grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-12 lg:gap-[80px] w-full lg:w-auto mt-4 lg:mt-0">
                {/* Learn */}
                <div className="flex flex-col gap-[20px]">
                  <motion.h4
                    variants={itemVariants}
                    className="text-[#4A0E1B] text-[20px] font-bold font-playfair"
                  >Learn</motion.h4>
                  <ul className="flex flex-col gap-[16px]">
                    {["The Cycle", "Myths vs Facts", "Endometriosis", "PCOS"].map((link: string) => (
                      <motion.li key={link} variants={itemVariants}>
                        <a href="#" className="text-[#4A0E1B] font-inter text-[16px] font-medium opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Take Action */}
                <div className="flex flex-col gap-[20px]">
                  <motion.h4
                    variants={itemVariants}
                    className="text-[#4A0E1B] text-[20px] font-bold font-playfair"
                  >Action</motion.h4>
                  <ul className="flex flex-col gap-[16px]">
                    {["Donate Products", "Sign Petitions", "Volunteer", "Partner with Us"].map((link: string) => (
                      <motion.li key={link} variants={itemVariants}>
                        <a href="#" className="text-[#4A0E1B] font-inter text-[16px] font-medium opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Organization */}
                <div className="flex flex-col gap-[20px]">
                  <motion.h4
                    variants={itemVariants}
                    className="text-[#4A0E1B] text-[20px] font-bold font-playfair"
                  >Org</motion.h4>
                  <ul className="flex flex-col gap-[16px]">
                    {["About Us", "Our Impact", "Careers", "Contact"].map((link: string) => (
                      <motion.li key={link} variants={itemVariants}>
                        <a href="#" className="text-[#4A0E1B] font-inter text-[16px] font-medium opacity-70 hover:opacity-100 transition-opacity">{link}</a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Bottom Text Row */}
            <motion.div
              className="w-full lg:w-[1248px] pt-8 border-t border-[#4A0E1B]/10 flex flex-col lg:flex-row items-center justify-between gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-[#4A0E1B] font-inter text-[15px] font-medium opacity-70 text-center lg:text-left">
                &copy; 2026 Periodt Awareness. All rights reserved.
              </div>

              <div className="flex items-center gap-8 text-[#4A0E1B] font-inter text-[15px] font-medium opacity-70">
                <a href="#" className="hover:opacity-100 hover:underline underline-offset-4 transition-all">Privacy Policy</a>
                <a href="#" className="hover:opacity-100 hover:underline underline-offset-4 transition-all">Terms of Service</a>
              </div>
            </motion.div>

          </div>
        </div>
      </footer>
    </>
  );
}
