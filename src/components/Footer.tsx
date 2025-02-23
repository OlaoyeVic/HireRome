import logo from "../assets/logo.svg"
import phone from "../assets/phone.svg"
import whatsapp from "../assets/whatsapp.svg"
import mail from "../assets/mail.svg"
import youtube from "../assets/youtube.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F1F5F9]-[.90] via-[#FFFFFF]/90 to-[#37B34A] py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="md:w-full md:max-w-none md:min-w-[400px]">
          <div className="flex items-center gap-2">
            <img src={logo} alt="HireROME Logo" className="h-[74px] w-[213px]" />
          </div>
          <p className="text-gray-600 mt-4">
            HireROME connects job seekers with premium opportunities, offering expert training and
            certification for success, while providing employers access to pre-vetted, highly skilled talent.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
            <img src={mail} alt="mail" className="w-[20px] h-[20px]" />
              <a href="mailto:business@cyclebreeze.com" className="hover:text-blue-500">businesscyclebreeze.com</a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <img src={whatsapp} alt="Whatsapp" className="w-[20px] h-[20px]" />
              <span>+2348109976152</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <img src={phone} alt="phone" className="w-[20px] h-[20px]" />
              <span>+2342013309116</span>
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="md:ml-24">
          <h4 className="font-semibold text-gray-800 mb-3">SITEMAP</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Packages</a></li>
            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
          </ul>
        </div>

        {/* Terms of Use */}
        <div className="md:ml-24">
          <h4 className="font-semibold text-gray-800 mb-3">TERMS OF USE</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms and Condition</a></li>
            <li><a href="#" className="hover:text-blue-500 font-semibold">CALL CENTRE</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:ml-24">
          <h4 className="font-semibold text-gray-800 mb-3">RESOURCES</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-blue-500">Training</a></li>
            <li><a href="#" className="hover:text-blue-500">Help Centre</a></li>
            <li><a href="#" className="hover:text-blue-500">Services</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>&copy; 2025 HireROME. All Rights Reserved. | Designed With <span className="text-blue-500">💙</span> by Cyclebreeze</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500"><img src={youtube} alt="youtube" /></a>
          <a href="#" className="hover:text-blue-500"><img src={facebook} alt="facebook" /></a>
          <a href="#" className="hover:text-blue-500"><img src={twitter} alt="twitter" /></a>
          <a href="#" className="hover:text-blue-500"><img src={instagram} alt="instagram" /></a>
          <a href="#" className="hover:text-blue-500"><img src={linkedin} alt="linkedin" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;