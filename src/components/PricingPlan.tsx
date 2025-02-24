import Pricing from "./Pricing";

const PricingPlan = () => {
  return (
    <section className="bg-gradient-to-b from-[#F1F5F9]-[.90] via-[#FFFFFF]-[.0] to-[#37B34A] py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-2">Pricing Plan</h2>
      <p>Affordable Plans For Every Business Size</p>

      <div className="md:mt-20"><Pricing /></div>
      <div className="md:mt-4 px-6 md:px-32 flex justify-start items-center">
        <h4 className="font-bold text-lg">For Custom Plan: <span><button className="mt-6 ml-3 p-2 bg-[#0A5594] text-white rounded-md transition-all hover:bg-[#F68923] hover:text-white">Contact Us</button></span></h4>
      </div>
      {/* <div className="mt-16 md:mt-20"><PricingTable /></div> */}
    </section>
  )
}
export default PricingPlan;