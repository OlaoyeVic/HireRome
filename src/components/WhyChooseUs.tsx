import { motion } from "framer-motion";
import card from "../assets/card1.svg"

const WhyChooseUs = () => {
  const cards = [
    {
      text: "Only Nigerian company offering this level of service affordably",
      image: card,
    },
    {
      text: "Tools fully accessible with Naira payments",
      image: card,
    },
    {
      text: "Complete setup, training, and ongoing support",
      image: card,
    },
    {
      text: "Proven system to boost your sales 5X – 10X in weeks",
      image: card,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F1F5F9]-[.90] via-[#FFFFFF]/90 to-[#37B34A] py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
      <p>Why the 10X Sales System is Different</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-20">
        {cards.map((card, index) => (
          <div key={index} className="relative w-[280px] h-[354px] group">
            {/* Background Image */}
            <div
              className="absolute inset-0 rounded-xl bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url('${card.image}')`,
                transform: "translateZ(-50px) scale(1.1)", // Push image back
                filter: "blur(3px)", // Optional effect
              }}
            />

            {/* Animated Card */}
            <motion.div
              className="relative z-10 w-full h-full bg-[#0A5594] rounded-xl flex p-6 shadow-lg"
              initial={{ rotateY: 0, translateY: 0, translateX: 0 }}
              whileHover={{
                rotateY: 30, // Tilts right
                translateY: 30, // Moves down slightly
                translateX: 30, // Moves right slightly (diagonal effect)
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <p className="text-bold text-base md:text-lg leading-[26px] text-white text-left">
                {card.text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
