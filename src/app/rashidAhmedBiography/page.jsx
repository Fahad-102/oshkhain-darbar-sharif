import Image from 'next/image';
import React from 'react';

const RashidAhmedMiahBiography = () => {
    return (
        <div className="relative min-h-screen py-10 px-4 md:px-20 overflow-hidden">
            {/* Background Calligraphy/Pattern */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/calligraphy-bg.jpg" 
                    alt="Background Calligraphy"
                    fill
                    className="object-cover opacity-20"
                    priority
                    suppressHydrationWarning
                />
            </div>

            {/* Header Section */}
            <header className="flex flex-col justify-center items-center relative z-10 max-w-7xl mx-auto text-center mb-12">
                <Image
                    src="/RashidAhemdMiah.jpeg" 
                    alt="হযরত শাহ্ রশিদ আহমদ কেবলা (রঃ) দরগাহ্"
                    width={600}
                    height={200}
                    suppressHydrationWarning
                    className="mb-5 rounded-2xl border-2 border-green-500 shadow-lg object-cover"
                />
                <h1 className="text-xl lg:text-4xl md:text-2xl lg:leading-15 font-bold text-green-900 mb-4">
                    সাত পিস্তানী ফকির, বেলায়েতের উজ্জ্বল নক্ষত্র ও আধ্যাত্মিক সাধক <br/>
                    হযরত শাহ্ রশিদ আহমদ কেবলা (রঃ)
                </h1>
                <p className="text-xl text-gray-600 italic">ওষখাইন আলী নগর দরবার শরীফ</p>
            </header>

            <main className="relative z-10 max-w-7xl mx-auto bg-white/95 p-8 md:p-12 shadow-2xl rounded-lg border-t-8 border-green-700 backdrop-blur-sm">
                
                {/* Intro Section */}
                <section className="mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg">
                        হযরত শাহ্ রশিদ আহমদ কেবলা (রঃ) ছিলেন চট্টগ্রামের ঐতিহ্যবাহী বংশের এক মহান আধ্যাত্মিক সাধক। তিনি বিখ্যাত পীর ও সুফি সাধক হযরত শাহছুফী আলীরজা (প্রকাশ কানু ফকির রঃ)-এর প্রথম পুত্র হযরত শাহ্ আমিন উল্লাহ্ মিয়ার বংশধারা (সাত পিস্তান)-র অন্তর্ভুক্ত। মহান কানু ফকিরের বাণীকৃত ভবিষ্যদ্বাণী অনুযায়ী তিনি আধ্যাত্মিক সাধনার মাধ্যমে বেলায়েত ও খেলাফতের উচ্চ শিখরে আরোহণ করেন।
                    </p>
                </section>

                {/* Grid Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-green-50 p-6 rounded-md shadow-inner">
                        <h2 className="font-bold text-green-800 border-b border-green-200 pb-2 mb-3">জন্ম ও বংশ পরিচয়</h2>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><strong>জন্ম:</strong> ১৯২৩ ইংরেজি, ১৯ শে কার্তিক ১৩২৯ বাংলা, ছুবহে ছাদেক ওয়াক্তে।</li>
                            <li><strong>পিতা (ও মুর্শীদ):</strong> কুতুবে আখতাব হযরত শাহ্ আব্দু ছমদ মিয়া (রঃ)</li>
                            <li><strong>মাতা:</strong> সৈয়দা মেহেরাজ খাতুন</li>
                            <li><strong>বংশীয় ধারা:</strong> হযরত শাহছুফী আলীরজা প্রকাশ কানু ফকির (রঃ)-এর পবিত্র বংশের সপ্তম পুরুষ (সাত পিস্তান)।</li>
                            <li><strong>প্রাথমিক শিক্ষা:</strong> পটিয়ার জিরি মাদ্রাসা ও শাহচান্দ আউলিয়া মাদ্রাসা।</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-md shadow-inner">
                        <h2 className="font-bold text-green-800 border-b border-green-200 pb-2 mb-3">আধ্যাত্মিক জীবন ও ওফাত</h2>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><strong>সাধনা কাল:</strong> ১৯৬৯ ইংরেজি হতে ১৯৮৩ ইংরেজি পর্যন্ত দীর্ঘ ২৪ বছর কঠোর রিয়াজত।</li>
                            <li><strong>সাধনার স্থান:</strong> দামপাড়া পাহাড় ও পীর কেবলা আলীরজার পবিত্র কদম মোবারক।</li>
                            <li><strong>ওফাত:</strong> ১৯৮৩ ইংরেজি, ১০ই অক্টোবর, সোমবার (বাংলা ২৩শে আশ্বিন ১৩৯০, ৩রা মোহররম ১৪০৪ হিজরী)।</li>
                            <li><strong>ওফাতকালীন বয়স:</strong> ৬০ বছর বয়সে ইহধাম ত্যাগ করে পরলোকে যাত্রা করেন।</li>
                            <li><strong>খাদেম ও সঙ্গী:</strong> প্রিয়পুত্র দেওয়ান মোহাম্মদ জমির উল্লাহ্।</li>
                        </ul>
                    </div>
                </div>

                {/* Life Struggles & Migration */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-3">জীবন সংগ্রাম ও প্রবাস জীবন</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        সংসারের শোচনীয় আর্থিক অবস্থার কারণে মাত্র ১৯ বছর বয়সে পিতার নির্দেশে বিবাহ বন্ধনে আবদ্ধ হওয়ার পর তিনি কর্মজীবনে প্রবেশ করেন। জীবিকার তাগিদে তিনি মায়ানমারের (বার্মা) আকিয়াব শহরে পাড়ি জমান এবং সেখানে কয়েক বছর অবস্থান করেন। পরবর্তীতে দেশে ফিরে চন্দ্রখালী টিনের ঘর হাট এবং চট্টগ্রাম শহরে তাঁর চাচা শাহ্ আবদুল মোনায়েম মাস্টারের রিলী কোম্পানীর দোকানে কাজ শুরু করেন। তবে জাগতিক কাজে লিপ্ত থাকলেও তাঁর অন্তর সর্বদা আল্লাহর ধ্যানে মগ্ন থাকত।
                    </p>
                </section>

                {/* Spiritual Legacy & Hardship */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-3">সাধন ও ইবাদতের কঠোর রুটিন</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        তাঁর পিতা হযরত শাহ্ আব্দু ছমদ মিয়া (রঃ) অত্যন্ত দারিদ্র্যের মধ্য দিয়ে জীবন অতিবাহিত করতেন এবং এক ওয়াক্ত উপবাসে দুই রাকাত শোকরানা নামাজ আদায় করতেন। পিতার সেই উপবাসের আদর্শ ও নবীর হালের অনুসরণে শাহ্ রশিদ আহমদ কেবলাও জাগতিক আরাম-আয়েশ ও ধন-সম্পত্তি (যেমন ভক্তদের দেওয়া টিনের দান) প্রত্যাখ্যান করেন। 
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        তিনি ফজরের পর ইশরাক, চাশত এবং জোহরের পর প্রায় ২০ রাকাত নফল নামাজ পড়তেন। আছরের সুন্নতসহ ফরজ আদায় করে তীব্র নূর হাসিলের উদ্দেশ্যে মোরাকাবায় বসতেন। মাগরিবের পর সালাতুল আওয়াবিন, হেফজুল ঈমান এবং এশার পর বিতিরের পূর্বে প্রায় ৫০ রাকাত নফল আদায় করতেন। রাত ১২টার পর সালাতুত তাসবীহ এবং রাত ২টা থেকে ফজর পর্যন্ত তাহাজ্জুদ, মোরাকাবা ও দমকষি জিকিরে নিমগ্ন থাকতেন। বহু বছর তিনি এশার অজু দিয়েই ফজরের সালাত আদায় করেছেন।
                    </p>
                </section>

                {/* Miracles / Karamat Section */}
                <section className="bg-gray-900 text-gray-100 p-8 rounded-lg mb-10 shadow-lg">
                    <h2 className="text-xl font-bold mb-4 text-green-400">অলৌকিক কারামত ও গায়েবি জিকির</h2>
                    <p className="text-sm leading-relaxed mb-4">
                        চাচা আবদুল মোনায়েম মাস্টারের দোকানে থাকাকালীন সওদাগরের ভাগিনা গভীর রাতে দেখতে পান যে, রশিদের কামরায় কোনো জাগতিক বাতি ছাড়াই শূন্যের উপর এক অলৌকিক নূরের আলো ভাসছে, যা পুরো ঘরকে আলোকিত করে রেখেছে। এছাড়া গভীর রাতে দামপাড়া পাহাড়ে গিয়ে সাদা পোশাক পরিহিত এক আধ্যাত্মিক সাধকদের গায়েবি জামায়াতের মাথায় পাগড়ী বেঁধে ইমামতি করার অলৌকিক ঘটনা তাঁর বেলায়েতের অন্যতম শ্রেষ্ঠ নির্দশন।
                    </p>
                </section>

                {/* The Final Days and Union */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-3">সাধনার পূর্ণতা ও মহা মিলন (ওফাত)</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        ১৯৬৯ সনে পিতা ও মুর্শীদ শাহ্ আব্দু ছমদ মিয়া তাঁকে আনুষ্ঠানিকভাবে কানু ফকিরের দরবারে সোপর্দ করেন, যেখানে তিনি একটানা ২৪ বছর কঠোর তপস্যা সম্পন্ন করেন। ১৯৮৩ ইংরেজি সালের ৩১শে সেপ্টেম্বর (১৩ই আশ্বিন) রোজ শুক্রবার রোজা রাখা অবস্থায় জুমার নামাজ শেষে তিনি তাঁর গৃহের আসনে প্রবেশ করেন। সেখানে তিনি পর্দার আড়ালে টানা ১০ দিন সম্পূর্ণ লোকচক্ষুর অন্তরালে আল্লাহর গভীর ধ্যানে মগ্ন থাকেন। অবশেষে ১০ই অক্টোবর সোমবার তিনি নশ্বর পৃথিবী ত্যাগ করে মহান প্রভুর দিদারে ধন্য হন।
                    </p>
                </section>

                {/* Legacy & Teachings */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-3">আধ্যাত্মিক বাণী ও শিক্ষা</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        তিনি ভক্তদের সর্বদা খাঁটি অন্তরে কামলিলিয়াত অর্জন ও পীরের চরণে নিজেকে বিলীন করার উপদেশ দিতেন। তাঁর জীবনের মূল শিক্ষা ও নীতিসমূহ ছিল অত্যন্ত তাত্ত্বিক ও উপদেশমূলক।
                    </p>
                    <h3 className="font-bold mb-2">তাঁর জীবনের মূল বাণীসমূহ:</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'সৎ সঙ্গে স্বর্গবাস, অসৎ সঙ্গে সর্বনাশ', 
                            'সত্যের সাথে সত্যের স্বাদ ও সত্যের বাস', 
                            'মিথ্যার বাজারে মিথ্যার স্বাদ ও মিথ্যার বাস', 
                            'গুরুর চরণমূলে সর্বসিদ্ধিসার', 
                            'অসন্তোষ হইলে গুরু সমূলে ছাড়কার',
                            'নিঃশ্বাসে নিঃশ্বাসে দমের মাঝে আল্লাহর জিকির'
                        ].map((teaching, i) => (
                            <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">{teaching}</span>
                        ))}
                    </div>
                </section>

                <footer className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 italic">
                    আল্লাহ তাআলার এই মহান ওলী তাঁর আধ্যাত্মিক ত্যাগ, গভীর ভক্তি ও আল্লাহর প্রতি অনন্য ভালোবাসার মাধ্যমে চিরস্মরণীয় হয়ে আছেন।
                </footer>
            </main>
        </div>
    );
};

export default RashidAhmedMiahBiography;