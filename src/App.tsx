import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingPlan from "./components/PricingPlan";
import SalesIssuesSection from "./components/SalesIssuesSlider";
import SalesSystem from "./components/SalesSystem";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  return (
    <div className="bg-gray-100 w-full">
      <Navbar />
      <Hero />
      <SalesIssuesSection />
      <SalesSystem />
      <Features />
      <PricingPlan />
      <Testimonial />
      <WhyChooseUs />
      <GetStarted />
      <GetInTouch />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;