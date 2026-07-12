"use client";

import React from 'react';
import { motion } from 'framer-motion';

// টেক্সটের পাশের মিটমিট করা স্টার কম্পোনেন্ট
const TwinklingStar = () => (
    <motion.span
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block text-yellow-400 mx-1"
    >
        ✦
    </motion.span>
);

const Navbar = () => {
    // রোলস রয়েস ব্যাকগ্রাউন্ড প্যাটার্ন
    const starSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='%23FFF'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='30' r='0.8'/%3E%3Ccircle cx='90' cy='100' r='1.2'/%3E%3Ccircle cx='150' cy='50' r='0.5'/%3E%3Ccircle cx='180' cy='180' r='1'/%3E%3Ccircle cx='30' cy='150' r='0.7'/%3E%3Ccircle cx='120' cy='10' r='0.6'/%3E%3Ccircle cx='100' cy='190' r='1'/%3E%3C/g%3E%3C/svg%3E`;

    return (
        <nav className="relative flex flex-col md:flex-row justify-between items-center bg-green-900 p-6 border-b-4 border-yellow-600 gap-4 text-center md:text-left overflow-hidden shadow-2xl">
            
            {/* ব্যাকগ্রাউন্ডে হাজার হাজার তারার এফেক্ট */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url("${starSvg}")`,
                    backgroundSize: '200px 200px',
                    opacity: 0.4
                }}
                animate={{
                    opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* বাম দিকের কন্টেন্ট + পাশের স্টার */}
            <div className="text-white hidden md:block md:text-xs z-10 font-medium leading-relaxed">
                <TwinklingStar /> নারায়ে তাকবীর <br/>
                <TwinklingStar /> নারায়ে রিসালত <br/>
                <TwinklingStar /> নারায়ে গাউসিয়া <br/>
                <TwinklingStar /> নারায়ে হিন্দওয়ালি <br/>
                <TwinklingStar /> সম্রাটে বেলায়ত
            </div>

            {/* মাঝের কন্টেন্ট */}
            <div className="z-10">
                <h4 className='text-white md:text-2xl flex justify-center mb-2 drop-shadow-lg'>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h4>
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-white leading-tight drop-shadow-xl">
                    ওষখাইন <span className="text-red-500">আলী নগর দরবার</span> শরিফ
                </h2>
            </div>

            {/* ডান দিকের কন্টেন্ট + পাশের স্টার */}
            <div className="text-white hidden md:block md:text-xs z-10 font-medium text-right leading-relaxed">
                আল্লাহু আকবর <TwinklingStar /> <br/>
                ইয়া রাসুলাল্লাহ (দ.) <TwinklingStar /> <br/>
                ইয়া গাউসুল আজম দস্তগীর (র.) <TwinklingStar /> <br/>
                ইয়া খাজা আজমীর <TwinklingStar /> <br/>
                ইয়া আলী রজা (র.) <TwinklingStar />
            </div>
        </nav>
    );
};

export default Navbar;