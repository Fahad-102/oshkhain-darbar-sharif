"use client";

import Image from "next/image";
import Banner from "./component/Banner";
import BiographyCard from "./component/BiographyCard";
import DarbarTeachings from "./component/DarbarTeachings";
import MarqueeNotice from "./component/MarqueeNotice";
import RashidAhmedBiographyCard from "./component/RashidAhmedBiographyCard";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/calligraphy-bg.jpg" 
          alt="Calligraphy Background"
          fill
          className="object-cover opacity-20" 
          priority
          quality={75}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <MarqueeNotice />
        <Banner />
        <DarbarTeachings />
        <BiographyCard />
        <RashidAhmedBiographyCard />
      </div>
    </div>
  );
}