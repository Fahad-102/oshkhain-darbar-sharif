"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// ১. রিয়েল টুইঙ্কলিং স্টার (সোনা এবং সাদা রঙের বাস্তবসম্মত তারা)
const RealStar = ({ style, size, color, duration, delay }) => (
    <motion.div
        className="absolute rounded-full blur-[0.5px]"
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ 
            opacity: [0.2, 1, 0.4, 1, 0.2], 
            scale: [0.8, 1.2, 0.9, 1.2, 0.8],
        }}
        transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
        style={{
            ...style,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            boxShadow: `0 0 ${size * 2}px ${color}`,
        }}
    />
);

// ২. শুটিং স্টার বা তারা খসে পড়ার ডাইনামিক ইফেক্ট (আন্ডারলাইন বাদ দিয়ে শুধু গোল তারা নিচে ড্রপ হবে)
const ShootingStar = ({ style, duration, delay }) => (
    <motion.div
        className="absolute rounded-full bg-amber-200 pointer-events-none"
        initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
        animate={{ 
            x: [0, 60], 
            y: [0, 80], 
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1.2, 0.4]
        }}
        transition={{ duration, repeat: Infinity, delay, ease: "easeOut" }}
        style={{
            ...style,
            width: '3.5px',
            height: '3.5px',
            boxShadow: '0 0 8px #fff, 0 0 12px #fbbf24',
        }}
    />
);

