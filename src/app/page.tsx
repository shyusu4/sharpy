import {
  Hero,
  InfoBulletPoints,
  Services,
  InfoAccordion,
} from '@/components/index';
import {
  martino,
  squarestone,
  vertex,
  virogan,
  waverio,
  dollarSign,
  mouseClicker,
  gears,
  dashboard,
  topPerformanceDashboard,
  moonspaceTimeline,
  paymentOptions,
  reviewsRating,
  bulletPoint,
  yellowBlob,
  pinkBlob,
  blueBlob,
} from '@/assets/index';
import { CTAcard } from '@/components/index';

export default function Home() {
  return (
    <main className="max-w-auto flex flex-col justify-center items-center gap-16">
      {/* <Hero />
      <section
        id="brands"
        className="flex flex-col gap-5 text-center w-full md:w-10/12"
      >
        <h2 className="text-lg">Trusted by these brands and more</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-around items-center gap-8">
          <img src={waverio.src} alt="Waverio logo" className="w-40 xl:w-44" />
          <img
            src={squarestone.src}
            alt="Squarestone logo"
            className="w-40 xl:w-44"
          />
          <img src={martino.src} alt="Martino logo" className="w-40 xl:w-44" />
          <img src={virogan.src} alt="Virogan logo" className="w-40 xl:w-44" />
          <img src={vertex.src} alt="Vertex logo" className="w-40 xl:w-44" />
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center gap-10 w-full">
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
      </section> */}
      {/* <InfoBulletPoints /> */}
      {/* <Services /> */}
      <InfoAccordion />
    </main>
  );
}
