import { useState } from "react";
import { motion } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

const faqs = [
  { question: "What do HireROME do?", answer: "HireROME connects professionals with job opportunities in various industries." },
  { question: "What do HireROME do?", answer: "We provide career resources and networking opportunities for job seekers." },
  { question: "What do HireROME do?", answer: "Our platform helps companies find the best talent for their needs." },
  { question: "What do HireROME do?", answer: "We offer recruitment solutions tailored to different business sizes." },
  { question: "What do HireROME do?", answer: "HireROME simplifies job searching with smart recommendations and AI-driven matches." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-semibold text-center mb-8">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="flex justify-between items-center w-full py-4 text-left text-blue-600 font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <BiChevronDown
                className={`w-5 h-5 text-[#F68923] transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="px-4 py-2 text-gray-700">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}