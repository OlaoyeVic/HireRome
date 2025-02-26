import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { usePaystackPayment } from "react-paystack";
import SuccessModal from './SuccessModal';

interface Plan {
  name: string;
  price: string;
  amount: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
  popularity?: string;
};

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  const plans = [
    {
      name: 'Start Up',
      price: 'N450,000',
      amount: '450000',
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
      amount: '1500000',
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
      amount: '900000',
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

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: "", // Will be set dynamically
    amount: Number(selectedPlan?.amount || 0) * 100,
    publicKey: "pk_live_24d621bf7507b757f14074cf356b682dba0b33d2",
    metadata: {
      custom_fields: [
        {
          name: "",
          email: "",
          phonenumber: "",
          plan: selectedPlan?.name || "",
          amount: selectedPlan?.price || "",
          companyName: "",
          companyEmail: "",
          display_name: "Customer",
          variable_name: "customer",
          value: JSON.stringify({
            name: "",
            email: "",
            phonenumber: "",
            plan: selectedPlan?.name || "",
            companyName: "",
            companyEmail: "",
          }),
        },
        // To pass extra metadata, add an object with the same fields as above
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert("Form submitted");
    if(!selectedPlan) return;
    try {
      setIsSubmitting(true);
      const formData = new FormData(e.currentTarget);
      // const name = formData.get("name") as string;
      config.metadata.custom_fields[0].name = formData.get(
        "name"
      ) as string;
      config.email = formData.get("email") as string;
      config.metadata.custom_fields[0].email = formData.get(
        "email"
      ) as string;
      config.metadata.custom_fields[0].phonenumber = formData.get(
        "phonenumber"
      ) as string;
      config.metadata.custom_fields[0].plan = formData.get(
        "plan"
      ) as string;
      config.metadata.custom_fields[0].amount = formData.get(
        "amount"
      ) as string;
      config.metadata.custom_fields[0].companyName = formData.get(
        "companyName"
      ) as string;
      config.metadata.custom_fields[0].companyEmail = formData.get(
        "companyEmail"
      ) as string;
      initializePayment({ onSuccess, onClose });
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }

    // const email = formData.get("email") as string;
    // const phonenumber = formData.get("phonenumber") as string;
    // const companyName = formData.get("companyName") as string;
    // const companyEmail = formData.get("companyEmail") as string;
  };

  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);

    setIsSubmitting(false);
    closeModal();
    setIsSuccessModalOpen(true);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

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
            <button 
              className="mt-6 w-full py-2 bg-[#0A5594] text-white rounded-md transition-all hover:bg-[#F68923] hover:text-white border border-blue-600"
              onClick={() => handleSelectPlan(plan)}
            >
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-full lg:w-[70%] max-h-[100vh] relative overflow-hidden flex flex-col">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-left text-2xl font-semibold mb-4">
              {selectedPlan.name}
            </h2>
            <p className="text-left text-gray-600 mb-6">Price: {selectedPlan.price}</p>
            <div className=" overflow-y-auto flex-1 mt-4">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mb-8">
                  {" "}
                  {/* Two-column grid */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-left text-gray-700 font-medium mb-2"
                    >
                      Fullname
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phonenumber"
                      className="block text-left text-gray-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phonenumber"
                      name="phonenumber"
                      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-left text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-left text-gray-700 font-medium mb-2"
                    >
                      Company's name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="companyEmail"
                      className="block text-left text-gray-700 font-medium mb-2"
                    >
                      Company's Email Address
                    </label>
                    <input
                      type="companyEmail"
                      id="companyEmail"
                      name="companyEmail"
                      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#6FC446] hover:bg-#6FC446-600 text-white font-medium py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-#6FC446-300 flex items-center justify-center whitespace-nowrap"
                >
                  {isSubmitting ? (
                    "Submitting"
                  ) : (
                    <>
                      Submit{" "}
                      <IoIosArrowForward
                        color="white"
                        style={{ marginLeft: "4px" }}
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {isSuccessModalOpen && (
        <SuccessModal onClose={() => setIsSuccessModalOpen(false)} />
      )}
    </div>
  );
};

export default PricingPlans;