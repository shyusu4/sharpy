import { Button, Link } from '@/components/index';
import { mainDashboard, threeLines } from '@/assets/index';

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
          <div className="relative">
            <div className="absolute inset-0 -z-10 -top-24 -left-16 w-[30%] aspect-square bg-[radial-gradient(50%_50%_at_50%_50%,_rgb(69,201,193)_39.0625%,_rgba(69,201,193,0)_100%)] filter blur-[123.134px] rounded-full opacity-100"></div>
            <img src={mainDashboard.src} className="relative rounded-t-3xl" />
            <img src={threeLines.src} className="absolute -top-24 -right-20" />
            {/* <div className="absolute -inset-20 -z-10 w-[30%] aspect-square bg-[radial-gradient(50%_50%_at_50%_50%,_#EA7DD2_39.0625%,_rgba(234,125,210,0)_100%)] filter blur-[130.746px] rounded-full opacity-100"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
