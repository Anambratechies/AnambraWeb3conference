import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container py-16 pt-24 md:p-20 mt-10 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-4 md:mb-0 space-y-6 md:space-x-5">
          <Image
            src="/logo.svg"
            alt="Web3 Conference Logo"
            width={100}
            height={100}
            className="w-52 md:w-64 h-20"
          />
          <Image
            src="/x.svg"
            alt="x"
            width={100}
            height={100}
            className="w-32 md:w-5 h-8"
          />
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies Logo"
            width={100}
            height={100}
            className="w-52 md:w-64 h-20"
          />
        </div>
        {/* Social icons */}
        <div className="flex flex-row space-x-4 ">
          <Link href="">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn logo"
              width={100}
              height={100}
              className="w-11 h-11"
            />
          </Link>
          <Link href="">
            <Image
              src="/facebook.svg"
              alt="Facebook logo"
              width={100}
              height={100}
              className="w-11 h-11"
            />
          </Link>
          <Link href="">
            <Image
              src="/twitter.svg"
              alt="Twitter logo"
              width={100}
              height={100}
              className="w-11 h-11"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 md:mt-28">
        <p className="text-center flex flex-col items-center md:flex-row space-y-3 md:space-y-0">
          <span className="font-semibold x text-xl">
            {" "}
            For Inquiries/details
          </span>
          <span className="md:ml-2 text-lg">
            anambraweb3conference@gmail.com
          </span>
        </p>
        <p className="mt-8 text-center font-semibold text-xl">
          Crafted with love&#10084;&#65039; by the team at Anambra Techies
        </p>
        <p className="mt-3 text-center">All rights Reserved &copy; AW3C 2024</p>
      </div>
    </div>
  );
};

export default Footer;
