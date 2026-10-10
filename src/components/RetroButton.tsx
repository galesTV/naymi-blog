"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface RetroButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export default function RetroButton({ children, ...props }: RetroButtonProps) {
  return (
    <motion.button
      className="bg-pink-500 text-white font-black tracking-wide py-2 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-400"
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileTap={{
        scale: 0.95,
        rotate: 2,
        boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
        x: 4,
        y: 4,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
