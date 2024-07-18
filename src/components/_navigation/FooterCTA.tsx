'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { leftLine, rightLine } from '@/assets/index';
import { Button } from '@/components/_ui/Button';

const FooterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

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

  return (
    <div className="flex w-full justify-between relative max-h-96">
      <div className="relative">
        <img src={leftLine.src} alt="" className="h-fit"></img>
        <div className="absolute inset-0 -z-10 top-0 right-0 bg-[radial-gradient(50%_50%_at_50%_50%,_rgb(69,201,193)_39.0625%,_rgba(69,201,193,0)_100%)] filter blur-[123.134px] rounded-full opacity-100"></div>
      </div>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="w-full md:max-w-2xl absolute z-10 p-5 md:p-0">
            <motion.h1
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={createVariants(0.1)}
              className="font-semibold tracking-tight text-primary text-3xl md:text-5xl"
            >
              Experience the modern software service
            </motion.h1>
            <motion.p
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={createVariants(0.2)}
              className="text-md md:text-xl py-6 md:px-8 text-gray"
            >
              Sharpy provides the best POS services and there are many benefits
              if you join us. Download now and increase your business.
            </motion.p>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={createVariants(0.3)}
            >
              <Button intent={'primary'}>Request Free Demo</Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative -z-10">
        <img src={rightLine.src} alt="" className="h-fit"></img>
        <div className="absolute -inset-20 -z-10 top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_#EA7DD2_39.0625%,_rgba(234,125,210,0)_100%)] blur-[130.746px] rounded-full opacity-100"></div>
      </div>
    </div>
  );
};

export default FooterCTA;
