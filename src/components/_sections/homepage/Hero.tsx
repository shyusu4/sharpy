'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Button, Link } from '@/components/index';
import { mainDashboard, threeLines } from '@/assets/index';

const Hero = () => {
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
    <section id="hero">
      <div className="hero">
        <div className="hero-content text-center flex flex-col gap-14">
          <div className="max-w-3xl lg:py-7">
            <motion.h1
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={createVariants(0.1)}
              className="font-semibold tracking-tight text-3xl md:text-5xl lg:text-6xl xl:text-[4.8rem]"
            >
              Turn visitors into
              <br /> paid customers fast.
            </motion.h1>
            <motion.p
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={createVariants(0.2)}
              className="text-md md:text-xl py-6 md:px-8 text-gray"
            >
              Turn your smartphone or tablet into a powerful software. Manage
              sales, inventory with ease; engage customers & increase your
              revenue.
            </motion.p>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={createVariants(0.3)}
              className="flex items-center justify-center gap-x-6"
            >
              <Button>Request Free Demo</Button>
              <Link href="/#features">Learn More</Link>
            </motion.div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 -top-24 -left-16 w-[30%] aspect-square bg-[radial-gradient(50%_50%_at_50%_50%,_rgb(69,201,193)_39.0625%,_rgba(69,201,193,0)_100%)] filter blur-[123.134px] rounded-full opacity-100"></div>
            <motion.img
              src={mainDashboard.src}
              className="relative rounded-t-3xl w-[90%] mx-auto"
              animate={controls}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  transform:
                    'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(9.60355deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)',
                  transition: {
                    duration: 1,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
                hidden: {
                  opacity: 0,
                  transform:
                    'perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)',
                },
              }}
            />
            <img
              src={threeLines.src}
              className="hidden md:inline-block absolute md:-top-14 lg:-top-20 lg:-right-8 md:-right-3 lg:h-auto h-1/4"
            />
            {/* <div className="absolute -inset-20 -z-10 w-[30%] aspect-square bg-[radial-gradient(50%_50%_at_50%_50%,_#EA7DD2_39.0625%,_rgba(234,125,210,0)_100%)] filter blur-[130.746px] rounded-full opacity-100"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
