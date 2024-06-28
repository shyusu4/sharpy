import { Button, Link } from '@/components/index';
import { mainDashboard } from '@/assets/index';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero">
        <div className="hero-content text-center flex flex-col gap-14">
          <div className="max-w-3xl lg:py-7">
            <h1 className="font-semibold tracking-tight text-primary text-3xl md:text-5xl lg:text-6xl xl:text-[4.8rem]">
              Turn visitors into
              <br /> paid customers fast.
            </h1>
            <p className="text-md md:text-xl py-6 md:px-8 text-gray">
              Turn your smartphone or tablet into a powerful software. Manage
              sales, inventory with ease; engage customers & increase your
              revenue.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Button>Request Free Demo</Button>
              <Link href="/#features">Learn More</Link>
            </div>
          </div>
          <div>
            <img src={mainDashboard.src} className="rounded-t-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
