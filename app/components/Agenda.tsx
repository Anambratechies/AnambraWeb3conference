import React from "react";
import Image from "next/image";

const Agenda = () => {
  return (
    <div className="container md:p-20 p-10 mt-20">
      <p className="text-primary text-2xl">Explore</p>
      <h2 className="font-bold text-4xl">Agenda</h2>
      <div className="bg-primary p-4 mt-16 w-60 rounded-lg">
        <span className="bg-white font-bold p-2 rounded-lg">Conference</span>
        <span className="font-bold text-white ml-4">Hackathon</span>
      </div>

      {/* Agenda sections */}
      <div className="bg-gray-100 mt-10 px-4 md:px-10 py-6 rounded-3xl">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4">
            <p className="font-bold text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary mt-6">Starts</p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-bold text-2xl">Registration</p>
            <p className="flex mt-6 items-center">
              <Image
                src="/location-05.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">
                Hollywood event centre, Awka, Anambra
              </span>
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4">
            <p className="font-bold text-4xl">
              09:55<span className="ml-2">am</span>
            </p>
            <p className="text-primary mt-6">
              5<span className="ml-1">mins</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-bold text-2xl">Opening</p>
            <p className="flex mt-6 items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">Collins Alfred</span>
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4">
            <p className="font-bold text-4xl">
              10:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary mt-6">
              20<span className="ml-1">mins</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-bold text-2xl">Web3 Security from the pro</p>
            <p className="flex mt-6 items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">Tunde Okafor</span>
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4">
            <p className="font-bold text-4xl">
              10:20<span className="ml-2">am</span>
            </p>
            <p className="text-primary mt-6">
              20<span className="ml-1">mins</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-bold text-2xl">
              The future of Afro-centered Animations in Web3
            </p>
            <p className="flex mt-6 items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">Arinze Johnson</span>
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="flex flex-col md:flex-row py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4">
            <p className="font-bold text-4xl">
              10:40<span className="ml-2">am</span>
            </p>
            <p className="text-primary mt-6">
              20<span className="ml-1">mins</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-bold text-2xl">
              What Anambra Techies is doing in the web3 space
            </p>
            <p className="flex mt-6 items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">Funke Bamisola</span>
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="flex flex-col md:flex-row py-10 text-left">
          <div className="md:w-1/4">
            <p className="font-bold text-4xl">
              11:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary mt-6">
              20<span className="ml-1">mins</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="font-bold text-2xl">
              Navigating the Web3 Social Landscape: Balancing User Privacy &
              Data Ownership
            </p>
            <p className="flex mt-6 items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">Tsumugi Mei, Mustaphy Decosanttus</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
