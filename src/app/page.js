"use client"
import Image from "next/image";
import Banner from "./component/Banner";
import Practice from "./component/Practice";
import Footer from "./component/Footer";

export default function Home() {
  return (
   <div className="max-w-7xl mx-auto">
    <Banner/>
   </div>
  );
}
