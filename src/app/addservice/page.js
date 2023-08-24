import React from "react";
import Image from "next/image";
import womenBanner from "../../../public/women-banner.png";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Services</h1>
        <button className="px-5 py-2 bg-[#047E70] text-white font-bold rounded-full shadow-md">
          Connect Payout
        </button>
      </div>
      <div className="flex justify-start items-center gap-5 md:gap-20 my-10">
        <button className="bg-[#047E70] text-white px-5 py-2 rounded-md font-bold text-sm">
          1:1 call
        </button>
        <Image className="w-52" src={womenBanner} />
      </div>
      <div>
        <form className="mb-5">
          <div>
            <label className="font-bold">Title</label>
            <input className="block px-5 py-2 text-sm border rounded-md w-3/5 my-1 outline-none" type="text" placeholder="Name of the Service" />
          </div>
          <div>
            <label className="font-bold">Duration</label>
            <input className="block px-5 py-2 text-sm border rounded-md w-3/5 my-1 outline-none" type="text" defaultValue="0:00" />
          </div>
          <div>
            <label className="font-bold">Amount</label>
            <div className="w-3/5 flex justify-center items-center gap-5">
            <input className="block px-5 py-2 text-sm border rounded-md w-full my-1 outline-none" type="text" defaultValue="$" />
            <button className="w-full border py-2 rounded-md text-sm font-bold border-[#047E70]">Price Suggestion</button>
            </div>
          </div>
        </form>
        <div className="w-3/5 text-center ">
        <Link href="/services" className='px-8 py-2 bg-gradient-to-t from-[#358279] to-[#27EDD5] text-sm font-bold text-white rounded-md shadow-sm'>+ ADD</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
