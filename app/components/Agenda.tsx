import React from "react";
import Image from "next/image";

const Agenda = () => {
  return (
    <div className="container mt-20 lg:p-20 md:p-10">
      <p className="text-primary md:text-2xl">Explore</p>
      <h2 className="text-3xl font-bold md:text-4xl">Agenda</h2>
      <div className="p-4 mt-16 rounded-lg bg-primary w-60">
        <span className="p-2 font-bold bg-white rounded-lg">Conference</span>
        <span className="ml-4 font-bold text-white">Hackathon</span>
      </div>

      {/* Agenda sections */}
      <div className="flex flex-col gap-4 px-4 py-6 mt-10 bg-gray-100  md:px-10 rounded-3xl">
        {/* Section 1 */}
        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Registration </p>
            <p className="flex items-center">
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

        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Registration </p>
            <p className="flex items-center">
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

        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Registration </p>
            <p className="flex items-center">
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

        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Registration </p>
            <p className="flex items-center">
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

        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Registration </p>
            <p className="flex items-center">
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
        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Registration </p>
            <p className="flex items-center">
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

        {/* Section 7 */}
        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              09:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Registration </p>
            <p className="flex items-center">
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
