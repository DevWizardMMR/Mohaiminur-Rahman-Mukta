import Image from "next/image";
import Footer from "./ReuseableComponents/Footer";
import Header from "./ReuseableComponents/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Neha from "../../public/neha.png";
import Link from "next/link";
import {
  AiFillHome,
  AiTwotonePhone,
  AiTwotoneMessage,
  AiFillCalendar,
} from "react-icons/ai";
import {
  FaUserEdit,
  FaUser,
  FaMailBulk,
  FaSuitcase,
  FaPowerOff,
  FaBars,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohaiminur Rahman Mukta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="drawer lg:drawer-open mb-10 min-h-[calc(100vh-200px)]">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-end justify-start w-11/12 mx-auto my-3">
            <label htmlFor="my-drawer-2" className="p-5 shadow-md rounded-md z-30 lg:hidden">
              <FaBars />
            </label>
            <div className="w-full">
            {children}
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay bg-white"></label>
            <ul className="menu p-4 w-80 h-full lg:border-r lg:z-30 bg-white mt-1 border-slate-400 text-base-content font-bold">
              {/* Sidebar content here */}
              <div className="flex flex-wrap justify-start items-center gap-4 mb-5">
                <Image className="w-20 rounded-full shadow-md" src={Neha} />
                <h1 className="font-bold text-2xl tracking-tight">Neha Bhat</h1>
              </div>
              <li>
                <Link href="/">
                  <AiFillHome /> Home
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiTwotonePhone /> Booking
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiTwotoneMessage /> Queries
                </Link>
              </li>
              <div className="border-y border-black">
                <li>
                  <Link href="/schedules">
                    <AiFillCalendar /> Schedules
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <FaUserEdit /> Services
                  </Link>
                </li>
              </div>
              <li>
                <Link href="/">
                  <FaUser /> Profile
                </Link>
              </li>
              <li>
                <Link href="/">
                  {" "}
                  <FaMailBulk /> Invite & Earn
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaSuitcase /> Rewards
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaPowerOff /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
