"use client";
import { staggerContainer } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className=""
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}
