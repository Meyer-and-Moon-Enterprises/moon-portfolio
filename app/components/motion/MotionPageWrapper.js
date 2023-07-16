"use client";
import { motion } from "framer-motion";

export function MotionPageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='blackBackground'
    >
      {children}
    </motion.div>
  );
}
