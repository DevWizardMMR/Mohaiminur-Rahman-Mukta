import React from "react";
import { FaSquareFacebook,FaLinkedin,FaSquareTwitter,FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#3D7196] grid-cols-1 grid lg:grid-cols-2 text-white">
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-wrap gap-5 text-3xl my-5 text-white">
            <FaLinkedin/>
            <FaSquareInstagram/>
            <FaSquareTwitter/>
            <FaSquareFacebook/>
          </div>
          <p className="mt-auto">
           @ 2023 M<span className="underline">entorbridge.</span> All Right Reserved.
          </p>
        </div>

        <div className="flex w-full justify-around">
          <div className="flex flex-col">
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className="flex flex-col">
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
