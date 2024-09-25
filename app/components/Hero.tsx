import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="container md:h-screen bg-cover bg-center bg-no-repeat rounded-b-3xl mt-24"
      style={{ backgroundImage: "url('/hero image.svg')" }}
    >
      <div className="text-white p-10 md:p-20 flex flex-col justify-between h-full">
        <div>
          <h1 className="text-7xl md:text-8xl font-bold text-center md:text-left">
            Anambra Web3 Conference
          </h1>
          <p className="text-4xl md:text-3xl text-center md:text-left">
            Exploring the decentralized Web
          </p>
        </div>
        <div className="mt-10 md:mt-24">
          <h2 className="text-white text-5xl md:text-4xl text-center md:text-left">
            <span className="font-bold">2nd Nov 2024</span> 9:00 AM
          </h2>
          <p className="md:text-lg text-3xl text-center md:text-left">
            Hollywood event centre, Awka, Anambra
          </p>

          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row justify-center md:justify-start">
              <Link
                href=""
                className="text-white text-base bg-primary text-center md:items-center py-3 px-7 rounded-lg mb-3 md:mb-0 md:mr-3"
              >
                Register Here
              </Link>
              <Link
                href=""
                className="text-black text-base bg-white text-center md:items-center py-3 px-7 rounded-lg"
              >
                Apply to Speak
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-10 md:mt-0">
              <div className="flex items-center justify-center md:mr-20">
                <p className="mr-3">Powered By</p>
                <Image
                  src="/ATC_LOGO_White.png"
                  alt=""
                  width={80}
                  height={80}
                  className="w-12 h-12"
                />
              </div>
              <div className="flex justify-center mt-5 md:mt-0 md:mr-10">
                <div className="text-center md:text-left">
                  <p className="text-primary text-2xl md:text-3xl font-bold">
                    10+
                  </p>
                  <p>Skilled Speakers</p>
                </div>
                <div className="ml-5 text-center md:text-left">
                  <p className="text-primary text-2xl md:text-3xl font-bold">
                    1500+
                  </p>
                  <p>Attendees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
