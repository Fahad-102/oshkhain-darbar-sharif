"use client";

import React from 'react';
import { motion } from 'framer-motion';

// ১. সেমা শরিফ আইকন (Whirling Dervish / সুফি ড্যান্স ভেক্টর)
const SufiDanceIcon = () => (
  <svg className="w-12 h-12 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* টুপি (Sufi Cap) */}
    <path d="M11.5 3h1a1.5 1.5 0 0 1 1.5 1.5v2h-4v-2A1.5 1.5 0 0 1 11.5 3z" />
    {/* মাথা ও মুখাবয়ব (ধ্যানমগ্ন পজিশন) */}
    <circle cx="12" cy="8" r="1.5" />
    {/* হাত দুটি (এক হাত ওপরে আকাশের দিকে ইশারায়, অন্য হাত নিচের দিকে) */}
    <path d="M12 9.5c-2-1-3-2-5-1.5M12 9.5c2 0 3-1.5 5-3" />
    {/* রাজকীয় ঘূর্ণায়মান জামা বা ঘাঘরা (Sufi Skirt in Motion) */}
    <path d="M12 11c-1.8 0-3 1.5-4 3.5C6.8 17 5 20.5 5 21h14c0-.5-1.8-4-3-6.5-1-2-2.2-3.5-4-3.5z" />
    {/* কুঁচকানো জামার ভাঁজসমূহ */}
    <path d="M10 14v6M12 13.5v6.5M14 14v6" />
  </svg>
);

// ২. খতমে গাউসিয়া আইকন (প্রিমিয়াম ইসলামিক কিতাব ও রেহাল - Book Type)
const IslamicBookIcon = () => (
  <svg className="w-12 h-12 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* রেহালের বাম স্ট্যান্ড */}
    <path d="M6 18l12-10M6 18c.5.5 1.5.5 2 0l4-3" />
    {/* রেহালের ডান স্ট্যান্ড */}
    <path d="M18 18L6 8M18 18c-.5.5-1.5.5-2 0l-4-3" />
    {/* উন্মুক্ত কিতাবের বাম পাতা */}
    <path d="M12 6c-2.5-1.5-5-1.5-8-1v8c3-.5 5.5-.5 8 1" />
    {/* উন্মুক্ত কিতাবের ডান পাতা */}
    <path d="M12 6c2.5-1.5 5-1.5 8-1v8c-3-.5-5.5-.5-8 1" />
    {/* কিতাবের ভেতরের লেখা বা লাইন নির্দেশক */}
    <path d="M6 8h2M16 8h2M6 10h3M15 10h3" />
  </svg>
);

// ৩. দমের জিকির আইকন (তসবীহ দানা ও অন্তরের নূর)
const TasbihIcon = () => (
  <svg className="w-12 h-12 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="6" strokeDasharray="3 3" />
    <path d="M12 16v5M10 21h4" />
  </svg>
);

// ৪. বিষু মোবারক ও ওরশ আইকন (পবিত্র দরবারের গম্বুজ ও মিনার)
const DomeIcon = () => (
  <svg className="w-12 h-12 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16" />
    <path d="M6 20v-4c0-3.5 2.5-6 6-6s6 2.5 6 6v4" />
    <path d="M12 10V4" />
    <path d="M12 4a2 2 0 1 1 2 2" />
  </svg>
);

const DarbarTeachings = () => {
  const teachings = [
    {
      title: "সেমা শরিফ",
      subtitle: "(মারফতি সেমা ও গজল)",
      description: "সুফি সাধকদের ভাবাবেগ ও আধ্যাত্মিক প্রেমের সুর, যা কলবকে জাগ্রত করে এবং খোদা প্রেমের ব্যাকুলতা বৃদ্ধি করে।",
      icon: <SufiDanceIcon />
    },
    {
      title: "খতমে গাউসিয়া শরিফ",
      subtitle: "(ফয়েজ ও বরকত হাসিল)",
      description: "পবিত্র সিলসিলার বিশেষ আমল ও দোয়া, যা আত্মার প্রশান্তি ও কঠিন মুসিবত থেকে মুক্তির উসিলা হিসেবে পঠিত হয়।",
      icon: <IslamicBookIcon />
    },
    {
      title: "দমের জিকির ও মোরাকাবা",
      subtitle: "(অনবরত স্মরণ ও ধ্যান)",
      description: "নিঃশ্বাসে নিঃশ্বাসে খোদার জিকির ও পীরের ধ্যানে মগ্ন থাকা, যা লতিফাগুলোকে সচল ও আল্লাহমুখী করে তোলে।",
      icon: <TasbihIcon />
    },
    {
      title: "বিষু মোবারক ও ওরশ",
      subtitle: "(আত্মিক মিলনমেলা)",
      description: "প্রতি বছর আষাঢ় ও পৌষের শেষে আত্মশুদ্ধি এবং জিয়ন-মরণ পন্থ চেনার পবিত্র আধ্যাত্মিক মিলন মেলা।",
      icon: <DomeIcon />
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="py-16 mt-20 px-6 bg-white font-tiro text-center overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* হেডার অ্যানিমেশন */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <span className="text-green-700 text-lg font-semibold block mb-2 tracking-wider">
            আধ্যাত্মিক সাধনা ও শিক্ষা
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-950 mb-6 font-tiro">
            ত্বরিকতের মূল আমল ও শিক্ষা
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed mb-16">
            ওষখাইন দরবার শরীফের সিলসিলাভুক্ত আশেকান ও মুরিদানদের আত্মিক পরিশুদ্ধি এবং আল্লাহর সান্নিধ্য লাভের জন্য এই মৌলিক আমলগুলোর চর্চা অপরিহার্য।
          </p>
        </motion.div>

        {/* ৪ কলামের গ্রিড সেকশন */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teachings.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUpVariants}
              className="flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-green-50/30 group"
            >
              {/* আইকন বক্স */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-50 border border-green-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* টাইটেল */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {item.title}
              </h3>

              {/* সাব-টাইটেল */}
              <span className="text-xs text-green-700 font-medium mb-3 tracking-wide">
                {item.subtitle}
              </span>

              {/* বর্ণনা */}
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[240px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DarbarTeachings;