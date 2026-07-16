"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Murshid = () => {
  // প্যারেন্ট কন্টেইনারের এনিমেশন ভ্যারিয়েন্ট (বাম থেকে প্রবেশ করবে)
  const cardVariants = {
    hidden: { opacity: 0, x: -100 }, // শুরুতে স্ক্রিনের বামে ১০০px দূরে এবং অদৃশ্য থাকবে
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, // এনিমেশন ০.৮ সেকেন্ড ধরে চলবে
        ease: "easeOut",
        when: "beforeChildren", // আগে মেইন কার্ডটি আসবে, তারপর ভেতরের এলিমেন্টগুলো
        staggerChildren: 0.2 // ভেতরের এলিমেন্টগুলোর মাঝে ০.২ সেকেন্ডের গ্যাপ থাকবে
      } 
    }
  };

  // ভেতরের টেক্সট ও ইমেজের জন্য এনিমেশন ভ্যারিয়েন্ট
  const childVariants = {
    hidden: { opacity: 0, x: -30 }, // বামে ৩০px থেকে শুরু হবে
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 overflow-hidden">
      {/* মেইন ব্যানার কার্ড — Framer Motion dynamic container */}
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible" // স্ক্রিনে আসার সাথে সাথে এনিমেশন ট্রিগার হবে
        viewport={{ once: true, amount: 0.2 }} // কেবল একবারই এনিমেট হবে
        className="relative overflow-hidden bg-gradient-to-br from-[#0b3311] via-[#124e1b] to-[#07240c] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-yellow-600/20 z-10"
      >
        
        {/* সূক্ষ্ম সুফি আর্ট জ্যামিতিক ওয়াটারমার্ক ব্যাকগ্রাউন্ড */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-100 via-emerald-950 to-black"></div>
        
        {/* গোল্ডেন কর্নার ফ্রেম ইফেক্ট */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-500/30 rounded-tl-lg pointer-events-none"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-500/30 rounded-tr-lg pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-500/30 rounded-bl-lg pointer-events-none"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-500/30 rounded-br-lg pointer-events-none"></div>

        {/* বাম পাশের ইমেজ কন্টেন্ট (মেহরাব আকৃতির ফ্রেম — গোল্ডেন আউটলাইন সহ) */}
        <motion.div variants={childVariants} className="flex-shrink-0 z-10 relative">
          {/* ছবির পেছনের আধ্যাত্মিক গ্লো ইফেক্ট */}
          <div className="absolute -inset-1 bg-gradient-to-b from-yellow-500/25 to-emerald-500/10 rounded-t-[110px] rounded-b-[45px] blur-lg opacity-75"></div>
          
          <div className="w-[280px] h-[330px] md:w-[320px] md:h-[390px] bg-[#0c3111] border-2 border-yellow-500/30 rounded-t-[100px] rounded-b-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group">
            {/* মেহরাব শেপের ফ্রেম ইমপ্লিমেন্টেশন */}
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ 
                backgroundImage: `url('/Murshid.jpg')`, 
              }}
            />
            {/* ছবির নিচের দিকের সফট শ্যাডো গ্র্যাডিয়েন্ট */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* ডান পাশের টেক্সট কন্টেন্ট */}
        <div className="flex-1 z-10 space-y-6 max-w-2xl text-center md:text-left">
          
          {/* মুর্শিদ কেবলা ট্যাগ এবং নাম */}
          <motion.div variants={childVariants} className="space-y-3">
            <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500/90 font-semibold bg-yellow-500/10 px-3.5 py-1 rounded-full border border-yellow-500/20 inline-block">
              মুর্শিদ কেবলা
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] tracking-wide">
              হযরত শাহ্ সুফি মুহাম্মদ ইলিয়াছ রজা <span className="text-yellow-400 font-medium text-2xl md:text-3xl block md:inline mt-1 md:mt-0">(মা.জি.আ.)</span>
            </h1>
          </motion.div>

          {/* পদবী ও পরিচয় — মডার্ন সুফি স্টাইল ডিভাইডার সহ */}
          <motion.div variants={childVariants} className="space-y-4 relative py-2">
            {/* কাস্টম বাঁদিকের গোল্ডেন ডেকোরেটিভ বর্ডার (ডেস্কটপে দৃশ্যমান) */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500/70 to-transparent rounded-full"></div>
            
            <div className="md:pl-6 space-y-3">
              <p className="text-lg md:text-xl text-yellow-300/90 font-medium tracking-wide">
                সাজ্জাদানশীন — বড় মিঞা রশীদ মঞ্জিল, ওষখাইন আলী নগর দরবার শরীফ
              </p>
              <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                চেয়ারম্যান — আঞ্জুমানে পাক পঞ্জেতন শাহ্ আলী রজা (রা:) ট্রাষ্ট
              </p>
            </div>
          </motion.div>

          {/* বিস্তারিত বাটন */}
          <motion.div variants={childVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <button className="relative group overflow-hidden px-8 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-[#09260d] font-bold rounded-xl shadow-[0_4px_20px_rgba(202,138,4,0.3)] hover:shadow-[0_4px_25px_rgba(202,138,4,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              <span className="relative z-10">বিস্তারিত জানুন</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
};

export default Murshid;