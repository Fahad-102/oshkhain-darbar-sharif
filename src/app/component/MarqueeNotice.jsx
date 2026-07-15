"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MarqueeNotice = () => {
  const noticeText = "হযরত শাহ্ আলী রজা কানু শাহ (রহঃ) এর সর্বশ্রেষ্ঠ অবদান ও কারামত জাহেরী নির্দেশিত বিষু মোবারক যা প্রতি বছর পঞ্জিকার তারিখ বর্ষ মতে আষাঢ়ের শেষ ও পৌষের শেষ ৩ দিন ব্যাপী রশিদ মঞ্জিলে পালিত হয়।";

  return (
    <div className="bg-red-900/95 text-white py-3 border-y border-green-700/50 flex overflow-hidden select-none font-tiro relative z-10">
      
      {/* বাম পাশে একটি আকর্ষণীয় ফিক্সড "ঘোষণা" ব্যাজ */}
      <div className="bg-green-700 text-white px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-wider flex items-center justify-center shrink-0 shadow-md ml-4 rounded-md z-20">
        📢 বিশেষ ঘোষণা
      </div>

      {/* মারকুই কন্টেইনার */}
      <div className="relative w-full flex items-center overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap text-sm md:text-base font-semibold pl-6 gap-20"
          animate={{ x: [0, -1035] }} // টেক্সটের লেন্থ অনুযায়ী স্ক্রলিং রেঞ্জ
          transition={{
            ease: "linear",
            duration: 25, // স্ক্রলিংয়ের স্পিড নিয়ন্ত্রণ করতে এই সংখ্যা বাড়াতে বা কমাতে পারেন
            repeat: Infinity,
          }}
          // মাউস রাখলে থামবে, সরালে আবার চলবে
          whileHover={{ animationPlayState: 'paused' }} 
        >
          {/* লুপ যাতে ভেঙে না যায় বা টেক্সটের মাঝে ফাঁকা না পড়ে, সেজন্য টেক্সট কয়েকবার রিপিট করা হলো */}
          <span>{noticeText}</span>
          <span className="text-yellow-400 font-bold">★</span>
          <span>{noticeText}</span>
          <span className="text-yellow-400 font-bold">★</span>
          <span>{noticeText}</span>
          <span className="text-yellow-400 font-bold">★</span>
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeNotice;