import React from "react";

type PricingCard = {
  title: string;
  subtitle: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const PRICING_CARDS: PricingCard[] = [
  {
    title: "Subscription solutions",
    subtitle: "Subscription license",
    features: [
      "Microsoft 365",
      "Dynamics 365",
      "Microsoft Power Platform",
      "Oracle Cloud & NetSuite",
      "Salesforce",
      "Acumatica",
      "Web applications",
    ],
    cta: "Calculate your price",
  },
  {
    title: "Enterprise solutions",
    subtitle: "Perpetual license",
    features: [
      "IFS Cloud and IFS Applications™",
      "IFS FSM, IFS Assyst and Maintenix",
      "SAP S/4HANA and SAP ECC",
    ],
    cta: "Request a custom quote",
    highlight: true,
  },
  {
    title: "Custom-built solutions",
    subtitle: "Subscription license",
    features: [
      "Special guided user experience",
      "Directly inside your application",
      "Matching your design 1-to-1",
    ],
    cta: "Book a meeting and let's talk",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-[#1E5F54] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:items-start">
          {PRICING_CARDS.map((card) => (
            <div
              key={card.title}
              className={`
                bg-white rounded-2xl p-8 flex flex-col
                transition-all duration-300 h-full
                ${
                  card.highlight
                    ? "scale-105 shadow-2xl border-2 border-[#1E5F54] relative z-10"
                    : "shadow-lg"
                }
              `}
            >
              {/* Badge */}
              {card.highlight && (
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2
                             bg-[#1E5F54] text-white text-xs font-semibold
                             px-4 py-1 rounded-full"
                >
                  Most Popular
                </span>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {card.subtitle}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {card.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    {/* <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" /> */}
                    {/* <img src="" alt="" /> */}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`
                  mt-8 py-3 text-sm font-medium rounded-lg transition-colors
                  ${
                    card.highlight
                      ? "bg-[#1E5F54] text-white hover:bg-[#184E45]"
                      : "border border-gray-900 hover:bg-gray-900 hover:text-white"
                  }
                `}
              >
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
