import Image from 'next/image'
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import NavLogo from "../../../public/Logo.png";

const Header = () => {
  const NavMenu = (
    <>
      <li>
        <Link href="/">Filter</Link>
      </li>
      <li>
        <Link href="/">About us</Link>
      </li>
      <li>
        <Link href="/">Blog</Link>
      </li>
    </>
  );
  return (
    <div className='shadow-md py-2 z-40'>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start w-auto mr-10">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {NavMenu}
            </ul>
          </div>
          <Image className='w-32' src={NavLogo}/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 menu-horizontal px-1 font-bold">{NavMenu}</ul>
        </div>
        <div className="navbar-end w-full">
          <IoNotifications className='text-2xl'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
