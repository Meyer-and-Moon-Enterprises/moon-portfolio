"use client";
import { motion } from "framer-motion";

export function MotionHoverAnimation({ children }){
  return(
    <motion.div
      whileHover={{
        opacity: 0.5,
        transition: {duration: 0.5}
      }}
      className="blackBackground"
    >
      {children}
    </motion.div>
  )
}