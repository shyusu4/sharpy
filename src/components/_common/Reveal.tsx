'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  duration = 0.3,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: { opacity: 0, y: 20 },
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
