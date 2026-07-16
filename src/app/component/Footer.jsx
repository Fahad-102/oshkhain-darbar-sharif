"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// ১. রিয়েল টুইঙ্কলিং স্টার (Navbar এর সাথে হুবহু মিল রেখে)
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

// ২. শুটিং স্টার বা তারা খসে পড়ার ডাইনামিক ইফেক্ট
const ShootingStar = ({ style, duration, delay }) => (
    <motion.div
        className="absolute rounded-full bg-amber-200 pointer-events-none"
        initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
        animate={{ 
            x: [-40, 20], 
            y: [-40, 40], 
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

const Footer = () => {
    const [stars, setStars] = useState([]);
    const [shootingStars, setShootingStars] = useState([]);

    // 🔗 সোশ্যাল মিডিয়া লিংক
    const socialLinks = {
        facebook: "https://facebook.com/yourpage",
        twitter: "https://twitter.com/yourprofile",
        instagram: "https://instagram.com/yourprofile",
        youtube: "https://youtube.com/yourchannel",
    };

    useEffect(() => {
        const generatedStars = Array.from({ length: 30 }).map(() => {
            const colors = ['#ffffff', '#fef08a', '#fbbf24', '#ffffff'];
            return {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: Math.random() * 2 + 1.5,
                color: colors[Math.floor(Math.random() * colors.length)],
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 3,
            };
        });
        setStars(generatedStars);

        const generatedShootingStars = Array.from({ length: 4 }).map(() => ({
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 90}%`,
            duration: Math.random() * 1.8 + 1.5,
            delay: Math.random() * 8 + 2,
        }));
        setShootingStars(generatedShootingStars);
    }, []);

    return (
        <footer className="relative w-full bg-green-950 px-6 md:px-20 pb-6 pt-16 overflow-hidden border-t border-amber-500/30 shadow-[0_-4px_30px_rgba(0,0,0,0.5)] text-white">
            
            {/* ডাইনামিক ওয়েভস লেয়ার */}
            <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-40">
                <motion.svg 
                    className="absolute w-[200%] h-full text-gradient bottom-0 left-0 opacity-15"
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    <path d="M0,60 C150,20 350,100 500,60 C650,20 850,100 1000,60 C1150,20 1350,100 1500,60 L1500,120 L0,120 Z" fill="#f59e0b"/>
                </motion.svg>

                <motion.svg 
                    className="absolute w-[200%] h-full bottom-2 left-0 opacity-20"
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                >
                    <path d="M0,50 C200,90 400,10 600,50 C800,90 1000,10 1200,50 C1400,90 1600,10 1800,50 L1800,120 L0,120 Z" fill="#10b981"/>
                </motion.svg>
            </div>

            {/* তারার লেয়ার */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.03)_0%,transparent_75%)]" />
                
                {stars.map((star, i) => (
                    <RealStar 
                        key={`footer-star-${i}`} 
                        style={{ top: star.top, left: star.left }} 
                        size={star.size} 
                        color={star.color} 
                        duration={star.duration} 
                        delay={star.delay} 
                    />
                ))}

                {shootingStars.map((sStar, i) => (
                    <ShootingStar 
                        key={`footer-shooting-${i}`} 
                        style={{ top: sStar.top, left: sStar.left }} 
                        duration={sStar.duration} 
                        delay={sStar.delay} 
                    />
                ))}
            </div>

            {/* মূল কনটেন্ট এরিয়া */}
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    
                    {/* প্রথম কলাম: লোগো ও বর্ণনা */}
                    <div className="space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
                        <div className="relative group flex-shrink-0">
                            <div className=" lg:ml-15 absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full blur opacity-5 group-hover:opacity-40 transition duration-500"></div>
                            <Image src="/Logo.png" width={80} height={80} alt="Logo" className="lg:ml-15 relative object-contain w-30 h-30" suppressHydrationWarning />
                        </div>
                        <p className="text-sm leading-relaxed text-stone-300">
                            ওষখাইন আলী নগর দরবার শরীফ একটি সুপরিচিত সুফিবাদভিত্তিক আধ্যাত্মিক ধর্মীয় প্রতিষ্ঠান।
                        </p>
                        <div className=" flex lg:ml-2  gap-5 pt-2">
                            {[
                                { Icon: FaFacebookF, url: socialLinks.facebook },
                                { Icon: FaTwitter, url: socialLinks.twitter },
                                { Icon: FaInstagram, url: socialLinks.instagram },
                                { Icon: FaYoutube, url: socialLinks.youtube },
                            ].map((item, i) => (
                                <a 
                                    key={`social-${i}`} 
                                    href={item.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-amber-500/10 p-2.5 rounded-full border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-green-950 hover:scale-115 transition-all duration-300"
                                >
                                    <item.Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* লিঙ্ক কলাম ১ (ডুপ্লিকেট নাম ফিক্সড) */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-amber-400 mb-5 border-b-2 border-amber-500/30 pb-1 inline-block tracking-wide">
                            গুরুত্বপূর্ণ লিঙ্কসমূহ
                        </h3>
                        <ul className="space-y-2.5 text-sm text-stone-300">
                            {['আমাদের সম্পর্কে', 'দরবারসমূহ', 'খানকা', 'আমাদের সেবা', 'যোগাযোগ করুন'].map((item, i) => (
                                <li key={`link1-${i}`} className="hover:text-amber-300 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block sm:block w-full">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* লিঙ্ক কলাম ২ */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-amber-400 mb-5 border-b-2 border-amber-500/30 pb-1 inline-block tracking-wide">
                            অন্যান্য তথ্য
                        </h3>
                        <ul className="space-y-2.5 text-sm text-stone-300">
                            {['গোপনীয়তা নীতি', 'নিয়ম ও শর্তাবলী', 'সাহায্য', 'প্রশ্নাবলী'].map((item, i) => (
                                <li key={`link2-${i}`} className="hover:text-amber-300 transition-colors duration-200 cursor-pointer hover:translate-x-1 transform inline-block sm:block w-full">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* চতুর্থ কলাম: যোগাযোগ */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-amber-400 mb-5 border-b-2 border-amber-500/30 pb-1 inline-block tracking-wide">
                            যোগাযোগ
                        </h3>
                        <div className="space-y-3 text-sm text-stone-300 flex flex-col items-center sm:items-start">
                            <p className="flex items-start gap-2.5 max-w-[250px] sm:max-w-none justify-center sm:justify-start">
                                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0" /> 
                                <span>ওষখাইন আলী নগর দরবার শরীফ, আনোয়ারা, চট্টগ্রাম</span>
                            </p>
                            <p className="flex items-center gap-2.5"><FaEnvelope className="text-amber-400" /> info@oshkian.org</p>
                            <p className="flex items-center gap-2.5"><FaPhoneAlt className="text-amber-400" /> +88-01819349943</p>
                            <p className="flex items-center gap-2.5"><FaPhoneAlt className="text-amber-400" /> +88-01822867388</p>
                        </div>
                    </div>
                </div>

                {/* নিচের কপিরাইট ও ডেভেলপার অংশ */}
                <div className="border-t border-amber-500/20 mt-12 pt-5 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-stone-400 gap-4 text-center">
                    <p>© ২০২৬ ওষখাইন আলী নগর দরবার শরীফ, সমস্ত অধিকার সংরক্ষিত।</p>
                    <p className="hover:text-amber-300 transition-colors duration-300">
                        ডিজাইন ও ডেভেলপমেন্ট: <span className="text-amber-400 font-medium">ইঞ্জিনিয়ার মোহাম্মাদ ফাহাদ বিন জামাল</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;