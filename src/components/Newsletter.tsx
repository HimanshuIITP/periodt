"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";

export default function Newsletter() {
  const { ref, isInView } = useInView(0.2);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      ref={ref}
      className="bg-burgundy-dark py-24 lg:py-32"
      aria-label="Newsletter signup"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="headline-xl text-4xl text-cream sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Stay in the loop.
            <br />
            <span className="text-blush">Not in the dark.</span>
          </motion.h2>

          <motion.p
            className="mt-5 text-base text-cream/50 lg:text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Period care, education, product drops and things worth talking about.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border border-cream/15 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/30 focus:border-cream/40 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-cream px-8 py-4 text-sm font-semibold uppercase tracking-wider text-burgundy-dark transition-colors hover:bg-ivory"
            >
              {submitted ? "You're in!" : "Join Periodt"}
            </button>
          </motion.form>

          {submitted && (
            <motion.p
              className="mt-4 text-sm text-cream/60"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Welcome to Periodt. We&rsquo;ll keep it meaningful.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
