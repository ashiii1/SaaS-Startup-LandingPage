import { FC } from "react";

type PricingPlan = {
  title: string;
  price: string;
  features: string[];
};

export const Pricing: FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      title: "Basic Plan",
      price: "$19/month",
      features: [
        "Access to all basic features",
        "5 GB Storage",
        "Basic Support",
      ],
    },
    {
      title: "Pro Plan",
      price: "$49/month",
      features: [
        "Access to all pro features",
        "50 GB Storage",
        "Priority Support",
        "Advanced Analytics",
      ],
    },
    {
      title: "Enterprise Plan",
      price: "$99/month",
      features: [
        "Access to all enterprise features",
        "Unlimited Storage",
        "Dedicated Account Manager",
        "Custom Integrations",
      ],
    },
  ];

  const checkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <section className="bg-slate-900 pt-10 pb-10 text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Choose the Perfect Plan for Your Business
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Flexible pricing plans that scale with your business needs.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
            
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-8 text-center bg-slate-800"
            >
              <h3 className="text-3xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="text-left space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    {checkIcon}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 rounded">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
