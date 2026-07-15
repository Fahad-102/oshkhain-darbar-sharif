import { Tiro_Bangla } from "next/font/google"; 
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Navbar2 from "./component/Navbar2";

const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-tiro",
});

export const metadata = {
  title: "ওষখাইন দরবার শরীফ",
  description: "ওষখাইন দরবার শরীফের অফিসিয়াল ওয়েবসাইট।",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="bn" 
      className={tiroBangla.variable} 
      suppressHydrationWarning
    >
      <body className={`${tiroBangla.className} min-h-screen flex flex-col`}>
        <Navbar />
        <Navbar2/>
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}