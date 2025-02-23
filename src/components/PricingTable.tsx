const PricingTable = () => {
  const features = [
    "Sales system tools setup",
    "Number of Student(s)",
    "Training",
    "First Month Tools Subscription",
    "Subsequent Monthly Tools Subscription",
    "Consultation",
    "Recruit, Onboard & Train Sales Talent",
    "Call Agent",
    "Phone Number",
    "Monthly Emails",
    "Leads Monthly",
  ];

  const plans = [
    {
      name: "Startup",
      oneOffAmount: "450,000",
      features: [
        "One - off",
        "1",
        "3 days - 10 hours",
        "Basic - ₦35,000 + $49",
        "Basic - ₦32,000",
        "30 minutes",
        "",
        "Up to 5",
        "1 Nigeria",
        "3,000",
        "3,000",
      ],
    },
    {
      name: "Growth",
      oneOffAmount: "900,000", // Corrected value
      features: [
        "One off + one month maintenance",
        "2",
        "4 days - 12 hours",
        "Growth - ₦35,000 + $49",
        "Basic - ₦40,000 + $25",
        "1 hour",
        "1 Staff",
        "Up to 7",
        "1 Nigeria + 1 US Number available",
        "5,000",
        "6,600",
      ],
    },
    {
      name: "Scale",
      oneOffAmount: "1,500,000",
      features: [
        "One off + Two month maintenance",
        "4",
        "5 days - 15 hours",
        "Premium - ₦35,000 + $74",
        "Basic - ₦45,000 + $49",
        "2 hours",
        "3 Staff",
        "Up to 8",
        "1 Nigeria + extra US and Nigeria numbers available",
        "10,000",
        "10,000",
      ],
    },
    {
      name: "Custom",
      oneOffAmount: "TBD",
      features: [
        "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
      <table className="min-w-full border border-collapse table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Features</th>
            {plans.map((plan, index) => (
              <th key={index} className="border px-4 py-2 text-center md:w-[220px]">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border px-4 py-2">{feature}</td>
              {plans.map((plan, planIndex) => (
                <td key={planIndex} className="border px-4 py-2 text-center">
                  {plan.features[index]}
                </td>
              ))}
            </tr>
          ))}
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">One Off Amount (₦)</td>
            {plans.map((plan, index) => (
              <td key={index} className="border px-4 py-2 text-center">
                {plan.oneOffAmount}
              </td>
            ))}
          </tr>
          <tr className='last-row'>
            <td className="px-4 py-2"></td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-[#0A5594] hover:bg-green-700 text-white font-normal text-xs md:text-base whitespace-nowrap md:font-bold py-2 px-4 rounded-[32px]">
                  Choose Your Plan
                </button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-[#37B34A] hover:bg-green-700 text-white font-normal text-xs md:text-base whitespace-nowrap md:font-bold py-2 px-4 rounded-[32px]">
                  Choose Your Plan
                </button>
              </td>
              <td className="border px-4 py-2 text-center">
                <button className="bg-[#258DCD] hover:bg-green-700 text-white font-normal text-xs md:text-base whitespace-nowrap md:font-bold py-2 px-4 rounded-[32px]">
                  Choose Your Plan
                </button>
              </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className='flex justify-center items-center mt-4'></div>
    </div>
  );
};

export default PricingTable;