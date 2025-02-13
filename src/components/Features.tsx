import { Store, CreditCard, Award, Truck } from "lucide-react";

const features = [
  {
    name: "Premium Store Visibility",
    description: "Get featured placement and enhanced visibility with our premium membership for stores.",
    icon: Store,
  },
  {
    name: "Smart Credit Line",
    description: "Flexible credit line for salaried customers, shop worry-free until your next paycheck.",
    icon: CreditCard,
  },
  {
    name: "ONDC Integration",
    description: "Part of India's Open Network for Digital Commerce initiative for wider reach.",
    icon: Award,
  },
  {
    name: "Quick Delivery",
    description: "Fast delivery from your nearest local store, supporting your community.",
    icon: Truck,
  },
];

export const Features = () => {
  return (
    <div className="bg-[#e6ecf0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering local stores with digital tools while providing customers with convenient shopping options.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start">
                <div className="rounded-lg bg-[#000957] p-2 ring-1 ring-primary/10">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-secondary">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};