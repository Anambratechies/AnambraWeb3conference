"use client";

import { useState } from "react";
import Image from "next/image";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked question
  };

  const faqData = [
    {
      question: "How do I become a speaker?",
      answer:
        "We receive a significant volume of requests. You might have a chance if you apply early enough.",
    },
    {
      question: "Need an invitation letter for your visa?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis ante a massa lobortis feugiat. Fusce sit amet dui vitae justo mollis sagittis efficitur eget enim. Sed ac iaculis massa, in feugiat ",
    },
    {
      question: "Is the free or are we expected to pay at the venue",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis ante a massa lobortis feugiat. Fusce sit amet dui vitae justo mollis sagittis efficitur eget enim. Sed ac iaculis massa, in feugiat ",
    },
    {
      question: "What if I have more questions?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis ante a massa lobortis feugiat. Fusce sit amet dui vitae justo mollis sagittis efficitur eget enim. Sed ac iaculis massa, in feugiat ",
    },
  ];

  return (
    <div className="container p-10 md:p-20 mt-10">
      <p className="text-primary text-2xl">Learn more</p>
      <h2 className="font-bold text-4xl">FAQ</h2>
      <div className="mt-10">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-8 mb-4 rounded-3xl">
            {/* Question Section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <p className="font-bold text-xl">{faq.question}</p>
              <Image
                src={
                  activeIndex === index ? "/arrow-up.svg" : "/arrow-down.svg"
                }
                alt="Toggle Arrow"
                width={24}
                height={24}
              />
            </div>

            {/* Answer Section */}
            {activeIndex === index && (
              <div className="mt-4 text-gray-700">
                <p className="text-xl">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