// স্লোগানের পাশের জন্য প্রিমিয়াম ৮-কোনা বিশিষ্ট ট্র্যাডিশনাল ইসলামিক স্টার
const IslamicPremiumStar = () => (
    <motion.svg
        initial={{ opacity: 0.4, rotate: 0 }}
        animate={{ opacity: [0.4, 1, 0.4], rotate: 90 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        width="11"
        height="11"
        viewBox="0 0 24 24"
        className="text-amber-400 drop-shadow-[0_0_2px_rgba(245,158,11,0.5)]"
    >
        <path d="M12 2L15.1 8.9L22 12L15.1 15.1L12 22L8.9 15.1L2 12L8.9 8.9Z" fill="currentColor" />
        <path d="M12 5L13.8 10.2L19 12L13.8 13.8L12 19L10.2 13.8L5 12L10.2 10.2Z" fill="#02210f" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </motion.svg>
);

const Navbar = () => {
    const [stars, setStars] = useState([]);
    const [shootingStars, setShootingStars] = useState([]);

    useEffect(() => {
        // ২৫টি ডাইনামিক রিয়েল স্টার (Gold & White) জেনারেট করা হচ্ছে
        const generatedStars = Array.from({ length: 25 }).map(() => {
            const colors = ['#ffffff', '#fef08a', '#fbbf24', '#ffffff']; // সাদা ও গোল্ডেন শেড
            return {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: Math.random() * 2 + 1.5, // ১.৫ থেকে ৩.৫ পিক্সেল সাইজ
                color: colors[Math.floor(Math.random() * colors.length)],
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 3,
            };
        });
        setStars(generatedStars);

        // ৪টি আলাদা খসে পড়া তারা (Shooting Star) তৈরি
        const generatedShootingStars = Array.from({ length: 4 }).map(() => ({
            top: `${Math.random() * 40}%`, // উপরের হাফ স্ক্রিনে দেখাবে
            left: `${Math.random() * 85}%`,
            duration: Math.random() * 1.8 + 1.5, // খসে পড়ার চমৎকার গতি
            delay: Math.random() * 8 + 2, // আলাদা ইন্টারভালে ড্রপ হবে
        }));
        setShootingStars(generatedShootingStars);
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full bg-green-950 px-4 md:px-8 py-3 overflow-hidden border-b border-amber-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)] min-h-[145px] flex items-center justify-between gap-4">
            
            {/* ক্যালিগ্রাফি বাদ দিয়ে ফুল-কালার ডাইনামিক ওয়েভস লেয়ার */}
            <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen">
                {/* ১. গোল্ডেন লাক্সারি ওয়েভ */}
                <motion.svg 
                    className="absolute w-[200%] h-full text-gradient top-0 left-0 opacity-25"
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                >
                    <path d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1350,20 1500,60 L1500,120 L0,120 Z" fill="#f59e0b"/>
                </motion.svg>

                {/* ২. পান্না সবুজ শাইন ওয়েভ */}
                <motion.svg 
                    className="absolute w-[200%] h-full top-3 left-0 opacity-20"
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                >
                    <path d="M0,50 C200,10 400,90 600,50 C800,10 1000,90 1200,50 C1400,10 1600,90 1800,50 L1800,120 L0,120 Z" fill="#10b981"/>
                </motion.svg>

                {/* ৩. অ্যাম্বার থ্রিดี বর্ডার লাইন ওয়েভ */}
                <motion.svg 
                    className="absolute w-[200%] h-full top-1 left-0 opacity-30"
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                >
                    <path d="M0,65 C150,35 350,95 500,65 C650,35 850,95 1000,65 C1150,35 1350,95 1500,65" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
                </motion.svg>
            </div>

            {/* রিয়েল স্টার এবং শুটিং স্টার (তারা ড্রপিং) লেয়ার */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_65%)]" />
                
                {/* টিমটিমে তারার লুপ */}
                {stars.map((star, i) => (
                    <RealStar 
                        key={`star-${i}`} 
                        style={{ top: star.top, left: star.left }} 
                        size={star.size} 
                        color={star.color} 
                        duration={star.duration} 
                        delay={star.delay} 
                    />
                ))}

                {/* খসে পড়া তারার লুপ */}
                {shootingStars.map((sStar, i) => (
                    <ShootingStar 
                        key={`shooting-${i}`} 
                        style={{ top: sStar.top, left: sStar.left }} 
                        duration={sStar.duration} 
                        delay={sStar.delay} 
                    />
                ))}
            </div>
            
            {/* বাম দিকের কন্টেন্ট (স্লোগান) */}
            <div className="z-10 text-white hidden xl:flex flex-col gap-1 border-l border-amber-500/20 pl-4 flex-1">
                {['নারায়ে তাকবীর', 'নারায়ে রিসালত', 'নারায়ে গাউসিয়া', 'নারায়ে হিন্দওয়ালি', 'সম্রাটে বেলায়ত'].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] lg:text-xs text-stone-300 tracking-wide hover:text-amber-300 transition-colors duration-300 group cursor-default">
                        <IslamicPremiumStar /> <span className="group-hover:translate-x-1 transition-transform duration-300">{text}</span>
                    </div>
                ))}
            </div>

            {/* মাঝের কন্টেন্ট (বিসমিল্লাহ -> লোগো -> দরবার শরীফের নাম) */}
            <div className="z-10 text-center flex flex-col items-center flex-2 px-2 max-w-2xl mx-auto">
                {/* ১. বিসমিল্লাহ */}
                <h4 className='text-amber-400 font-bold text-base md:text-lg lg:text-xl tracking-wider mb-2 select-none drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)] antialiased font-serif'>
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </h4>
                
                {/* ২. লোগো */}
                <div className="relative group flex-shrink-0 mb-2">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                    <Image
                        src="/Logo.png"
                        alt='logo'
                        width={65}
                        height={65}
                        className="relative object-contain w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                        suppressHydrationWarning
                    />
                </div>

                {/* ৩. প্রধান নাম */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-wide leading-tight drop-shadow-md font-sans">
                    ওষখাইন <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-sm">আলী নগর দরবার</span> শরীফ
                </h2>
            </div>

            {/* ডান দিকের কন্টেন্ট (স্লোগান) */}
            <div className="z-10 text-white hidden xl:flex flex-col gap-1 border-r border-amber-500/20 pr-4 text-right flex-1 items-end">
                {['আল্লাহু আকবর', 'ইয়া রাসুলাল্লাহ (দ.)', 'ইয়া গাউসুল আজম দস্তগীর (র.)', 'ইয়া খাজা আজমীর', 'ইয়া আলী রজা (র.)'].map((text, i) => (
                    <div key={i} className="flex items-center justify-end gap-2 text-[11px] lg:text-xs text-stone-300 tracking-wide hover:text-amber-300 transition-colors duration-300 group cursor-default">
                        <span className="group-hover:-translate-x-1 transition-transform duration-300">{text}</span> <IslamicPremiumStar />
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;