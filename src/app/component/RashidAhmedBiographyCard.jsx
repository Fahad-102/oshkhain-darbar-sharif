"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const RashidAhmedBiographyCard = () => {
  return (
    <section className="py-16 px-6 bg-white font-tiro overflow-hidden">
      {/* motion.div যুক্ত করা হয়েছে যা ডান থেকে স্লাইড করবে */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-green-100 transition-all duration-300 hover:shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row-reverse">
          
          {/* ডান পাশে মাজার বা রওজা শরিফের ছবি */}
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[480px]">
            <Image
              src="/RashidAhemdMiah.jpeg" 
              alt="হযরত শাহ্ রশিদ আহমদ কেবলা (রঃ) দরগাহ্"
              fill
              className="object-cover"
              sizes="(max-w-1024px) 100vw, 50vw"
              priority
              suppressHydrationWarning
            />
            {/* ছবির ওপরে হালকা গ্রিন গ্রেডিয়েন্ট ওভারলে */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-green-950/40 to-transparent"></div>
          </div>

          {/* বাম পাশে সংক্ষিপ্ত পরিচিতি ও বাটন */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 space-y-6 flex flex-col justify-center">
            <span className="text-green-700 text-sm font-semibold tracking-wider uppercase block">
              বেলায়েতের উজ্জ্বল নক্ষত্র
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-green-950 leading-tight">
              হযরত শাহ্ রশিদ আহমদ কেবলা 
              <span className="text-xl md:text-3xl font-semibold text-red-800">
                (রঃ)
              </span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              তিনি ছিলেন ওষখাইন আলী নগর দরবার শরীফের সাত পিস্তানী ফকির ও এক মহান আধ্যাত্মিক সাধক। মহাকবি কানু শাহ্ (রঃ)-এর বংশের সপ্তম পুরুষ হিসেবে তিনি তাঁর পিতার সান্নিধ্যে দীর্ঘ ২৪ বছর কঠোর সাধনা ও রিয়াজত সম্পন্ন করেন। কঠোর ইবাদত, অলৌকিক কারামত এবং আত্মিক পরিশুদ্ধির এক অনন্য দৃষ্টান্ত স্থাপন করে গেছেন এই কামেল ওলী।
            </p>

            {/* সংক্ষিপ্ত ফিচার হাইলাইটস */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100 text-xs md:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                <span>জন্ম: ১৯২৩ খ্রিষ্টাব্দ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                <span>২৪ বছর কঠোর রিয়াজত</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                <span>নূরের অলৌকিক কারামত</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                <span>সপ্তম পুরুষ (সাত পিস্তান)</span>
              </div>
            </div>

            {/* মূল বায়োগ্রাফি পেজে যাওয়ার লিঙ্ক বাটন */}
            <div className="pt-4">
              <Link 
                href="/rashidAhmedBiography"
                className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                বিস্তারিত জীবনী পড়ুন
                <svg 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default RashidAhmedBiographyCard;