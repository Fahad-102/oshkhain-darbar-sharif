"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ১. সেমা শরিф আইকন (Whirling Dervish)
const SufiDanceIcon = () => (
  <svg className="w-16 h-16 text-amber-600/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.5 3h1a1.5 1.5 0 0 1 1.5 1.5v2h-4v-2A1.5 1.5 0 0 1 11.5 3z" />
    <circle cx="12" cy="8" r="1.5" />
    <path d="M12 9.5c-2-1-3-2-5-1.5M12 9.5c2 0 3-1.5 5-3" />
    <path d="M12 11c-1.8 0-3 1.5-4 3.5C6.8 17 5 20.5 5 21h14c0-.5-1.8-4-3-6.5-1-2-2.2-3.5-4-3.5z" />
    <path d="M10 14v6M12 13.5v6.5M14 14v6" />
  </svg>
);

// ২. খতমে গাউসিয়া আইকন (ইসলামিক কিতাব ও রেহাল)
const IslamicBookIcon = () => (
  <svg className="w-16 h-16 text-amber-600/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 18l12-10M6 18c.5.5 1.5.5 2 0l4-3" />
    <path d="M18 18L6 8M18 18c-.5.5-1.5.5-2 0l-4-3" />
    <path d="M12 6c-2.5-1.5-5-1.5-8-1v8c3-.5 5.5-.5 8 1" />
    <path d="M12 6c2.5-1.5 5-1.5 8-1v8c-3-.5-5.5-.5-8 1" />
    <path d="M6 8h2M16 8h2M6 10h3M15 10h3" />
  </svg>
);

// ৩. দমের জিকির আইকন (তসবীহ দানা ও অন্তরের নূর)
const TasbihIcon = () => (
  <svg className="w-16 h-16 text-amber-600/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="6" strokeDasharray="3 3" />
    <path d="M12 16v5M10 21h4" />
    <circle cx="12" cy="10" r="1.5" fill="currentColor" className="opacity-40 animate-pulse" />
  </svg>
);

// ৪. বিষু মোবারক ও ওরশ আইকন (পবিত্র দরবারের গম্বুজ ও মিনার)
const DomeIcon = () => (
  <svg className="w-16 h-16 text-amber-600/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16" />
    <path d="M6 20v-4c0-3.5 2.5-6 6-6s6 2.5 6 6v4" />
    <path d="M12 10V4" />
    <path d="M12 4a2 2 0 1 1 2 2" />
  </svg>
);

const teachings = [
  {
    title: "বিষু মোবারক ও ওরশ শরিফ",
    subtitle: "(আত্মিক মিলনমেলা)",
    description: "প্রতি বছর আষাঢ় ও পৌষের শেষে আত্মশুদ্ধি এবং জিয়ন-মরণ পন্থ চেনার পবিত্র আধ্যাত্মিক মিলন মেলা।",
    icon: <DomeIcon />
  },
  {
    title: "সেমা শরিফ",
    subtitle: "(মারফতি সেমা ও গজল)",
    description: "বাবাজানের এবং তাহার আওলাদগনের লিখিত আধ্যাত্মিক সুফি কালাম ও আধ্যাত্মিক প্রেমের সুর, যা কলবকে জাগ্রত করে এবং খোদা প্রেমের ব্যাকুলতা বৃদ্ধি করে। যা প্রতি বৃহস্পতিবার খানকা সমুহে পালিত হয়।",
    icon: <SufiDanceIcon />
  },
  {
    title: "বাবাজানের লিখিত দাওয়াত",
    subtitle: "(ফয়েজ ও বরকত হাসিল)",
    description: "পবিত্র সিলসিলার বিশেষ আমল ও দোয়া, যা আত্মার প্রশান্তি ও কঠিন মুসিবত থেকে মুক্তির উসিলা হিসেবে পঠিত হয়। প্রতি আরবি মাসের চাঁদের ১১ তারিখ খানকা সমুহে পালিত হয়।",
    icon: <IslamicBookIcon />
  },
  {
    title: "পীরের অজিফা ও মোরাকাবা",
    subtitle: "(অনবরত স্মরণ ও ধ্যান)",
    description: "নিঃশ্বাসে নিঃশ্বাসে খোদার জিকির ও পীরের ধ্যানে মগ্ন থাকা, যা লতিফাগুলোকে সচল ও আল্লাহমুখী করে তোলে।",
    icon: <TasbihIcon />
  },
];

