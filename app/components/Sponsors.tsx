import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="container bg-gray-100 p-20 mt-20">
      <p className="text-primary text-2xl">Meet our</p>
      <h2 className="font-bold text-4xl">Sponsors and partners</h2>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 mt-20">
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/ATlogo.svg"
            alt="Anambra Techies logo"
            width={100}
            height={100}
            className="w-40 h-40"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row m-24 justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <Link
          href=""
          className="text-white text-base w-96 md:w-72 font-bold bg-primary py-3 md:px-12 rounded-lg text-center"
        >
          Sponsor us
        </Link>
        <Link
          href=""
          className="border-primary border-2 py-3 w-96 md:px-12 text-black text-base font-bold rounded-lg text-center"
        >
          See Sponsorship Deck
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
