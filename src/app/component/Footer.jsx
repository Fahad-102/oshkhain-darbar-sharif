import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white px-6 md:px-20 pb-2">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
                
                {/* প্রথম কলাম */}
                <div className="space-y-2  text-center flex flex-col items-center">
                    <Image src="/Logo.png" width={150} height={60} alt="Logo" className="brightness-200" suppressHydrationWarning />
                    <p className="text-sm leading-relaxed">
                        ওষখাইন আলী নগর দরবার শরীফ একটি সুপরিচিত সুফিবাদভিত্তিক আধ্যাত্মিক
                         ধর্মীয় প্রতিষ্ঠান।
                    </p>
                    <div className="flex gap-3">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                            <a key={i} href="#" className="bg-red-800 p-2.5 rounded-full hover:bg-green-700 transition-all duration-300">
                                <Icon className="text-white" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* লিঙ্ক কলাম ১ */}
                <div>
                    <h3 className="font-bold mb-5 border-b-2 pt-15 border-green-600 inline-block">গুরুত্বপূর্ণ লিঙ্কসমূহ</h3>
                    <ul className="space-y-2 text-sm">
                        {['আমাদের সম্পর্কে', 'দরবারসমূহ', 'খানকা', 'আমাদের দর্শন', 'যোগাযোগ করুন'].map(item => (
                            <li key={item} className="hover:text-red-400 transition cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* লিঙ্ক কলাম ২ */}
                <div>
                    <h3 className="font-bold mb-4 border-b-2 pt-15 border-green-600 inline-block">অন্যান্য তথ্য</h3>
                    <ul className="space-y-2 text-sm">
                        {['গোপনীয়তা নীতি', 'নিয়ম ও শর্তাবলী', 'সাহায্য', 'প্রশ্নাবলী'].map(item => (
                            <li key={item} className="hover:text-red-400 transition cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* চতুর্থ কলাম: যোগাযোগ */}
                <div>
                    <h3 className="font-bold mb-4 border-b-2 pt-15 border-green-600 inline-block">যোগাযোগ</h3>
                    <div className="space-y-3 text-sm">
                        <p className="flex items-start gap-2"><FaMapMarkerAlt className="text-green-400 mt-1" /> ওষখাইন আলী নগর দরবার শরীফ, আনোয়ারা, চট্টগ্রাম</p>
                        <p className="flex items-center gap-2"><FaEnvelope className="text-green-400" /> info@oshkian.org</p>
                        <p className="flex items-center gap-2"><FaPhoneAlt className="text-green-400" /> +88-01819349943</p>
                        <p className="flex items-center gap-2"><FaPhoneAlt className="text-green-400" /> +88-01822867388</p>
                    </div>
                </div>
            </div>

            {/* নিচের কপিরাইট অংশ */}
            <div className="border-t border-green-300 mt-12 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-green-200 gap-4 text-center">
                <p>© ২০২৬ ওষখাইন আলী নগর দরবার শরীফ , সমস্ত অধিকার সংরক্ষিত।</p>
                <p></p>
                <p>ডিজাইন ও ডেভেলপমেন্ট: মোহাম্মাদ ফাহাদ বিন জামাল</p>
            </div>
        </footer>
    );
};

export default Footer;