import { Hero, InfoBulletPoints } from '@/components/index';
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
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  yellowBlob,
  pinkBlob,
  blueBlob,
} from '@/assets/index';
import { CTAcard, ServicesCard, FAQ } from '@/components/index';

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
      <InfoBulletPoints />
      {/* <section>
        <h2 className="text-4xl font-semibold text-center">
          On this platform, we offer various benefits for your use
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServicesCard
            icon={<img src={square1.src} alt="" />}
            title="Sales Data"
            content="Customer executes for the payment for goods or services and where sales taxes become payable."
          />
          <ServicesCard
            icon={<img src={square2.src} alt="" />}
            title="Inventory management"
            content="Inventory management is a systematic approach to sourcing, storing, and the selling inventory management."
          />
          <ServicesCard
            icon={<img src={square3.src} alt="" />}
            title="Sales analytics"
            content="Sales analytics refers to the processes used to gather sales data and gauge sales performance analysis."
          />
          <ServicesCard
            icon={<img src={square4.src} alt="" />}
            title="Employee management"
            content="Customer management is the process of managing customer interactions throughout the customer lifecycle."
          />
          <ServicesCard
            icon={<img src={square5.src} alt="" />}
            title="Customer loyalty"
            content="Employee management is the process of managing employee performance through relationships."
          />
          <ServicesCard
            icon={<img src={square6.src} alt="" />}
            title="Integrated payments"
            content="Supplier management is the process of managing supplier deliverables and relationships."
          />
        </div>
      </section>
      <section>
        <div className="hero-content flex flex-col lg:flex-row gap-20">
          <div>
            <div className="flex flex-col gap-5 text-center md:text-start">
              <h2 className="text-5xl font-semibold">
                Start Sharp with simple steps and run your business
              </h2>
              <p className="w-10/12">
                A software system allows your business to accept payments from
                customers and keep track of sales.
              </p>
            </div>
            <FAQ
              intent="primary"
              items={[
                {
                  title: 'Install the Sharp software',
                  content:
                    "Install the POS software. Each company's software comes with proper installation. The POS software is installed.",
                },
                {
                  title: 'Connect POS scanners and other devices',
                  content:
                    "Install the POS software. Each company's software comes with proper installation. The POS software is installed.",
                },
                {
                  title: 'Perform a test run by scanning',
                  content:
                    "Install the POS software. Each company's software comes with proper installation. The POS software is installed.",
                },
              ]}
            />
          </div>
          <img src={yellowBlob.src} className="absolute w-96" />
          <img
            src={topPerformanceDashboard.src}
            className="shadow-solid rounded-xl grow"
            alt=""
          />
        </div>
      </section> */}
    </main>
  );
}
