import { Hind_Siliguri } from "next/font/google"; 
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Navbar2 from "./component/Navbar2";

const hind = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "700"],
  variable: "--font-hind",
});

export const metadata = {
  title: "ওষখাইন দরবার শরীফ",
  description: "ওষখাইন দরবার শরীফের অফিসিয়াল ওয়েবসাইট।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={hind.variable} suppressHydrationWarning>
      <body className={`${hind.className} min-h-screen flex flex-col`}>
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