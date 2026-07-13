"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Star কম্পোনেন্ট এখন আর Math.random ব্যবহার করবে না
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
    // useMemo ব্যবহার করে র‍্যান্ডম ভ্যালুগুলো একবারই জেনারেট করা হবে
    const stars = useMemo(() => 
        Array.from({ length: 40 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 2,
        })), []);

    return (
        <nav className="relative w-full bg-[#066432] p-2 overflow-hidden flex flex-col md:flex-row justify-between items-center shadow-lg min-h-35">
            
            <div className="absolute inset-0 z-0 pointer-events-none">
                {stars.map((s, i) => (
                    <Star 
                        key={i} 
                        style={{ top: s.top, left: s.left }} 
                        duration={s.duration} 
                        delay={s.delay} 
                    />
                ))}
            </div>
            
            <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
                <svg className="absolute bottom-0 left-0 w-[70%] h-75" viewBox="0 0 500 500" preserveAspectRatio="none">
                    <circle cx="500" cy="500" r="320" stroke="#ffffff" strokeWidth="6" fill="none" />
                    <circle cx="500" cy="500" r="340" stroke="#ef4444" strokeWidth="6" fill="none" />
                    <circle cx="500" cy="500" r="360" stroke="#facc15" strokeWidth="6" fill="none" />
                    <circle cx="500" cy="500" r="380" stroke="#3b82f6" strokeWidth="6" fill="none" />
                </svg>

                <svg className="absolute bottom-0 right-0 w-[70%] h-75" viewBox="0 0 500 500" preserveAspectRatio="none">
                    <circle cx="0" cy="500" r="320" stroke="#ffffff" strokeWidth="6" fill="none" />
                    <circle cx="0" cy="500" r="340" stroke="#ef4444" strokeWidth="6" fill="none" />
                    <circle cx="0" cy="500" r="360" stroke="#facc15" strokeWidth="6" fill="none" />
                    <circle cx="0" cy="500" r="380" stroke="#3b82f6" strokeWidth="6" fill="none" />
                </svg>
            </div>

            <div className="z-10 p-4 rounded-md text-white text-xs md:text-sm font-medium">
                {['নারায়ে তাকবীর', 'নারায়ে রিসালত', 'নারায়ে গাউসিয়া', 'নারায়ে হিন্দওয়ালি', 'সম্রাটে বেলায়ত'].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 mb-1">
                        <SmallStar /> {text}
                    </div>
                ))}
            </div>

            <div className="z-10 ml-20 text-center mx-4 mt-10">
                <h4 className='text-white text-lg md:text-2xl mb-9 font-semibold'>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h4>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
                    ওষখাইন <span className="text-yellow-300">আলী নগর দরবার </span>শরিফ
                </h2>
            </div>

            <div className="z-10 p-4 rounded-md text-white text-xs md:text-sm font-medium text-right ">
                {['আল্লাহু আকবর', 'ইয়া রাসুলাল্লাহ (দ.)', 'ইয়া গাউসুল আজম দস্তগীর (র.)', 'ইয়া খাজা আজমীর', 'ইয়া আলী রজা (র.)'].map((text, i) => (
                    <div key={i} className="flex items-center justify-end gap-2 mb-1">
                        {text} <SmallStar />
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;