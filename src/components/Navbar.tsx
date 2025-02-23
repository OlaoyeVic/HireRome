import { useState } from "react";
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-gray-900 flex items-center">
          <img src={logo} alt="HireRome Logo" />
        </a>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-[#0F172A]">
          <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
          <li><a href="#" className="hover:text-orange-500 transition">Talent</a></li>
          <li><a href="#" className="hover:text-orange-500 transition">Pricing</a></li>
          <li><a href="#" className="hover:text-orange-500 transition">Jobs</a></li>
          <li><a href="#" className="hover:text-orange-500 transition">Solution</a></li>
          <li><a href="#" className="hover:text-orange-500 transition">Resources</a></li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-[#0F172A] font-medium hover:text-orange-500 transition">Log In</a>
          <a 
            href="#" 
            className="px-4 py-2 text-white font-semibold hover:bg-[#F68923] transition"
            style={{
              color: "#0F172A",
              // backgroundColor: '#6FC446',
              border: `1px solid #F68923`,
              borderRadius: "8px",
            }}
          >
            Sign Up Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none z-50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6 z-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 z-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {/* {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[#F68923] shadow-md md:hidden flex flex-col space-y-4 px-6 py-4">
            <li><a href="#" className="block text-gray-700 hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-orange-500">Talent</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-orange-500">Pricing</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-orange-500">Jobs</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-orange-500">Solution</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-orange-500">Resources</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-orange-500">Log In</a></li>
            <li>
              <a 
                href="#" 
                className="block px-4 py-2 bg-none text-white text-center font-semibold"
                style={{
                  color: "#0F172A",
                  // backgroundColor: '#6FC446',
                  border: `1px solid #F68923`,
                  borderRadius: "8px",
                }}
              >
                Sign Up Now
              </a>
            </li>
          </ul>
        )} */}

<div
          className={`fixed top-0 right-0 w-3/4 h-full bg-white/90 text-black flex flex-col items-start justify-center px-6 gap-6 transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {[
            { name: "About us", link: "https://www.cyclebreeze.com/" },
            { name: "Talent", link: "https://www.cyclebreeze.com/about" },
            { name: "Pricing", link: "https://www.cyclebreeze.com/services" },
            { name: "Jobs", link: "https://www.cyclebreeze.com/projects" },
            { name: "Resources", link: "https://www.cyclebreeze.com/academy" },
            { name: "Login", link: "https://www.cyclebreeze.com/programs" },
            {
              name: "Sign up Now",
              link: "https://www.cyclebreeze.com/publications",
            },
          ].map((item, index) => (
            <a
              key={index}
              // href={item.link}
              // target="_blank"
              // rel="noopener noreferrer"
              className="block text-[#0F172A] hover:text-[#F68923]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;