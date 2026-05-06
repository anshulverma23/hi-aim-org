import React from 'react';
import { motion } from 'framer-motion';

const defaultAnimations = {
  revealHidden: { opacity: 0, y: 50 },
  revealVisible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const leftAnimations = {
  revealHidden: { opacity: 0, x: -50 },
  revealVisible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const rightAnimations = {
  revealHidden: { opacity: 0, x: 50 },
  revealVisible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainerVariants = {
  staggerHidden: { opacity: 0 },
  staggerVisible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const staggerItemVariants = {
  staggerHidden: { opacity: 0, y: 30 },
  staggerVisible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const ScrollReveal = ({ children, direction = "up", className = "", delay = 0 }) => {
  let variants = defaultAnimations;
  if (direction === "left") variants = leftAnimations;
  if (direction === "right") variants = rightAnimations;

  const customVariants = {
    ...variants,
    revealVisible: {
      ...variants.revealVisible,
      transition: { ...variants.revealVisible.transition, delay }
    }
  };

  return (
    <motion.div
      variants={customVariants}
      initial="revealHidden"
      whileInView="revealVisible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "", delay = 0 }) => {
  const customVariants = {
    ...staggerContainerVariants,
    staggerVisible: {
      ...staggerContainerVariants.staggerVisible,
      transition: { 
        ...staggerContainerVariants.staggerVisible.transition, 
        delayChildren: delay || 0.2 
      }
    }
  };

  return (
    <motion.div
      variants={customVariants}
      initial="staggerHidden"
      whileInView="staggerVisible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }) => {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
};
