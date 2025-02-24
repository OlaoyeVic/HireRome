import { motion } from 'framer-motion';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Start Up',
      price: 'N450,000',
      description: 'One – Off Amount\nOne - off Sales system tools setup',
      features: [
        'Number of Student(s): 1',
        'Training: 3 days – 10 hours',
        'First Month Tools Subscription: Basic – N35,000 + $49',
        'Subsequent Monthly Tools Subscription: Basic - N32,000',
        'Consultation: 30 minutes',
        'Call Agent : Up to 5',
        'Phone Number : 1 Nigeria',
        'Monthly Emails: 3,000',
        'Lead Emails: 3,300',
      ],
      color: "#000000",
      bgColor: "#FFFFFF",
    },
    {
      name: 'Scale',
      price: 'N1,500,000',
      description: 'One – Off Amount\nOne off + two-month maintenance',
      features: [
        'Number of Student(s): 4',
        'Training: 5 days – 15 hours',
        'First Month Tools Subscription: Premium – N35,000 + $74',
        'Subsequent Monthly Tools Subscription: Basic – N45,000 + $49',
        'Consultation: 2 hours',
        'Recruit, Onboard & Train Sales Talent : 3 staff',
        'Call Agent : Up to 8',
        'Phone Number : 1 Nigeria + extra US and Nigeria numbers available',
        'Monthly Emails: 10,000',
        'Lead Emails: 10,000',
      ],
      color: "#FFFFFF",
      bgColor: "#F68923",
    },
    {
      name: 'Growth',
      price: 'N900,000',
      description: 'One – Off Amount\nOne off + one-month maintenance',
      features: [
        'Number of Student(s): 2',
        'Training: 4 days – 12 hours',
        'First Month Tools Subscription : Growth – N35,000 + $49',
        'Subsequent Monthly Tools Subscription: Basic – N40,000 + $25',
        'Consultation: 1 hour',
        'Recruit, Onboard & Train Sales Talent: 1 staff',
        'Call Agent : Up to 7',
        'Phone Number : 1 Nigeria + 1 US Number available',
        'Monthly Emails: 5,000',
        'Lead Emails: 6,600',
      ],
      popularity: 'Most Popular',
      color: '#000000',
      bgColor: '#FFFFFF',
    },
  ];

  const CheckIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-9"
      />
    </svg>
  );

  return (
    <div className="relative flex flex-col items-center justify-center pt-20 md:py-20">
      {/* Background mats */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[95%] bg-white rounded-2xl shadow-xl"></div>
      <div className="hidden md:block absolute top-5 left-1/2 -translate-x-1/2 w-[85%] h-[85%] bg-white rounded-2xl shadow-lg"></div>

      {/* Pricing cards */}
      <div className="relative flex flex-col md:flex-row gap-8 z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`relative w-80 rounded-2xl p-6 shadow-md border transition-all`}
            style={{ backgroundColor: plan.bgColor }}
            whileHover={{ backgroundColor: '#0A5594', color: '#ffffff' }}
          >
            <h3 
              className="text-xl font-bold text-left hover:text-white"
              style={{ color: plan.color,  }}
            >
              {plan.name}
            </h3>
            <p 
              className="text-2xl font-bold mt-2 text-left hover:text-black"
              style={{ color: plan.color }}
            >
              {plan.price}
            </p>
            <p 
              className="text-sm mt-2 text-left hover:text-white"
              style={{ color: plan.color }}
            >
              {plan.description}
            </p>
            <div className='bg-[#F68923] rounded-lg p-2 text-xs font-normal text-center text-white absolute top-2 right-4'>{plan.popularity}</div>
            <ul className="mt-4 space-y-4 px-2 mb-8">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex justiffy-left items-center w-full`}
                >
                  <div
                    className="flex items-center justify-center min-w-8 min-h-8 w-8 h-8 mr-3 hover:bg-[#F68923]"
                    style={{
                      backgroundColor: '#0A5594',
                      borderRadius: "50%",
                    }}
                  >
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <span 
                    className="font-normal text-[12px] text-left"
                    style={{ color: plan.color }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 bg-[#0A5594] text-white rounded-md transition-all hover:bg-[#F68923] hover:text-white border border-blue-600">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;