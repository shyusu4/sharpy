'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ContactForm } from '@/components/index';
import { envelope } from '@/assets/index';

const ContactInfo = () => {
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
        <h1 className="font-semibold tracking-tight text-3xl md:text-5xl lg:text-6xl">
          Get In Touch
        </h1>
        <p className="py-6 md:w-9/12 text-lg">
          Established fact that a reader will be distracted by the way readable
          content of a page when looking at its layout.
        </p>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={createVariants(0.1)}
        className="flex flex-col lg:flex-row w-full xl:max-w-7xl xl:gap-40 gap-20 items-center lg:items-start"
      >
        <ContactForm />
        <ul className="flex flex-col gap-5">
          <li className="flex gap-5">
            <div className="bg-deepPink rounded-full flex items-center justify-center h-16 w-16">
              <img src={envelope.src} alt="envelope" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Send us an email</p>
              <p className="text-gray">example@gmail.com</p>
            </div>
          </li>
          <li className="flex gap-5">
            <div className="bg-deepPink rounded-full flex items-center justify-center h-16 w-16">
              <img src={envelope.src} alt="envelope" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Call us now</p>
              <p className="text-gray">+9876-543-210</p>
            </div>
          </li>
          <li className="flex gap-5">
            <div className="bg-deepPink rounded-full flex items-center justify-center h-16 w-16">
              <img src={envelope.src} alt="envelope" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Office location</p>
              <p className="text-gray">2464 Royal Ln. Mesa, UK </p>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
