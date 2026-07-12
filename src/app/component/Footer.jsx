import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFax } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* প্রথম কলাম: লোগো ও বর্ণনা */}
                <div className="col-span-1 md:col-span-1">
                    <img src="/logo.png" alt="Logo" className="h-20 mb-4" />
                    <p className="text-sm leading-relaxed mb-6">
                       ওষখাইন আলী নগর দরবার শরীফ একটি সুপরিচিত সুফিবাদভিত্তিক ধর্মীয় প্রতিষ্ঠান।
                    </p>
                    <div className="flex gap-3">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                            <div key={i} className="bg-red-800 p-2 rounded-full cursor-pointer hover:bg-green-700">
                                <Icon className="text-white" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* দ্বিতীয় ও তৃতীয় কলাম: লিঙ্কসমূহ */}
                <div>
                    <h3 className="text-white font-bold mb-4 border-b-2 border-red-600 inline-block">গুরুত্বপূর্ণ লিঙ্কসমূহ</h3>
                    <ul className="space-y-2 text-sm mt-2">
                        {['আমাদের সম্পর্কে', 'দরবারসমূহ', 'খানকা', 'আমাদের দর্শন', 'যোগাযোগ করুন'].map(item => (
                            <li key={item} className="hover:text-red-500 cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-bold mb-4 border-b-2 border-red-600 inline-block">গুরুত্বপূর্ণ লিঙ্কসমূহ</h3>
                    <ul className="space-y-2 text-sm mt-2">
                        {['গোপনীয়তা নীতি', 'নিয়ম ও শর্তাবলী', 'অস্বীকৃতি', 'সাহায্য', 'সাধারণ প্রশ্নাবলী'].map(item => (
                            <li key={item} className="hover:text-red-500 cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* চতুর্থ কলাম: যোগাযোগ */}
                <div>
                    <h3 className="text-white font-bold mb-4 border-b-2 border-red-600 inline-block">যোগাযোগ</h3>
                    <div className="space-y-3 text-sm mt-2">
                        <p className="flex items-start gap-2"><FaMapMarkerAlt className="text-green-500 mt-1" /> ওষখাইন আলী নগর দরবার শরীফ, আনোয়ারা , চট্টগ্রাম</p>
                        <p className="flex items-center gap-2"><FaEnvelope className="text-green-500" /> info@dewanbaghsharif.org</p>
                        <p className="flex items-center gap-2"><FaPhoneAlt className="text-green-500" /> +88-01819349943</p>
                        <p className="flex items-center gap-2"><FaPhoneAlt className="text-green-500" /> +88-01822867388</p>
                    </div>
                </div>
            </div>

            {/* নিচের কপিরাইট অংশ */}
            <div className="border-t border-white mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs text-white px-6 md:px-20">
                <p>এই ওয়েবসাইটে প্রদর্শিত সমস্ত বিষয়বস্তু, যার মধ্যে টেক্সট, ছবি, অডিও এবং অন্যান্য উপকরণ অন্তর্ভুক্ত।</p>
                <p>কপিরাইট © ওষখাইন আলী নগর দরবার শরীফ ২০২৬ | সমস্ত অধিকার সংরক্ষিত।</p>
                <p>মোহাম্মাদ ফাহাদ বিন জামাল</p>

            </div>
        </footer>
    );
};

export default Footer;