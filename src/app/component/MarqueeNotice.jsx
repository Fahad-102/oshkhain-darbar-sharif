"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MarqueeNotice = () => {
  const noticeText = "হযরত শাহ্ আলী রজা কানু শাহ (রহঃ) এর সর্বশ্রেষ্ঠ অবদান ও কারামত জাহেরী নির্দেশিত বিষু মোবারক যা প্রতি বছর পঞ্জিকার তারিখ বর্ষ মতে আষাঢ়ের শেষ ও পৌষের শেষ ৩ দিন ব্যাপী রশিদ মঞ্জিলে পালিত হয়।";

  return (
    <div className="bg-emerald-950 text-stone-100 py-3.5 border-y border-amber-600/30 flex items-center overflow-hidden select-none font-tiro relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
      
      {/* বাম পাশে প্রিমিয়াম "সর্বশেষ নোটিশ" ব্যাজ */}
      <div className="bg-linear-to-r from-amber-600 to-amber-500 text-emerald-950 px-4 py-1.5 text-xs md:text-sm font-bold tracking-wider flex items-center justify-center shrink-0 shadow-md ml-6 rounded-md z-20 border border-amber-400/30 animate-pulse">
        📢 সর্বশেষ আপডেট
      </div>

      {/* মারকুই কন্টেইনার */}
      <div className="relative w-full flex items-center overflow-hidden">
        {/* দুই পাশে স্মুথ শ্যাডো ইফেক্ট যাতে লেখাগুলো আস্তে আস্তে মিলিয়ে যায় */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-emerald-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-emerald-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap text-sm md:text-base pl-6 gap-16 font-medium"
          animate={{ x: [0, -1100] }} // টেক্সটের লেন্থ অনুযায়ী পারফেক্ট স্ক্রলিং রেঞ্জ
          transition={{
            ease: "linear",
            duration: 28, // পড়ার সুবিধার্থে স্পিড কিছুটা স্মুথ ও স্লো করা হয়েছে
            repeat: Infinity,
          }}
          // মাউস হোভার করলে টেক্সট পজ হবে
          whileHover={{ animationPlayState: 'paused' }} 
        >
          {/* লুপ যাতে টেক্সটের মাঝে ফাঁকা না পড়ে, সেজন্য স্টার দিয়ে রিপিট করা হলো */}
          <span className="hover:text-amber-400 transition-colors duration-200">{noticeText}</span>
          <span className="text-amber-500 font-bold animate-spin-slow">✦</span>
          <span className="hover:text-amber-400 transition-colors duration-200">{noticeText}</span>
          <span className="text-amber-500 font-bold animate-spin-slow">✦</span>
          <span className="hover:text-amber-400 transition-colors duration-200">{noticeText}</span>
          <span className="text-amber-500 font-bold animate-spin-slow">✦</span>
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeNotice;