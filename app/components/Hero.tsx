import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className=" pt-1">
      <div
        id="hero"
        className="  lg:h-screen bg-cover bg-center bg-no-repeat rounded-b-3xl mt-24"
        style={{ backgroundImage: "url('/hero image.svg')" }}
      >
        <div className="text-white pt-10 lg:p-16 md:p-10 container flex flex-col md:gap-32 gap-24 justify-between">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold  text-left">
              Anambra Web3 Conference
            </h1>
            <p className="text-2xl md:text-3xl text-left">
              Exploring the decentralized Web
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-white text-2xl md:text-4xl text-left">
                <span className="font-bold">2nd Nov 2024</span> 9:00 AM
              </h2>
              <p className="md:text-lg text-xl text-left">
                Hollywood event centre, Awka, Anambra
              </p>
            </div>

            <div className=" flex flex-col md:flex-row flex-wrap gap-3 pb-10 md:gap-6 md:items-center md:justify-between">
              <div className="flex flex-col gap-3 md:flex-row justify-center md:justify-start">
                <Link
                  href=""
                  className="text-white text-base bg-primary text-center md:items-center py-3 px-7 rounded-lg "
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
              <div className="flex gap-4 md:flex-row flex-col-reverse lg:items-center justify-center lg:justify-start md:justify-between">
                <div className="flex items-center justify-center ">
                  <p className="mr-3">Powered By</p>
                  <Image
                    src="/ATC_LOGO_White.png"
                    alt=""
                    width={100}
                    height={100}
                    className=""
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
    </div>
  );
};

export default Hero;