const DarbarTeachings = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <section 
      className="py-20 mt-20 px-6  font-tiro text-center relative overflow-hidden "
     
    >
      {/* লাইট অপাসিটি ওভারলে (ছবির মতন সফট ফিল দেওয়ার জন্য) */}
      <div className="absolute shadow-xl inset-3 bg-white rounded-[2rem]   border border-green-300 pointer-events-none" />

      {/* ছবির মতো চারিদিকের বর্ডার ফ্রেম */}
      <div className="absolute  rounded-[2rem] pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* হেডার অংশ (ছবির সিকোয়েন্স অনুযায়ী ফ্লিপ করা) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-950 mb-3 font-tiro tracking-wide">
            ত্বরিকতের মূল আমল ও শিক্ষা
          </h2>
          
          <span className="text-emerald-800 text-lg md:text-xl font-semibold block mb-4 tracking-wider">
            আধ্যাত্মিক সাধনা ও শিক্ষা
          </span>

          <div className="w-24 h-[1px] bg-amber-600/40 mx-auto mb-6" />

          <p className="max-w-3xl mx-auto text-gray-800 text-sm md:text-base leading-relaxed font-medium opacity-90">
            ওষখাইন দরবার শরীফের সিলসিলাভুক্ত আশেকান ও মুরিদানদের আত্মিক পরিশুদ্ধি এবং আল্লাহর সান্নিধ্য লাভের জন্য এই মৌলিক আমলগুলোর চর্চা অপরিহার্য।
          </p>
        </motion.div>

        {/* ৪ কলামের ছবির মতো চমৎকার গ্রিড */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teachings.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUpVariants}
              className="flex flex-col items-center p-7 bg-[#faf6ee] rounded-2xl border border-amber-800/10 shadow-[0_4px_20px_rgba(139,92,26,0.03)] hover:shadow-[0_10px_30px_rgba(139,92,26,0.08)] hover:bg-[#f6f0e2] hover:border-amber-600/30 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {/* আইকন কন্টেইনার */}
              <div className="w-24 h-24 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              {/* টাইটেল */}
              <h3 className="text-xl md:text-2xl font-bold text-emerald-950 mb-1.5 group-hover:text-amber-800 transition-colors duration-300">
                {item.title}
              </h3>

              {/* সাব-টাইটেল */}
              <span className="text-sm text-emerald-800 font-semibold mb-3 tracking-wide">
                {item.subtitle}
              </span>

              {/* ডেসক্রিপশন (ছবির মতো ৩/৪ লাইন ফিক্সড) */}
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed text-center font-medium opacity-90 max-w-[250px] flex-grow">
                {item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description}
              </p>
              
              <span className="text-xs text-amber-700 font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                বিস্তারিত পড়ুন →
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* বিস্তারিত দেখার জন্য পপআপ মোডাল */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="bg-[#fefcf9] rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl relative text-center border border-amber-600/30"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-amber-800 p-2 rounded-full hover:bg-amber-50 transition-colors"
                onClick={() => setSelectedIndex(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <div className="w-24 h-24 flex items-center justify-center mb-6 mx-auto">
                {teachings[selectedIndex].icon}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-2">
                {teachings[selectedIndex].title}
              </h3>
              
              <span className="text-base text-amber-700 font-semibold block mb-5">
                {teachings[selectedIndex].subtitle}
              </span>
              
              <p className="text-gray-800 text-sm md:text-base leading-relaxed text-justify font-medium">
                {teachings[selectedIndex].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DarbarTeachings;