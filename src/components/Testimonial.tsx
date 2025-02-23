import { motion } from "framer-motion";
import jane from "../assets/jane.svg";
import deco from "../assets/deco.svg";
import { useState, useEffect } from "react";

const Testimonial = () => {
  const [bgColor, setBgColor] = useState("#0A5594");
  const [textColor, setTextColor] = useState("#FFFFFF");

  useEffect(() => {
    const colors = [
      { bg: "#0A5594", text: "#FFFFFF" }, // Initial color
      { bg: "#1A65A4", text: "#E0E0E0" }, // Example change 1
      { bg: "#2A75B4", text: "#D0D0D0" }, // Example change 2
      { bg: "#3A85C4", text: "#C0C0C0" }, // Example change 3
      { bg: "#0A5594", text: "#FFFFFF" }, // Back to initial (for looping)
    ];

    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length; // Loop through colors
      setBgColor(colors[currentIndex].bg);
      setTextColor(colors[currentIndex].text);
    }, 3000); // Change color every 3 seconds (adjust as needed)

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#F1F5F9]-[.90] via-[#FFFFFF]-[.0] to-[#37B34A] py-16 px-6 text-center">
      <motion.div
        className="sm:p-16 p-8 md:shadow-lg md:rounded-lg flex flex-col justify-between items-center gap-10 relative"
        style={{ backgroundColor: bgColor }} // Apply dynamic background color
        transition={{ duration: 3, ease: "easeInOut" }} // Smooth transitions
      >
        <motion.h2
          className="text-3xl font-extrabold my-8"
          style={{ color: textColor }} // Apply dynamic text color
          transition={{ duration: 3, ease: "easeInOut" }} // Smooth transitions
        >
          Testimonial
        </motion.h2>
        <div className="bg-white sm:p-16 p-8">
          <h4 className="text-center font-bold text-[24px] md:text-[32px]">
            See How Businesses Are Growing with the 10X Sales System.
          </h4>
          <p className="text-center font-normal text-[14px] md:text-[24px] my-4">
            Thanks to Cyclebreeze. We doubled our leads and closed more deals in
            just 4 weeks! This sales system really works, i recommend it to
            every business.
          </p>
          <div className="flex flex-col justify-center items-center mt-4">
            <img src={jane} alt="Jane Doe (Senior Designer)" />
            <h6 className="font-normal text-sm md:text-lg">Jane Doe</h6>
            <p className="text-black-100 font-normal text-xs md:text-base">
              Senior Designer
            </p>
          </div>
        </div>
        <img
          src={deco}
          alt="left decoration"
          className="absolute left-0 bottom-0 h-32 sm:h-[224px]"
        />
      </motion.div>
    </section>
  );
};

export default Testimonial;