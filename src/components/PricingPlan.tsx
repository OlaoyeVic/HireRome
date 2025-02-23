import PricingTable from "./PricingTable";

const PricingPlan = () => {
  return (
    <section className="bg-gradient-to-b from-[#F1F5F9]-[.90] via-[#FFFFFF]-[.0] to-[#37B34A] py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-2">Pricing Plan</h2>
      <p>Affordable Plans For Every Business Size</p>

      <div className="mt-16 md:mt-20"><PricingTable /></div>
    </section>
  )
}
export default PricingPlan;