"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const conditions = [
  {
    id: "pcos",
    name: "Polycystic Ovary Syndrome (PCOS)",
    symptoms: ["Irregular periods", "Excess androgen (facial hair, acne)", "Polycystic ovaries on ultrasound"],
    info: "A hormonal disorder common among women of reproductive age. It can cause prolonged or infrequent menstrual periods and affects how the ovaries function."
  },
  {
    id: "endometriosis",
    name: "Endometriosis",
    symptoms: ["Severe pelvic pain", "Painful intercourse", "Heavy bleeding", "Infertility issues"],
    info: "A condition where tissue similar to the lining of the uterus grows outside the uterus, causing extreme pain, especially during menstruation."
  },
  {
    id: "pmdd",
    name: "Premenstrual Dysphoric Disorder (PMDD)",
    symptoms: ["Severe mood shifts", "Depression or anxiety", "Overwhelming anger", "Physical bloating"],
    info: "A much more severe form of PMS that causes severe emotional and physical symptoms in the week or two before your period."
  },
  {
    id: "fibroids",
    name: "Uterine Fibroids",
    symptoms: ["Heavy menstrual bleeding", "Pelvic pressure or pain", "Frequent urination"],
    info: "Noncancerous growths of the uterus that often appear during childbearing years. They can range from undetectable to bulky masses that distort the uterus."
  }
];

export default function Conditions() {
  const [openId, setOpenId] = useState<string | null>("pcos");

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-[#F0DADA]/40 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-[40px] md:text-[56px] font-bold text-[#4A0E1B] leading-tight mb-6">
            It's Not <span className="italic text-[#C88284]">Just Cramps</span>
          </h2>
          <p className="font-inter text-lg text-[#4A0E1B]/70 max-w-2xl mx-auto">
            Validating the invisible struggles. If your period is debilitating, it's worth a conversation with a doctor. You know your body best.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {conditions.map((condition) => (
            <div 
              key={condition.id}
              className={`border transition-all duration-300 rounded-3xl overflow-hidden ${
                openId === condition.id ? "border-[#4A0E1B]/20 bg-[#FDFBF7] shadow-md" : "border-[#4A0E1B]/10 bg-white hover:border-[#4A0E1B]/30"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === condition.id ? null : condition.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#4A0E1B]">
                  {condition.name}
                </h3>
                <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  openId === condition.id ? "bg-[#4A0E1B] text-white" : "bg-[#F0DADA] text-[#4A0E1B]"
                }`}>
                  {openId === condition.id ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openId === condition.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <p className="font-inter text-lg text-[#4A0E1B]/80 leading-relaxed mb-6">
                          {condition.info}
                        </p>
                        <div className="bg-white p-5 rounded-2xl border border-[#4A0E1B]/10">
                           <h4 className="font-inter font-semibold text-[#4A0E1B] mb-3 text-sm uppercase tracking-wider">Common Symptoms</h4>
                           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                             {condition.symptoms.map((sym, i) => (
                               <li key={i} className="font-inter text-sm text-[#4A0E1B]/80 flex items-start gap-2">
                                 <span className="text-[#C88284]">•</span> {sym}
                               </li>
                             ))}
                           </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
