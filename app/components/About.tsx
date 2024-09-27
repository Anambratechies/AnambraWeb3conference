import React from "react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "./Countdown";

const About = () => {
  const eventDate = "2024-11-02T00:00:00";

  return (
    <div id="about" className="container lg:px-16 lg:py-32 py-20 bg-white ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14 items-center">
        <div className="col-span-1 lg:order-2 flex justify-center items-center ">
          <Image
            src="/group.svg"
            className=" md:w-96 w-52"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="col-span-2 lg:order-1 gap-6 flex flex-col ">
          <div>
            <p className="text-primary text md:text-2xl">Learn more</p>
            <h2 className="font-bold text-3xl md:text-5xl">About conference</h2>
          </div>
          <p className="md:text-3xl text-xl">
            Anambra Web3 conference is the first of its kind, designed to equip
            attendees and the people of Anambra with the knowledge to thrive in
            the decentralized economy, beyond just the crypto space, covering
            the entire web3 space.
          </p>
          <div className="mt-10 gap-4 flex flex-col md:flex-row md:justify-start items-center w-full">
            <Link
              href=""
              className="text-white text-base font-bold bg-primary py-4 rounded-lg text-center px-16"
            >
              Register Here
            </Link>
            <div className="flex items-center border-primary border-2 rounded-lg  md:px-16 py-4 px-8">
              <Link
                href=""
                className="flex flex-row items-center justify-center w-full text-black text-base font-bold"
              >
                Add to calendar
                <Image
                  src="/calendar.svg"
                  className="w-6 ml-5"
                  alt=""
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-24 gap-6">
        <div className="col-span-2">
          <Countdown targetDate={eventDate} />
        </div>
        <div className="col-span-1 text-center md:text-left">
          <p className="md:text-4xl text-2xl font-bold">
            Register Today! <span className="text-primary">Time</span> waits for
            nobody
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
