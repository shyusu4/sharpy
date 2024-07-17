'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
} from '@/assets/index';
import { ServicesCard } from '@/components/index';

const Services = () => {
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
    <section className="px-7 flex flex-col items-center justify-center gap-10 md:gap-20">
      <h2 className="text-4xl md:text-5xl font-semibold text-center lg:w-2/3 xl:w-1/2">
        On this platform, we offer various benefits for your use
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.2)}
        >
          <ServicesCard
            icon={<img src={square1.src} alt="" />}
            title="Sales Data"
            content="Customer executes for the payment for goods or services and where sales taxes become payable."
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.3)}
        >
          <ServicesCard
            icon={<img src={square2.src} alt="" />}
            title="Inventory management"
            content="Inventory management is a systematic approach to sourcing, storing, and the selling inventory management."
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.4)}
        >
          <ServicesCard
            icon={<img src={square3.src} alt="" />}
            title="Sales analytics"
            content="Sales analytics refers to the processes used to gather sales data and gauge sales performance analysis."
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.5)}
        >
          <ServicesCard
            icon={<img src={square4.src} alt="" />}
            title="Employee management"
            content="Customer management is the process of managing customer interactions throughout the customer lifecycle."
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.6)}
        >
          <ServicesCard
            icon={<img src={square5.src} alt="" />}
            title="Customer loyalty"
            content="Employee management is the process of managing employee performance through relationships."
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.7)}
        >
          <ServicesCard
            icon={<img src={square6.src} alt="" />}
            title="Integrated payments"
            content="Supplier management is the process of managing supplier deliverables and relationships."
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
