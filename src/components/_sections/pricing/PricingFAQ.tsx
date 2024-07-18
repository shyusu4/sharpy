'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Accordion, Button } from '@/components/index';

const PricingFAQ = () => {
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
    <section className="w-10/12 bg-lightPink rounded-2xl">
      <div className="hero-content flex-col py-16">
        <div className="text-center pb-14">
          <h2 className="font-semibold tracking-tight text-3xl md:text-5xl lg:text-6xl">
            FAQ
          </h2>
          <p className="text-center text-darkBlue">
            Here are some common questions about our pricing plans.
          </p>
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.3)}
        >
          <Accordion
            intent="secondary"
            items={[
              {
                title: 'Do you offer discounts for NGOs?',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam euismod, nunc nec vehicula.',
              },
              {
                title: 'Can I switch plans?',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam euismod, nunc nec vehicula.',
              },
              {
                title: 'Can I cancel my subscription?',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam euismod, nunc nec vehicula.',
              },
            ]}
          />
        </motion.div>
        <p>Still have more questions?</p>
        <Button intent="primary">Contact Us</Button>
      </div>
    </section>
  );
};

export default PricingFAQ;
