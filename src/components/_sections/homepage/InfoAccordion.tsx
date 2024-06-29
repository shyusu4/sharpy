import { yellowBlob, topPerformanceDashboard } from '@/assets/index';
import { Accordion } from '@/components/index';

const InfoAccordion = () => {
  return (
    <section className="hero-content flex flex-col lg:flex-row gap-20">
      <div>
        <div className="flex flex-col gap-5 text-center items-center justify-center md:text-start">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Start Sharp with simple steps and run your business
          </h2>
          <p>
            A software system allows your business to accept payments from
            customers and keep track of sales.
          </p>
        </div>
        <Accordion
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
      <div className="relative flex-shrink-0">
        <img
          src={yellowBlob.src}
          className="absolute bottom-1/4 -left-16 h-auto"
        />
        <img
          src={topPerformanceDashboard.src}
          className="relative shadow-solid rounded-xl grow"
          alt=""
        />
      </div>
    </section>
  );
};

export default InfoAccordion;
