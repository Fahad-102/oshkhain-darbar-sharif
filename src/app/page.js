"use client"
import Banner from "./component/Banner";
import BiographyCard from "./component/BiographyCard";
import DarbarTeachings from "./component/DarbarTeachings";
import RashidAhmedBiographyCard from "./component/RashidAhmedBiographyCard";

export default function Home() {
  return (
   <div className="max-w-7xl mx-auto">
    <Banner/>
    <DarbarTeachings/>
    <BiographyCard/>
    <RashidAhmedBiographyCard/>
   </div>
  );
}
