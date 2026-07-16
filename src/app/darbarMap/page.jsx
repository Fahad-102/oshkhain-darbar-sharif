"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Navigation, ArrowRight } from 'lucide-react';
import Darbarmap from '../component/DarbarMap'; // আপনার কম্পোনেন্টের নাম অনুযায়ী ইম্পোর্ট করা হয়েছে

const DarbarMapPage = () => {
  // এনিমেশন ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // দরবার শরীফের সম্মানিত ব্যক্তিত্ব ও যোগাযোগের তথ্য
  const contacts = [
    {
      role: "চেয়ারম্যান — আঞ্জুমানে পাক পঞ্জেতন শাহ্ আলী রজা (রা:) ট্রাষ্ট",
      name: "পীরে ত্বরিকত হযরত শাহ্ সুফি মুহাম্মদ ইলিয়াছ রজা (মা.জি.আ.)",
      designation: "সাজ্জাদানশীন — বড় মিঞা রশীদ মঞ্জিল, ওষখাইন আলী নগর দরবার শরীফ",
      phone: "01819-621402",
    },
    {
      role: "ভাইস চেয়ারম্যান — আঞ্জুমানে পাক পঞ্জেতন শাহ্ আলী রজা (রা:) ট্রাষ্ট",
      name: "শাহজাদা মাওলানা মুহাম্মদ আব্দুল কাদের চাঁদ মিয়া",
      designation: "নায়েবে সাজ্জাদানশীন — বড় মিঞা রশীদ মঞ্জিল, ওষখাইন আলী নগর দরবার শরীফ",
      phone: "01819-349943",
    },
    {
      role: "জেনারেল সেক্রেটারী — আঞ্জুমানে পাক পঞ্জেতন শাহ্ আলী রজা (রা:) ট্রাষ্ট",
      name: "শাহজাদা মাওলানা মুহাম্মদ নেছার মিয়া",
      designation: "নায়েবে সাজ্জাদানশীন — বড় মিঞা রশীদ মঞ্জিল, ওষখাইন আলী নগর দরবার শরীফ",
      phone: "01822-867388",
    }
  ];

  // ইমেজ কার্ড থেকে সংগৃহীত পথ পরিচিতির ডাটা
  const routes = [
    {
      title: "রুট ১ (কালুরঘাট হয়ে)",
      steps: ["কালুরঘাট ব্রিজ", "মনসা বাদামতল", "শান্তিরহাট", "ছত্তারহাট", "ওষখাইন দরবার শরীফ"]
    },
    {
      title: "রুট ২ (বহদ্দারহাট ও নতুন ব্রিজ হয়ে)",
      steps: ["বহদ্দারহাট", "নতুন ব্রিজ", "শান্তিরহাট", "ছত্তারহাট", "ওষখাইন দরবার শরীফ"]
    },
    {
      title: "রুট ৩ (আনোয়ারা হয়ে)",
      steps: ["বহদ্দারহাট", "নতুন ব্রিজ", "আনোয়ারা জয়কালীহাট", "ছত্তারহাট", "ওষখাইন দরবার শরীফ"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#071d0b]  `bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))]` from-[#0d3f16] via-[#071d0b] to-black text-white py-12 px-4 md:px-8">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto space-y-12"
      >
        {/* হেডার সেকশন */}
        <motion.div variants={itemVariants} className="text-center space-y-3">
          <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500/90 font-semibold bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 inline-block">
            যোগাযোগ ও পথ নির্দেশিকা
          </span>
          <h1 className="text-3xl pt-3 md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white via-yellow-200 to-amber-400 drop-shadow-lg">
            ওষখাইন আলী নগর দরবার শরীফ
          </h1>
          <p className="text-sm md:text-base text-gray-300 font-light max-w-2xl mx-auto">
            হযরত শাহ্ সুফী আলী রজা (রহঃ) - এর মাজার শরীফ
          </p>
        </motion.div>

        {/* ২. যোগাযোগের বিবরণ কার্ডসমূহ */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden bg-gradient-to-b from-[#0e3b15] to-[#07210c] p-6 rounded-2xl border border-yellow-600/10 hover:border-yellow-500/30 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* কর্নার ডেকোরেশন */}
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-yellow-500/20 group-hover:border-yellow-500/40 transition-colors"></div>
              
              <div className="space-y-4">
                <span className="text-xs text-yellow-500/90 font-medium tracking-wide block border-b border-yellow-500/10 pb-2">
                  {contact.role}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors leading-tight">
                  {contact.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {contact.designation}
                </p>
              </div>

              {/* ফোন কল বাটন */}
              <div className="pt-6">
                <a 
                  href={`tel:${contact.phone.replace(/-/g, '')}`} 
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-yellow-500/10 hover:bg-yellow-500 text-yellow-400 hover:text-[#07210c] font-semibold text-sm rounded-xl border border-yellow-500/20 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  {contact.phone}
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ৩. পথ পরিচিতি ডিরেকশন সেকশন (ইমেজ অনুসারে ডিজাইনকৃত) */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#0b3311] via-[#124e1b] to-[#07240c] rounded-3xl p-6 md:p-10 border border-yellow-600/20 shadow-2xl relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-100 to-black"></div>
          
          <div className="relative z-10 space-y-8">
            <div className="text-center md:text-left border-b border-yellow-500/10 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 flex items-center justify-center md:justify-start gap-2">
                <Navigation className="w-6 h-6 animate-pulse" />
                পথ পরিচিতি (রুট সমূহ)
              </h2>
              <p className="text-xs text-gray-300 mt-1">দরবার শরীফে আসার সহজ যাতায়াত ব্যবস্থা</p>
            </div>

            {/* রুট গ্রিড */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {routes.map((route, rIndex) => (
                <div key={rIndex} className="bg-[#07210c]/60 p-5 rounded-2xl border border-yellow-500/10 space-y-4">
                  <h4 className="text-sm font-bold text-yellow-300 border-b border-yellow-500/10 pb-2">
                    {route.title}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {route.steps.map((step, sIndex) => (
                      <div key={sIndex} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center text-[10px] text-yellow-400 font-bold border border-yellow-500/20">
                          {sIndex + 1}
                        </div>
                        <span className={`text-xs ${sIndex === route.steps.length - 1 ? 'text-yellow-400 font-bold' : 'text-gray-300'}`}>
                          {step}
                        </span>
                        {sIndex < route.steps.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-yellow-500/30 ml-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ৪. সাধারণ ব্রিফিং নোট */}
            <div className="bg-[#061e0b] p-4 md:p-6 rounded-2xl border border-yellow-500/15 flex flex-col md:flex-row items-center gap-4">
              <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-sm font-semibold text-yellow-300">সহজ ডিরেকশন:</h4>
                <p className="text-xs md:text-sm text-gray-300 mt-1 leading-relaxed">
                  চট্টগ্রাম শাহ আমানত সেতু (কর্ণফুলী থার্ড ব্রিজ) হতে আনোয়ারাগামী বাসে চড়ে <span className="text-yellow-400 font-semibold">ছত্তার হাট (সাত্তার হাট)</span> স্টেশনে নামতে হবে। সেখান থেকে পূর্ব দিকে ওষখাইন দরবার শরীফ অবস্থিত।
                </p>
              </div>
            </div>
        {/* ১. গুগল ম্যাপ সেকশন */}

        <motion.div variants={itemVariants}>
          <Darbarmap />
        </motion.div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default DarbarMapPage;