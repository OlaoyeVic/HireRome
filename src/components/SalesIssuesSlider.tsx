import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import issues1 from "../assets/issues1.svg";
import waves from "../assets/waves.jpeg";

const issues: (keyof typeof issueImages)[] = [
  "Expensive sales tools that aren't affordable in Naira.",
  "Generating quality leads consistently",
  "Unstructured sales processes leading to wasted opportunities",
  "Ineffective outreach strategies (calls, emails, and CRM management)",
  "Lack of sales team training or expertise",
  "Paying for tools that don't integrate easily with each other",
  "Underperforming sales processes that fail to convert leads into customers",
];

const issueImages = {
  "Expensive sales tools that aren't affordable in Naira.": `${issues1}`,
  "Generating quality leads consistently": `${issues1}`,
  "Unstructured sales processes leading to wasted opportunities": `${issues1}`,
  "Ineffective outreach strategies (calls, emails, and CRM management)": `${issues1}`,
  "Lack of sales team training or expertise": `${issues1}`,
  "Paying for tools that don't integrate easily with each other": `${issues1}`,
  "Underperforming sales processes that fail to convert leads into customers": `${issues1}`,
};

const SalesIssuesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % issues.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentIssueImage: string = issueImages[issues[currentIndex]];

  return (
    <section 
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 mx-auto bg-cover relative"
      style={{ 
        backgroundImage: `url(${waves})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Side - Animated List */}
      <div className="w-full md:w-1/2 relative space-y-4 text-lg font-medium">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Tired of Expensive Sales Tools That Don’t Deliver?
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          We have seen many businesses and companies struggle with sales, and we
          understand many of the challenges faced by customers. Are you part of
          these categories?
        </p>
        <div className="mt-6 space-y-4">
        {issues.map((issue, index) => (
          <div key={index} className="relative overflow-hidden">
            {currentIndex === index && (
              <motion.div
                className="absolute inset-0 bg-blue-600 h-full w-full"
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            )}
            <span className="relative z-10">{issue}</span>
          </div>
        ))}
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={currentIssueImage}
          alt="Sales Challenges"
          className="max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
};

export default SalesIssuesSection;

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const items = [
//   "Unstructured sales processes leading to wasted opportunities",
//   "Ineffective outreach strategies (calls, emails, and CRM management)",
//   "Underperforming sales processes that fail to convert leads into customers",
// ];

// const SliderSection = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % items.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="p-8 text-center relative max-w-3xl mx-auto">
//       {/* Section Header */}
//       <h2 className="text-2xl font-bold mb-4">
//         Tired of Expensive Sales Tools That Don’t Deliver?
//       </h2>
//       <p className="mb-6">
//         We have seen many businesses and companies struggle with sales, and we
//         understand many of the challenges faced by customers. Are you part of
//         these categories?
//       </p>

//       <div className="relative h-16 overflow-hidden"> {/* Adjusted height */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ x: "-100%", opacity: 0 }}
//             animate={{ x: "0%", opacity: 1 }}
//             exit={{ x: "100%", opacity: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="absolute w-full bg-[#2B6CB0] text-white py-2 px-4 rounded-lg text-center" // Combined styles
//           >
//             {items[index]}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default SliderSection;