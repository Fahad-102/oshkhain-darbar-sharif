"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Star = ({ style, duration, delay }) => (
    <motion.div
        className="absolute w-1 h-1 bg-yellow-100 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration, repeat: Infinity, delay }}
        style={style}
    />
);

const SmallStar = () => (
    <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-yellow-400 inline-block"
    >
        ◆
    </motion.span>
);

const Navbar = () => {
    const stars = useMemo(() => 
        Array.from({ length: 40 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 2,
        })), []);

    return (
        <nav className="relative w-full bg-[#066432] p-2 overflow-hidden flex justify-between items-center shadow-lg border-b-4 border-b-amber-600 min-h-[140px]">
            
            <div className="absolute inset-0 z-0 pointer-events-none">
                {stars.map((s, i) => (
                    <Star key={i} style={{ top: s.top, left: s.left }} duration={s.duration} delay={s.delay} />
                ))}
            </div>
            
            {/* আর্কস কন্টেইনার - ল্যাপটপ এবং বড় স্ক্রিনে দেখাবে */}
            <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden hidden lg:block">
                <svg className="absolute bottom-0 left-0 w-[65%] h-[170%]" viewBox="0 0 500 500" preserveAspectRatio="none">
                    <circle cx="500" cy="500" r="320" stroke="#ffffff" strokeWidth="6" fill="none" />
                    <circle cx="500" cy="500" r="340" stroke="#ef4444" strokeWidth="6" fill="none" />
                    <circle cx="500" cy="500" r="360" stroke="#facc15" strokeWidth="6" fill="none" />
                    <circle cx="500" cy="500" r="380" stroke="#3b82f6" strokeWidth="6" fill="none" />
                </svg>

                <svg className="absolute bottom-0 right-0 w-[65%] h-[170%]" viewBox="0 0 500 500" preserveAspectRatio="none">
                    <circle cx="0" cy="500" r="320" stroke="#ffffff" strokeWidth="6" fill="none" />
                    <circle cx="0" cy="500" r="340" stroke="#ef4444" strokeWidth="6" fill="none" />
                    <circle cx="0" cy="500" r="360" stroke="#facc15" strokeWidth="6" fill="none" />
                    <circle cx="0" cy="500" r="380" stroke="#3b82f6" strokeWidth="6" fill="none" />
                </svg>
            </div>

            {/* বাম দিকের কন্টেন্ট */}
            <div className="z-10 text-white hidden md:block text-[10px] lg:text-sm font-medium flex-1">
                {['নারায়ে তাকবীর', 'নারায়ে রিসালত', 'নারায়ে গাউসিয়া', 'নারায়ে হিন্দওয়ালি', 'সম্রাটে বেলায়ত'].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 mb-0.5">
                        <SmallStar /> {text}
                    </div>
                ))}
            </div>

            {/* মাঝের কন্টেন্ট - লোগো এবং টেক্সট সেন্টারে */}
            <div className="z-10 text-center flex flex-col items-center mt-5 flex-2 px-2">
                <h4 className='text-white text-[10px] md:text-sm lg:text-lg font-semibold  whitespace-nowrap'>
                    بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </h4>
                <div>
                    <Image
                        src={"/Logo.png"}
                        alt='logo'
                        width={80}
                        height={60}
                        className="object-contain w-16 md:w-20 lg:w-24"
                        suppressHydrationWarning
                    />
                </div>
                <h2 className="text-sm md:text-xl lg:text-[52px] font-bold text-white tracking-wide leading-tight">
                    ওষখাইন <span className="text-yellow-300">আলী নগর দরবার </span>শরিফ
                </h2>
            </div>

            {/* ডান দিকের কন্টেন্ট */}
            <div className="z-10 text-white hidden md:block text-[10px] lg:text-sm font-medium text-right flex-1">
                {['আল্লাহু আকবর', 'ইয়া রাসুলাল্লাহ (দ.)', 'ইয়া গাউসুল আজম দস্তগীর (র.)', 'ইয়া খাজা আজমীর', 'ইয়া আলী রজা (র.)'].map((text, i) => (
                    <div key={i} className="flex items-center justify-end gap-2 mb-0.5">
                        {text} <SmallStar />
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;