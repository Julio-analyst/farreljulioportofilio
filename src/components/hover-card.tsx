"use client";
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HoverCard({ children, className = "" }: HoverCardProps) {
  const reduceMotion = useReducedMotion();

  const variants = {
    rest: { y: 0, scale: 1, boxShadow: "0 0px 0px rgba(0,0,0,0)" },
    hover: { y: -6, scale: 1.02, boxShadow: "0 20px 40px rgba(2,6,23,0.08)" },
  };

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover={reduceMotion ? "rest" : "hover"}
      whileFocus={reduceMotion ? "rest" : "hover"}
      whileTap="rest"
      variants={variants}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      tabIndex={0}
      className={className}
    >
      {children}
    </motion.div>
  );
}
