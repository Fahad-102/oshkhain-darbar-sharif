import React from 'react';
import Image from 'next/image';

const BiographyPage = () => {
    return (
        <div className="relative min-h-screen py-10 px-4 md:px-20 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/calligraphy-bg.jpg" 
                    alt="Background Calligraphy"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>

            {/* Header Section */}
            <header className="relative z-10 max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold text-green-900 mb-4">
                    হযরত আল্লামা শাহ্ সূফী আলী রজা (প্রকাশ কানু শাহ্) (রহ:)
                </h1>
                <p className="text-xl text-gray-600 italic">ওষখাইন আলী নগর দরবার শরীফ</p>
            </header>

            <main className="relative z-10 max-w-7xl mx-auto bg-white/95 p-8 md:p-12 shadow-2xl rounded-lg border-t-8 border-green-700 backdrop-blur-sm">
                
                {/* Intro Section */}
                <section className="mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg">
                        চট্টগ্রামের ঐতিহ্যবাহী আনোয়ারা থানার অন্তর্গত ০৯নং পরৈকোড়া ইউনিয়নে ওষখাইন নামক গ্রামে আধ্যাত্মিক সাধক হযরত শাহ আলী রজা (রহ:) শায়িত আছেন। তাঁর মাতা প্রদত্ত নাম -আলী রজা- এবং পীরের দেওয়া মহব্বতের নাম - কানু শাহ্। তিনি ইসলামের প্রথম খলিফা হযরত আবু বক্কর ছিদ্দীক (রা:) এবং হযরত ইমাম হোসাইন (রা:) এর বংশধর।
                    </p>
                </section>

                {/* Grid Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-green-50 p-6 rounded-md shadow-inner">
                        <h2 className="font-bold text-green-800 border-b border-green-200 pb-2 mb-3">জন্ম ও পরিচয়</h2>
                        <ul className="space-y-2 text-sm">
                            <li><strong>জন্ম:</strong> ১৭৫৯ ইংরেজি, ১৭ ই শ্রাবণ ১১৬৫ বাংলা, ১০ রবিউস সানি ১১৫৯ হিজরি।</li>
                            <li><strong>পিতা:</strong> হযরত নবাব খাজা শেখ মোহাম্মদ সাছি মিয়া (রহ:)</li>
                            <li><strong>মাতা:</strong> হযরত সৈয়্যদা জুবাইদা খানম (পরান বিবি) (রহ:)</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-md shadow-inner">
                        <h2 className="font-bold text-green-800 border-b border-green-200 pb-2 mb-3">আধ্যাত্মিক জীবন</h2>
                        <ul className="space-y-2 text-sm">
                            <li><strong>সাধনা:</strong> ৩৬ বছর (২৪ বছর বন-পাহাড়ে, ১২ বছর নিজ গৃহে)।</li>
                            <li><strong>পীর:</strong> হযরত শাহ কেয়ামুদ্দীন আউলিয়া (রহ:) (ছিশতীয়া ও মোজাদ্দেদীয়া ত্বরিকা)।</li>
                            <li><strong>ওফাত:</strong> ১৮৩৭ ইংরেজি, বুধবার, ১৯ শাওয়াল, ৭৮ বছর বয়সে।</li>
                        </ul>
                    </div>
                </div>

                {/* Literary Section */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-3">সাহিত্য ও কর্মজীবন</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        তিনি আরবি, ফার্সী, বাংলা, সংস্কৃতসহ ৩৬টি ভাষায় পারদর্শী ছিলেন। তাঁর রচিত জ্ঞান সাগর গ্রন্থটি আমেরিকার সিকাগো ও সুইডেনের স্টকহোম ইউনিভার্সিটি থেকে -The Ocean of Love- নামে প্রকাশিত ও পাঠ্যভুক্ত হয়েছে। তিনি এক হাজারের অধিক দাওয়াত এবং সাত শতাধিক মারফতি গজল রচনা করেছেন।
                    </p>
                    <h3 className="font-bold mb-2">প্রধান গ্রন্থসমূহ:</h3>
                    <div className="flex flex-wrap gap-2">
                        {['জ্ঞান সাগর', 'সিরাজ কুলুব', 'সৃষ্টি পত্তন', 'যোগ কালন্দর', 'ইসলাম নামা', 'ধ্যান মালা', 'খাবনামা', 'রাগ তাল নামা', 'রাহাতুর রুহ', 'অমর সিং'].map((book, i) => (
                            <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">{book}</span>
                        ))}
                    </div>
                </section>

                {/* Research Section */}
                <section className="bg-gray-900 text-gray-100 p-8 rounded-lg mb-10 shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-green-400">গবেষণা ও পাঠ্যক্রম</h2>
                    <p className="text-sm leading-relaxed mb-4">
                        ড. মুহাম্মদ শহিদুল্লাহ, ড. আহমদ শরীফ, আহমদ ছফা এবং ড. জি কে সিন সহ দেশি-বিদেশি অসংখ্য গবেষক তাঁকে নিয়ে কাজ করেছেন। তাঁর কবিতা -মনের মহিমা- ১৯৬৬/৬৭ সালে বাংলাদেশের একাদশ-দ্বাদশ শ্রেণীর পাঠ্যসূচীতে অন্তর্ভুক্ত ছিল। তাঁর পাণ্ডুলিপি ঢাকা, চট্টগ্রাম, রাজশাহী বিশ্ববিদ্যালয়, বরেন্দ্র মিউজিয়াম ও কলকাতা বঙ্গীয় সাহিত্য পরিষদে সংরক্ষিত আছে।
                    </p>
                </section>

                {/* Spiritual Legacy */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-3">আধ্যাত্মিক ঐতিহ্য</h2>
                    <p className="text-gray-700 leading-relaxed">
                        হযরত শাহ আলী রজা (রহ:) ত্বরিকায়ে ছরওয়ারদীয়া ও কাদেরীয়া ত্বরিকার খেলাফতও লাভ করেছিলেন। প্রতি বছর আষাঢ়ের শেষ এবং পৌষের শেষ ৩দিন তাঁর নির্দেশিত বিষু মোবারক ও ওরশ শরীফ ওষখাইন দরবার শরীফে মহা সমারোহে পালিত হয়।
                    </p>
                </section>

                <footer className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 italic">
                    আল্লাহ তাআলার এই মহান ওলী তাঁর আধ্যাত্মিক সাধনা ও সাহিত্য কর্মের মাধ্যমে চিরস্মরণীয় হয়ে আছেন।
                </footer>
            </main>
        </div>
    );
};

export default BiographyPage;