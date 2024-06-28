import {
  dashboard,
  moonspaceTimeline,
  paymentOptions,
  reviewsRating,
  bulletPoint,
  pinkBlob,
  blueBlob,
} from '@/assets/index';

const InfoBulletPoints = () => {
  return (
    <section className="bg-lightPink w-full flex flex-col items-center py-10 px-7 lg:py-32 md:px-14 xl:px-0 md:gap-32 gap-24">
      <div className="xl:max-w-7xl flex items-center justify-center flex-col xl:flex-row gap-20">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-center md:text-start">
            <h2 className="text-3xl md:text-5xl font-semibold">
              POS system helps to improve your business easily & quickly without
              any hassle
            </h2>
            <p className="py-6 md:w-10/12">
              Sharp POS system helps you improve your operations for your
              customers. This includes reducing waiting time, faster scanning of
              items, quicker payments and many options for your business.
            </p>
          </div>
          <ul className="flex flex-col gap-5 pt-2 text-lg">
            <li className="flex gap-2 font-bold">
              <img src={bulletPoint.src} alt="" className="h-full" />
              Save time and money with your all-in-one POS system
            </li>
            <li className="flex gap-2 font-bold">
              <img src={bulletPoint.src} alt="" className="h-full" />
              Better online purchasing & supplier order management
            </li>
            <li className="flex gap-2 font-bold">
              <img src={bulletPoint.src} alt="" className="h-full" />
              Create reports automatically and multi-store functions
            </li>
          </ul>
        </div>
        <div className="relative flex-shrink-0">
          <img
            src={pinkBlob.src}
            className="absolute bottom-1/4 -left-16 h-auto hidden md:block"
          />
          <img
            src={dashboard.src}
            className="relative shadow-solid rounded-xl float-right w-full"
          />
        </div>
      </div>
      <div className="max-w-7xl flex items-center justify-center flex-col-reverse xl:flex-row gap-24">
        <div className="relative shrink-0 px-8">
          <img
            src={blueBlob.src}
            className="absolute bottom-4 md:bottom-14 -left-2"
          />
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={moonspaceTimeline.src}
              className="shadow-solid rounded-xl md:h-64"
            />
            <img
              src={paymentOptions.src}
              className="shadow-solid rounded-xl md:h-48 flex justify-self-center self-center"
            />
            <span />
            <img
              src={reviewsRating.src}
              className="shadow-solid rounded-xl md:h-36"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-center md:text-start">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Grow your business from one to a hundred stores fast
            </h2>
            <p className="py-6 md:w-10/12">
              Sharp POS system helps you improve your operations for your
              customers. This includes reducing waiting time, faster scanning of
              items, quicker payments and many options for your business.
            </p>
          </div>
          <ul className="flex flex-col gap-5 text-lg">
            <li className="flex gap-2 font-bold">
              <img src={bulletPoint.src} alt="" className="h-full" />
              Use the same rewarding system across all chain stores
            </li>
            <li className="flex gap-2 font-bold">
              <img src={bulletPoint.src} alt="" className="h-full" />
              Check the employee performance & reward accordingly
            </li>
            <li className="flex gap-2 font-bold">
              <img src={bulletPoint.src} alt="" className="h-full" />
              See purchase history of customers to know them better
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoBulletPoints;
