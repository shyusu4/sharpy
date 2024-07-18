'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { PricingCard } from '@/components/index';

// TODO: Fix PricingCards grid responsiveness

const PricingTable = () => {
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
    <section className="hero flex flex-col gap-16 md:gap-20 lg:p-10 xl:p-20 p-5">
      <div className="flex flex-col text-center items-center justify-center">
        <motion.h1
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.1)}
          className="font-semibold tracking-tight text-3xl md:text-5xl lg:text-6xl"
        >
          Choose your plan
        </motion.h1>
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.2)}
          className="py-6 md:w-9/12 text-lg"
        >
          Established fact that a reader will be distracted by the way readable
          content of a page when looking at its layout.
        </motion.p>
      </div>
      <div className="w-full xl:max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly">
        <PricingCard
          title="Free"
          description="Get started with the basic features, but grow as fast as others."
          price="$0"
          billingCycle="No credit card required"
          features={['50 Job Monitor', '1 Year Support', 'Basic Support']}
        />
        <PricingCard
          title="Profressional"
          description="Get started with the basic features, but grow as fast as others."
          price="$99"
          billingCycle="/month, billing monthly"
          features={[
            '150 Job Monitor',
            '10 Active Projects',
            'Up to 10 Team Members',
            '90 Days Message History',
            'Project Management',
            'Premium Support',
            'Access to Team',
          ]}
        />
        <PricingCard
          title="Enterprise"
          description="Get started with the basic features, but grow as fast as others."
          price="Let's chat"
          billingCycle="custom pricing"
          features={[
            'Unlimited Job Monitor',
            'Unlimited Active Projects',
            'Up to 100 Team Members',
            '90 Days Message History',
            'Project Management',
            'Premium Support',
            'Access to Team',
          ]}
        />
      </div>
    </section>
  );
};

export default PricingTable;
