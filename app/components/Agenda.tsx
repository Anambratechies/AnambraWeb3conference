import React from "react";
import Image from "next/image";

const Agenda = () => {
  return (
    <div className="container lg:p-20 md:p-10  mt-20">
      <p className="text-primary md:text-2xl">Explore</p>
      <h2 className="font-bold text-3xl md:text-4xl">Agenda</h2>
      <div className="bg-primary p-4 mt-16 w-60 rounded-lg">
        <span className="bg-white font-bold p-2 rounded-lg">Conference</span>
        <span className="font-bold text-white ml-4">Hackathon</span>
      </div>

      {/* Agend section */}
      <div className=" flex flex-col gap-4 bg-gray-100 mt-10 px-4 md:px-10 py-6 rounded-3xl">
        {/* Section 1 */}
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4 flex md:flex-col gap- md:gap-4 flex-col-reverse ">
            <p className="font-bold text-2xl lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className=" md:mt-0 flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-xl md:text-2xl"> Registration </p>
            <p className="flex  items-center">
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

        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4 flex md:flex-col gap- md:gap-4 flex-col-reverse ">
            <p className="font-bold text-2xl lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className=" md:mt-0 flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-xl md:text-2xl"> Registration </p>
            <p className="flex  items-center">
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

        {/* Section 3 */}

        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4 flex md:flex-col gap- md:gap-4 flex-col-reverse ">
            <p className="font-bold text-2xl lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className=" md:mt-0 flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-xl md:text-2xl"> Registration </p>
            <p className="flex  items-center">
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

        {/* Section 4 */}

        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4 flex md:flex-col gap- md:gap-4 flex-col-reverse ">
            <p className="font-bold text-2xl lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className=" md:mt-0 flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-xl md:text-2xl"> Registration </p>
            <p className="flex  items-center">
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

        {/* Section 5 */}

        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4 flex md:flex-col gap- md:gap-4 flex-col-reverse ">
            <p className="font-bold text-2xl lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className=" md:mt-0 flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-xl md:text-2xl"> Registration </p>
            <p className="flex  items-center">
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

        {/* Section 6 */}
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:py-10 border-b border-gray-300 text-left">
          <div className="md:w-1/4 flex md:flex-col gap- md:gap-4 flex-col-reverse ">
            <p className="font-bold text-2xl lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className=" md:mt-0 flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-xl md:text-2xl"> Registration </p>
            <p className="flex  items-center">
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
      </div>
    </div>
  );
};

export default Agenda;
