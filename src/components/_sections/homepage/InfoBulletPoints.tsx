'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
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
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      controls1.start('visible');
    }
  }, [isInView1]);

  useEffect(() => {
    if (isInView2) {
      controls2.start('visible');
    }
  }, [isInView2]);

  const easeInVariants = (delay: number) => ({
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
      },
    },
    hidden: { opacity: 0, y: 20 },
  });

  const scaleVariants = (delay: number) => ({
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
      },
    },
    hidden: { opacity: 0, scale: 0.8 },
  });

  return (
    <section className="bg-lightPink w-full flex flex-col items-center py-10 px-7 lg:py-32 md:px-14 xl:px-0 md:gap-32 gap-24">
      <div className="xl:max-w-7xl flex items-center justify-center flex-col xl:flex-row gap-20">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-center md:text-start">
            <motion.h2
              ref={ref1}
              animate={controls1}
              initial="hidden"
              variants={easeInVariants(0.2)}
              className="text-3xl md:text-5xl font-semibold"
            >
              POS system helps to improve your business easily & quickly without
              any hassle
            </motion.h2>
            <motion.p
              ref={ref1}
              animate={controls1}
              initial="hidden"
              variants={easeInVariants(0.3)}
              className="py-6 md:w-10/12"
            >
              Sharp POS system helps you improve your operations for your
              customers. This includes reducing waiting time, faster scanning of
              items, quicker payments and many options for your business.
            </motion.p>
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
          <motion.img
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={scaleVariants(0.4)}
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
            <motion.img
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={scaleVariants(0.4)}
              src={moonspaceTimeline.src}
              className="shadow-solid rounded-xl md:h-64"
            />
            <motion.img
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={scaleVariants(0.5)}
              src={paymentOptions.src}
              className="shadow-solid rounded-xl md:h-48 flex justify-self-center self-center"
            />
            <span />
            <motion.img
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={scaleVariants(0.6)}
              src={reviewsRating.src}
              className="shadow-solid rounded-xl md:h-36"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="text-center md:text-start">
            <motion.h2
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={easeInVariants(0.5)}
              className="text-3xl md:text-5xl font-semibold"
            >
              Grow your business from one to a hundred stores fast
            </motion.h2>
            <motion.p
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={easeInVariants(0.6)}
              className="py-6 md:w-10/12"
            >
              Sharp POS system helps you improve your operations for your
              customers. This includes reducing waiting time, faster scanning of
              items, quicker payments and many options for your business.
            </motion.p>
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
