import { leftLine, rightLine } from '@/assets/index';
import { Button } from '@/components/_ui/Button';

const FooterCTA = () => {
  return (
    <div className="flex w-full justify-between relative max-h-96">
      <div className="relative">
        <img src={leftLine.src} alt="" className="h-fit"></img>
        <div className="absolute inset-0 -z-10 top-0 right-0 bg-[radial-gradient(50%_50%_at_50%_50%,_rgb(69,201,193)_39.0625%,_rgba(69,201,193,0)_100%)] filter blur-[123.134px] rounded-full opacity-100"></div>
      </div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="font-semibold tracking-tight text-primary text-3xl md:text-5xl">
              Experience the modern software service
            </h1>
            <p className="text-md md:text-xl py-6 md:px-8 text-gray">
              Sharpy provides the best POS services and there are many benefits
              if you join us. Download now and increase your business.
            </p>
            <Button intent={'primary'}>Request Free Demo</Button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={rightLine.src} alt="" className="h-fit"></img>
        <div className="absolute -inset-20 -z-10 top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_#EA7DD2_39.0625%,_rgba(234,125,210,0)_100%)] blur-[130.746px] rounded-full opacity-100"></div>
      </div>
    </div>
  );
};

export default FooterCTA;
