import { motion, useInView } from "framer-motion";
import screens from "../assets/screens.png"
import { useRef } from "react";

const salesSystem = [
  "Enable your team to make 100 – 300 outbound calls daily for greater sales conversions",
  "Generate up to 50 – 500 high-quality leads daily without expensive ads",
  "Automate email follow-ups and client management using CRM integration",
  "Improve customer response rates with structured sales scripts and comprehensive training.",
  "Eliminate the need for expensive, inaccessible international tools, saving your business money",
  "Optimize lead management, tracking, and outreach across all channels with seamless integration",
]

const SalesSystem = () => {
  const CheckIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-9"
      />
    </svg>
  );

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const rightVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 } },
  };
  return (
    <section 
      className="w-full bg-gradient-to-b from-[#F68923] via-[#F68923] to-[#37B34A] text-white flex flex-col gap-8 md:flex-row items-center justify-between px-6 md:px-16 py-12 mx-auto"
      ref={sectionRef}
    >
      {/* Left Side */}
      <motion.div 
        className="w-full md:w-1/2 relative space-y-4 text-lg font-medium"
        variants={leftVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight text-left">
          Introducing the 10X Sales System – Your Sales Growth Partner!
        </h1>
        <ul className="mt-6 space-y-4 text-white">
          {salesSystem.map((system, index) => (
            <li key={index} className="flex items-center w-full space-y-2">
              <div 
                className="flex items-center justify-center min-w-6 min-h-6 w-6 h-6"
              >
                <CheckIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-normal md:text-base text-[12px]">
                {system}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right Side */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        variants={rightVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <img src={screens} alt="Sales system" className="max-w-xs md:max-w-md" />
      </motion.div>
    </section>
  )
}
export default SalesSystem