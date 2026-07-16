"use client";

import React from 'react';
import { motion } from 'framer-motion';

const DarbarMap = () => {
  // ম্যাপ কন্টেইনারের জন্য নিচ থেকে উপরে ওঠার এনিমেশন
  const mapVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 // শুরুতে ৫০px নিচে থাকবে
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 overflow-hidden">
      <motion.div
        variants={mapVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative overflow-hidden bg-gradient-to-br from-[#0b3311] via-[#124e1b] to-[#07240c] text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-yellow-600/20 z-10"
      >
        {/* সূক্ষ্ম সুফি আর্ট জ্যামিতিক ওয়াটারমার্ক ব্যাকগ্রাউন্ড */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-100 via-emerald-950 to-black"></div>

        {/* গোল্ডেন কর্নার ফ্রেম ইফেক্ট */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-yellow-500/30 rounded-tl-lg pointer-events-none"></div>
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-yellow-500/30 rounded-tr-lg pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-yellow-500/30 rounded-bl-lg pointer-events-none"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-yellow-500/30 rounded-br-lg pointer-events-none"></div>

        {/* শিরোনাম */}
        <div className="text-center mb-6 md:mb-8 z-10 relative">
          <span className="text-xs md:text-sm uppercase tracking-widest text-yellow-500/90 font-semibold bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 inline-block mb-3">
            লোকেশন ম্যাপ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            দরবার শরীফের অবস্থান
          </h2>
          <p className="text-sm text-gray-300 mt-2 font-light">
            ওষখাইন আলী নগর দরবার শরীফ, আনোয়ারা, চট্টগ্রাম
          </p>
        </div>

        {/* গুগল ম্যাপ আইফ্রেম কন্টেইনার — প্রিমিয়াম গোল্ডেন ফ্রেম সহ */}
        <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-yellow-500/20 shadow-2xl bg-emerald-950/40">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.2153009170443!2d91.95655257536711!3d22.231908479735804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad229cae07270b%3A0xb7e570ff6a0497b1!2z8J2QjvCdkKzwnZCh8J2QpPCdkKHwnZCa8J2QovCdkKcg8J2Qg_CdkKjwnZCr8J2Qm_CdkJrwnZCrIPCdkJLwnZCh8J2QmvCdkKvwnZCi8J2QnyAo4KaT4Ka34KaW4Ka-4KaH4KaoIOCmpuCmsOCmrOCmvuCmsCDgprbgprDgp4Dgpqsp!5e0!3m2!1sen!2sbd!4v1784200999766!5m2!1sen!2sbd" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full grayscale-[15%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>

      </motion.div>
    </div>
  );
};

export default DarbarMap;