"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Periodt/Navbar";
import FooterCTA from "@/components/Periodt/FooterCTA";
import { Mail } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
import Image from "next/image";

const teamMembers = [
  {
    name: "Ananya",
    role: "Co-Founder",
    bio: "Passionate about making period care accessible and sustainable for everyone. Bringing clinical expertise to everyday comfort.",
    image: "/images/team/ananya.png",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
  {
    name: "Kuumud Arora",
    role: "Co-Founder",
    bio: "Obsessed with materials and comfort. Leads the design and innovation of our eco-friendly products.",
    image: "/images/team/kuumud.png",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  },
  {
    name: "Baksheesh kour",
    role: "Co-Founder",
    bio: "Dedicated to reducing our carbon footprint, ensuring ethical sourcing, and building a strong, open community.",
    image: "/images/team/baksheesh.png",
    socials: { linkedin: "#", twitter: "#", mail: "#" }
  }
];

const values = [
  {
    title: "Empathy First",
    description: "We build products based on real stories, pain points, and biological realities."
  },
  {
    title: "Radical Transparency",
    description: "From our ingredients to our supply chain, we hide nothing from our community."
  },
  {
    title: "Uncompromising Quality",
    description: "Period care isn't a luxury. Everyone deserves safe, reliable, and comfortable products."
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-blush selection:text-burgundy-dark flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex-grow relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-rose/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blush/20 rounded-full blur-3xl -z-10" />

        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mt-12 md:mt-24"
        >
          <motion.span 
            variants={fadeUp}
            className="text-burgundy/80 font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            The Team
          </motion.span>
          <motion.h1 
            variants={fadeUp}
            className="headline-xl text-5xl md:text-7xl lg:text-8xl text-burgundy-dark mb-6"
          >
            By women, <br className="hidden md:block" />
            <span className="text-burgundy italic">for everyone.</span>
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-burgundy-dark/70 max-w-2xl mx-auto leading-relaxed"
          >
            We are a team of three founders united by a single mission: to build comfortable, sustainable period care that makes sense for our bodies and the planet.
          </motion.p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeUp} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-cream">
                  <div className="absolute inset-0 bg-burgundy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex gap-4">
                    <a href={member.socials.linkedin} className="text-white hover:text-blush transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href={member.socials.twitter} className="text-white hover:text-blush transition-colors">
                      <TwitterIcon className="w-5 h-5" />
                    </a>
                    <a href={member.socials.mail} className="text-white hover:text-blush transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="headline-md text-2xl text-burgundy-dark mb-1 group-hover:text-burgundy transition-colors">{member.name}</h3>
                  <p className="text-burgundy font-medium text-sm uppercase tracking-wide mb-3">{member.role}</p>
                  <p className="text-burgundy-dark/70 leading-relaxed text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-burgundy text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #FDF6EE 0%, transparent 50%)' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-16 lg:gap-24"
          >
            <motion.div variants={fadeUp} className="lg:w-1/3">
              <h2 className="headline-xl text-4xl md:text-5xl mb-6">Our Core Values</h2>
              <p className="text-cream/80 text-lg">
                The principles that guide every decision we make, from product formulation to community outreach.
              </p>
            </motion.div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeUp} className="border-t border-cream/20 pt-6">
                  <h3 className="text-2xl font-serif font-medium mb-3">{value.title}</h3>
                  <p className="text-cream/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FooterCTA />
    </main>
  );
}
