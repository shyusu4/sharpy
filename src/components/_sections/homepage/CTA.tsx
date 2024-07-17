'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { dollarSign, mouseClicker, gears } from '@/assets/index';
import { CTAcard } from '@/components/index';

const CTA = () => {
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
    <section>
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center gap-10 w-full p-4">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.1)}
        >
          <CTAcard
            icon={<img src={dollarSign.src} alt="" />}
            linkText="Learn more"
            content="Seamlessly accept any method of payment your customers want"
            intent="yellow"
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.3)}
        >
          <CTAcard
            icon={<img src={mouseClicker.src} alt="" />}
            linkText="Explore Report"
            content="Access your reports anytime from a smartphone, tab, or any device"
            intent="blue"
          />
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.5)}
        >
          <CTAcard
            icon={<img src={gears.src} alt="" />}
            linkText="Request Free Demo"
            content="Easily manage your inventory and staff to make balanced decisions"
            intent="pink"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
