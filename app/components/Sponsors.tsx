import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
  return (
    <div className="  bg-gray-100">
      <div className=" container lg:p-20 pt-10 mt-20 flex flex-col gap-10">
        <div>
          <p className="text-primary md:text-2xl">Meet our</p>
          <h2 className="font-bold text-3xl md:text-4xl">
            Sponsors and partners
          </h2>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 ">
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
        <div className="flex flex-col md:flex-row md:m-24 justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link
            href=""
            className="text-white text-base font-bold bg-primary py-3 w-full  md:px-10 lg:px-24 rounded-lg text-center "
          >
            Sponsor us
          </Link>

          <Link
            href=""
            className="border-primary border-2 py-2 md:px-8  lg:px-12 text-black text-base font-bold rounded-lg text-center w-full "
          >
            See Sponsorship Deck
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
