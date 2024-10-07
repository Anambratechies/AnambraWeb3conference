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
            <p className="text-xl font-bold md:text-2xl">
              {" "}
              Registration & Networking
            </p>
            <p className="flex items-center">
              <Image
                src="/location-05.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">
                Attendees check-in, receive badges, and network
              </span>
            </p>
          </div>
        </div>

        {/* Section 2 */}

        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              10:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Opening Remarks</p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">
                Welcome address by organisers and partners
              </span>
            </p>
          </div>
        </div>

        {/* Section 3 */}

        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              10:30<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Keynote Session</p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">Web3: the past, present and future</span>
            </p>
          </div>
        </div>

        {/* Section 4 */}

        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              11:00<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl">
              {" "}
              Panel Discussion 1{" "}
            </p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">
                Women in Web3: Challenges and Opportunities
              </span>
            </p>
          </div>
        </div>

        {/* Section 5 */}

        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              11:30<span className="ml-2">am</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Workshop 1</p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">
                Building on Solana: Developer Insights
              </span>
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              12:00<span className="ml-2">pm</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Lunch Break</p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">
                Catering and networking opportunities at the exhibition booths
              </span>
            </p>
          </div>
        </div>

        {/* Section 7 */}
        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              1:00<span className="ml-2">pm</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl">
              {" "}
              Panel Discussion 2{" "}
            </p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">
                Making Crypto Accessible for everyone
              </span>
            </p>
          </div>
        </div>

        {/* Section 8 */}
        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              1:30<span className="ml-2">pm</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Workshop 2 </p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">Introduction to Smart Contracts</span>
            </p>
          </div>
        </div>

        {/* Section 9 */}
        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              2:00<span className="ml-2">pm</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl">
              {" "}
              Panel Discussion 3{" "}
            </p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">
                The Future of DeFi: Trends and Predictions
              </span>
            </p>
          </div>
        </div>

        {/* Section 10 */}
        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              2:30<span className="ml-2">pm</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl"> Closing Keynote </p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">The Road Ahead for Web3 in Africa</span>
            </p>
          </div>
        </div>

        {/* Section 11 */}
        <div className="flex flex-col gap-2 text-left border-b border-gray-300 md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              3:00<span className="ml-2">pm</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl">
              {" "}
              Closing Remarks & Thank You{" "}
            </p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">Final words from organizers</span>
            </p>
          </div>
        </div>

        {/* Section 12 */}
        <div className="flex flex-col gap-2 text-left md:gap-4 md:flex-row md:py-10">
          <div className="flex flex-col-reverse md:w-1/4 md:flex-col gap- md:gap-4 ">
            <p className="text-2xl font-bold lg:text-4xl">
              3:00<span className="ml-2">pm</span>- 5:00
              <span className="ml-2">pm</span>
            </p>
            <p className="text-primary ">Starts</p>
          </div>
          <div className="flex flex-col gap-2  md:mt-0 md:gap-4">
            <p className="text-xl font-bold md:text-2xl">
              {" "}
              Web3 Conference After Party
            </p>
            <p className="flex items-center">
              <Image
                src="/mic-01.svg"
                alt=""
                width={100}
                height={100}
                className="w-6 h-6"
              />
              <span className="ml-2">
                A two-hour post-event party to encourage networking and
                Collaboration among participants.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
