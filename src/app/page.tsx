import { Hero } from '@/components/index';
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
      <section className="bg-lightPink w-full flex flex-col items-center py-32 gap-32">
        <div className="max-w-7xl flex items-center justify-center flex-col lg:flex-row-reverse gap-20">
          <div className="relative shrink-0">
            <img src={pinkBlob.src} className="absolute bottom-1/4 -left-16" />
            <img
              src={dashboard.src}
              className="relative shadow-solid rounded-xl float-right lg:w-40 xl:w-full"
            />
          </div>
          <div>
            <h2 className="text-5xl font-semibold">
              POS system helps to improve your business easily & quickly without
              any hassle
            </h2>
            <p className="py-6 w-10/12">
              Sharp POS system helps you improve your operations for your
              customers. This includes reducing waiting time, faster scanning of
              items, quicker payments and many options for your business.
            </p>
            <ul className="flex flex-col gap-5 pt-2 text-lg">
              <li className="flex gap-2 font-bold">
                <img src={bulletPoint.src} alt="" />
                Save time and money with your all-in-one POS system
              </li>
              <li className="flex gap-2 font-bold">
                <img src={bulletPoint.src} alt="" />
                Better online purchasing & supplier order management
              </li>
              <li className="flex gap-2 font-bold">
                <img src={bulletPoint.src} alt="" />
                Create reports automatically and multi-store functions
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl flex items-center justify-center flex-col lg:flex-row gap-24">
          <div className="relative shrink-0 px-8">
            <img src={blueBlob.src} className="absolute bottom-14 -left-2" />
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src={moonspaceTimeline.src}
                className="shadow-solid rounded-xl h-64"
              />
              <img
                src={paymentOptions.src}
                className="shadow-solid rounded-xl h-48 flex justify-self-center self-center"
              />
              <span />
              <img
                src={reviewsRating.src}
                className="shadow-solid rounded-xl h-36"
              />
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-semibold">
              Grow your business from one to a hundred stores fast
            </h2>
            <p className="py-6 w-10/12">
              Sharp POS system helps you improve your operations for your
              customers. This includes reducing waiting time, faster scanning of
              items, quicker payments and many options for your business.
            </p>
            <ul className="flex flex-col gap-5 text-lg">
              <li className="flex gap-2 font-bold">
                <img src={bulletPoint.src} alt="" />
                Use the same rewarding system across all chain stores
              </li>
              <li className="flex gap-2 font-bold">
                <img src={bulletPoint.src} alt="" />
                Check the employee performance & reward accordingly
              </li>
              <li className="flex gap-2 font-bold">
                <img src={bulletPoint.src} alt="" />
                See purchase history of customers to know them better
              </li>
            </ul>
          </div>
        </div>
      </section>
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
