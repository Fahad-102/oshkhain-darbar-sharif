"use client";
import { Button, Dropdown } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // URL ট্র্যাক করার জন্য ইম্পোর্ট করা হলো
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // বর্তমান পেজের পাথ/লিংক রিড করবে

  // বেসিক বাটন স্টাইল
  const buttonBaseClass = "w-full md:w-auto flex items-center justify-center text-white transition-all duration-200";

  // URL পাথের ওপর ভিত্তি করে ব্যাকগ্রাউন্ড কালার পরিবর্তন করার ফাংশন
  const getButtonBg = (menuName) => {
    let isActive = false;

    if (menuName === "home" && pathname === "/") {
      isActive = true;
    } else if (
      menuName === "biography" && 
      (pathname === "/aliRozaBiography" || pathname === "/rashidAhmedBiography")
    ) {
      isActive = true;
    } else if (menuName === "contact" && pathname === "/darbarMap") {
      isActive = true;
    }
    // আপনি যখন পরবর্তী পেজগুলোর (যেমন: ট্রাস্ট বা প্রতিষ্ঠান) রাউট বানাবেন, 
    // তখন এখানে সেগুলোর পাথ অ্যাড করে দিলেই সেগুলোও লাল হয়ে থাকবে।

    return isActive ? "bg-red-500" : "bg-green-900 hover:bg-red-500";
  };

  return (
    <nav className="border-b-2 border-gray-200 p-4">
      {/* মোবাইল মেনু বাটন */}
      <div className="md:hidden flex justify-between items-center">
        <span className="font-bold text-green-900 text-lg">মেনু</span>
        <Button variant="light" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Button>
      </div>

      {/* মেনু কন্টেইনার */}
      <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row justify-center items-center gap-3 mt-4 md:mt-0`}>
        
        {/* হোম বাটন */}
        <Link href={"/"}>
          <Button className={`${buttonBaseClass} ${getButtonBg("home")}`}>
            হোম
          </Button>
        </Link>

        {/* জীবনী ড্রপডাউন */}
        <Dropdown>
          <Button className={`${buttonBaseClass} ${getButtonBg("biography")}`}>
            <IoMdArrowDropdown /> জীবনী
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu>
              <Dropdown.Item key="bio1">
                <Link href={'/aliRozaBiography'} className="block w-full h-full">
                  হযরত শাহ্ সূফী আলী রজা প্রকাশ কানু শাহ্ (রহ:)
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="bio2">
                <Link href={'/rashidAhmedBiography'} className="block w-full h-full">
                  হযরত শাহ্ সূফী রশিদ আহমদ মিয়া (রহ:)
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        {/* তথ্য ড্রপডাউন */}
        <Dropdown>
          <Button className={`${buttonBaseClass} ${getButtonBg("shajra")}`}>
            শাজরা শরীফ
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu>
              <Dropdown.Item key="info1">তথ্য ১</Dropdown.Item>
              <Dropdown.Item key="info2">তথ্য ২</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        {/* ট্রাস্ট ড্রপডাউন */}
        <Dropdown>
          <Button className={`${buttonBaseClass} ${getButtonBg("trust")}`}>
            <IoMdArrowDropdown /> ট্রাষ্ট
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu>
              <Dropdown.Item key="trust1">আঞ্জুমানে পাক পঞ্জতন শাহ্ আলী রজা (রহঃ) ট্রাস্ট</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        {/* প্রতিষ্ঠান ড্রপডাউন */}
        <Dropdown>
          <Button className={`${buttonBaseClass} ${getButtonBg("institution")}`}>
            <IoMdArrowDropdown /> প্রতিষ্ঠান
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu>
              <Dropdown.Item key="masjid">নূরে ইলাহি জামে মসজিদ</Dropdown.Item>
              <Dropdown.Item key="madrasa">ওষখাইন শাহ আলী রজা (রহঃ) আলিম মাদ্রাসা</Dropdown.Item>
              <Dropdown.Item key="hifz">শাহ কেয়াম উদ্দিন আউলিয়া (রহঃ) হেফজ ও এতিমখানা</Dropdown.Item>
              <Dropdown.Item key="nurani">শাহ ছুফি রশিদ আহমদ (রহঃ) নূরানী একাডেমি</Dropdown.Item>
              <Dropdown.Item key="darse">শাহ ছুফি রশিদ আহমদ (রহঃ) দরসে নিযামী মাদ্রাসা</Dropdown.Item>
              <Dropdown.Item key="lab">গবেষণাগার</Dropdown.Item>
              <Dropdown.Item key="khanka">খানকায়ে পাক পঞ্জতন শাহ্ আলী (রহঃ)</Dropdown.Item>
              <Dropdown.Item key="mohora">মোহরা খানকায়ে শাহ্ আলী রজা (রহঃ)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        {/* বানী ড্রপডাউন */}
        <Dropdown>
          <Button className={`${buttonBaseClass} ${getButtonBg("quotes")}`}>
            বানী
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu>
              <Dropdown.Item key="b1">বানী ১</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        {/* যোগাযোগ বাটন */}
        <Link href={'/darbarMap'}>
          <Button className={`${buttonBaseClass} ${getButtonBg("contact")}`}>
            যোগাযোগ
          </Button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar2;