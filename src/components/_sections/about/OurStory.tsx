'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  coffeChat,
  manWorking,
  womanWorking,
  livingSpace,
  meeting,
  leftThickLine,
  rightThickLine,
} from '@/assets/index';

const OurStory = () => {
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

  const createVariants = (delay: number) => ({
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
      },
    },
    hidden: { opacity: 0, y: 20 },
  });

  const createVariants2 = (delay: number) => ({
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
      },
    },
    hidden: { opacity: 0, x: 20 },
  });

  return (
    <section className="w-full bg-lightPink relative -z-10">
      <div className="relative w-full">
        <img
          src={leftThickLine.src}
          alt=""
          className="h-fit absolute -left-8 -top-10"
        ></img>
        <img
          src={rightThickLine.src}
          alt=""
          className="h-fit absolute -right-8"
        ></img>
      </div>
      <div className="flex items-center justify-center xl:max-w-7xl flex-col lg:flex-row mx-auto gap-4 pt-16 relative z-10 px-10 xl:px-0">
        <div className="flex-1 flex flex-col xl:gap-44 gap-20">
          <div className="flex flex-col items-start gap-7 justify-start">
            <motion.h1
              ref={ref1}
              animate={controls1}
              initial="hidden"
              variants={createVariants(0.1)}
              className="font-semibold tracking-tight text-3xl md:text-5xl lg:text-6xl xl:text-[4.8rem]"
            >
              Our Story
            </motion.h1>
            <motion.p
              ref={ref1}
              animate={controls1}
              initial="hidden"
              variants={createVariants(0.2)}
              className="text-md md:text-xl font-semibold md:leading-8"
            >
              We partner closely with the most progressive companies in the
              world to improve their customer support operations. As consumers,
              we all have our own version of that one call to customer support.
            </motion.p>
            <motion.p
              ref={ref1}
              animate={controls1}
              initial="hidden"
              variants={createVariants(0.3)}
              className="text-md md:text-xl text-gray md:leading-8"
            >
              On the other end of the line are well-meaning, talented people
              doing their best with what they have: a tangled web of tribal
              knowledge, spreadsheets, and outdated systems. Our technology
              provides teams a way to balance efficiency and performance with a
              caring and empowering environment.
            </motion.p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex justify-center">
              <motion.img
                ref={ref2}
                animate={controls2}
                initial="hidden"
                variants={createVariants2(0.2)}
                src={manWorking.src}
                alt=""
                className="mx-auto object-contain"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <motion.img
                ref={ref2}
                animate={controls2}
                initial="hidden"
                variants={createVariants2(0.1)}
                src={livingSpace.src}
                alt=""
                className="object-contain"
              />
              <motion.img
                ref={ref2}
                animate={controls2}
                initial="hidden"
                variants={createVariants2(0.3)}
                src={livingSpace.src}
                alt=""
                className="object-cover h-96 rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-20">
          <div className="flex flex-col md:flex-row items-center justify-center h-full gap-4">
            <div className="flex justify-center">
              <motion.img
                ref={ref1}
                animate={controls1}
                initial="hidden"
                variants={createVariants(0.5)}
                src={womanWorking.src}
                alt="Woman sitting at desk working"
                className="mx-auto object-contain"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <motion.img
                ref={ref1}
                animate={controls1}
                initial="hidden"
                variants={createVariants(0.4)}
                src={meeting.src}
                alt="Meeting room"
                className="object-contain"
              />
              <motion.img
                ref={ref1}
                animate={controls1}
                initial="hidden"
                variants={createVariants(0.6)}
                src={coffeChat.src}
                alt="Coffee chat"
                className="object-contain"
              />
            </div>
          </div>
          <div className="lg:max-w-lg mx-auto flex flex-col gap-5">
            <motion.h2
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={createVariants(0.4)}
              className="font-semibold tracking-tight text-2xl"
            >
              Growing since 2020
            </motion.h2>
            <motion.p
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={createVariants(0.5)}
              className="text-md md:text-xl text-gray md:leading-8"
            >
              On the other end of the line are well-meaning, talented people
              doing their best with what they have: a tangled web of tribal
              knowledge, spreadsheets, and outdated systems.
            </motion.p>
            <motion.p
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={createVariants(0.6)}
              className="text-md md:text-xl text-gray md:leading-8"
            >
              Our technology provides teams a way to balance efficiency and
              performance with a caring and empowering environment.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-white"></div>
    </section>
  );
};

export default OurStory;
