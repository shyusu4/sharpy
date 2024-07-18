import { Button } from '@/components/index';
import { pinkCheckmark } from '@/assets/index';

interface CardProps {
  title: string;
  description: string;
  price: string;
  billingCycle: string;
  features: string[];
}

export const PricingCard: React.FC<CardProps> = ({
  title,
  description,
  price,
  billingCycle,
  features,
}) => {
  return (
    <div className="card max-w-sm flex flex-col rounded-3xl border border-black/10 hover:border-2 hover:border-primary hover:shadow-solid transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
      <div className="card-body">
        <div className="flex flex-col gap-28">
          <div>
            <h3 className="card-title text-3xl pb-2">{title}</h3>
            <p className="text-base w-10/12">{description}</p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-5xl font-bold tracking-tight">{price}</span>
            <span>{billingCycle}</span>
          </div>
        </div>
        <div className="pt-8 pb-5">
          <Button intent="primary">Get This Plan</Button>
        </div>
        <div className="flex flex-col border-t border-gray/20">
          <p className="font-semibold text-lg py-7">Fee includes:</p>
          <ul className="flex flex-col gap-5">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-2 items-center text-gray">
                <img src={pinkCheckmark.src} alt="checkmark" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
