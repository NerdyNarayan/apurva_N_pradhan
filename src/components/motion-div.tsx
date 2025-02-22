"use client";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
export default function WritingPage({ children }: { children: ReactNode }) {
  return <motion.div>{children}</motion.div>;
}
