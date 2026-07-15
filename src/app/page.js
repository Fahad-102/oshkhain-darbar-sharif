"use client"
import Banner from "./component/Banner";
import DarbarTeachings from "./component/DarbarTeachings";

export default function Home() {
  return (
   <div className="max-w-7xl mx-auto">
    <Banner/>
    <DarbarTeachings/>
   </div>
  );
}
