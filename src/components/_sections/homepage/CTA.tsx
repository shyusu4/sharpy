import { dollarSign, mouseClicker, gears } from '@/assets/index';
import { CTAcard } from '@/components/index';

const CTA = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center gap-10 w-full p-4">
        <CTAcard
          icon={<img src={dollarSign.src} alt="" />}
          linkText="Learn more"
          content="Seamlessly accept any method of payment your customers want"
          intent="yellow"
        />
        <CTAcard
          icon={<img src={mouseClicker.src} alt="" />}
          linkText="Explore Report"
          content="Access your reports anytime from a smartphone, tab, or any device"
          intent="blue"
        />
        <CTAcard
          icon={<img src={gears.src} alt="" />}
          linkText="Request Free Demo"
          content="Easily manage your inventory and staff to make balanced decisions"
          intent="pink"
        />
      </div>
    </section>
  );
};

export default CTA;
