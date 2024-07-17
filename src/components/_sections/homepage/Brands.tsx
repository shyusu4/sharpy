'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { waverio, squarestone, martino, virogan, vertex } from '@/assets/index';

const Brands = () => {
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
      x: 0,
      transition: {
        delay,
      },
    },
    hidden: { opacity: 0, x: -75 },
  });

  return (
    <section
      id="brands"
      className="flex flex-col gap-5 text-center w-full md:w-10/12"
    >
      <h2 className="text-lg">Trusted by these brands and more</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-around items-center gap-8">
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.2)}
          src={waverio.src}
          alt="Waverio logo"
          className="w-40 xl:w-44"
        />
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.3)}
          src={squarestone.src}
          alt="Squarestone logo"
          className="w-40 xl:w-44"
        />
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.4)}
          src={martino.src}
          alt="Martino logo"
          className="w-40 xl:w-44"
        />
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.5)}
          src={virogan.src}
          alt="Virogan logo"
          className="w-40 xl:w-44"
        />
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={createVariants(0.6)}
          src={vertex.src}
          alt="Vertex logo"
          className="w-40 xl:w-44"
        />
      </div>
    </section>
  );
};

export default Brands;
