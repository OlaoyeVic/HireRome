import { motion } from 'framer-motion';
import hero from "../assets/hero.svg";

const Hero = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <section className="relative flex items-center justify-between px-6 md:px-16 pb-20 bg-white overflow-hidden"> {/* Added overflow-hidden */}
      {/* Left Content */}
      <motion.div
        className="max-w-2xl"
        variants={leftVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Supercharge Your Sales with the{" "}
          <span className="text-orange-500">10X Sales System!</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Find top remote jobs in the US, UK, and Canada. Whether you're ready
          to land your dream role, need training to stand out, or are looking to
          hire top African talent, Hire ROME is your trusted partner.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
          Get Started →
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="hidden md:flex relative"
        variants={rightVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={hero}
          alt="Happy Shopper"
          className="w-[400px] h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;