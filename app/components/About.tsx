import React from "react";
import Link from "next/link";
import Image from "next/image";
import Countdown from "./Countdown";

const About = () => {
  const eventDate = "2024-11-02T00:00:00";

  return (
    <div className="container bg-white p-10 md:p-20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 items-center">
        <div className="col-span-1 md:order-2">
          <Image
            src="/group.svg"
            className="w-full md:w-96"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="col-span-2 md:order-1">
          <p className="text-primary text-2xl ">Learn more</p>
          <h2 className="font-bold text-4xl">About conference</h2>
          <p className="md:text-2xl text-3xl">
            Anambra Web3 conference is the first of its kind, designed to equip
            attendees and the people of Anambra with the knowledge to thrive in
            the decentralized economy, beyond just the crypto space, covering
            the entire web3 space.
          </p>
          <div className="mt-10 flex flex-col md:flex-row md:justify-start items-center w-full">
            <Link
              href=""
              className="text-white text-base font-bold bg-primary py-3 rounded-lg text-center w-full md:w-[calc(100%/2-1rem)] mb-4 md:mb-0 md:mr-8"
            >
              Register Here
            </Link>
            <div className="flex items-center border-primary border-2 rounded-lg py-3 w-full md:w-80">
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

      <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-24 gap-6">
        <div className="col-span-2">
          <Countdown targetDate={eventDate} />
        </div>
        <div className="col-span-1 text-center md:text-left">
          <p className="text-4xl font-bold">
            Register Today! <span className="text-primary">Time</span> waits for
            nobody
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
