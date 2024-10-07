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
      answer: (
        <>
          You can apply to become a speaker by filling out this form:{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSflcH2wGS2tYpUyPRoC5Ln0inntvVFAVxfWogWJ16vysPib7w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Speaker Application Form
          </a>
          .
        </>
      ),
    },
    {
      question: "Need an invitation letter for your visa?",
      answer:
        "If you require an invitation letter for your visa application, please contact our support team at [anambraweb3conference@gmail.com] with your details, and we will assist you.",
    },
    {
      question: "Is the event free, or are we expected to pay at the venue?",
      answer:
        "The event is free to attend. There are no charges required at the venue.",
    },
    {
      question: "What if I have more questions?",
      answer:
        "If you have any more questions, feel free to reach out to us at [anambraweb3conference@gmail.com], and we'll be happy to assist you.",
    },
  ];

  return (
    <div className="container py-20 md:p-20 mt-10">
      <p className="text-primary md:text-2xl">Learn more</p>
      <h2 className="font-bold text-3xl md:text-4xl">FAQ</h2>
      <div className="mt-10">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-gray-100  p-4 md:p-8 mb-4 rounded-3xl">
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
