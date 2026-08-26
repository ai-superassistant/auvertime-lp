import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the animation starts (for staggering siblings). */
  delay?: number;
  /** Animate on mount instead of waiting for scroll into view — use for above-the-fold content. */
  immediate?: boolean;
};

export default function Reveal({ children, className, delay = 0, immediate = false }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition = { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const };

  return immediate ? (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -10% 0px' }}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
