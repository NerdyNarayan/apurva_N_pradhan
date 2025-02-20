"use client";
import { motion } from "framer-motion";
import Header from "@/components/header/header";
import GlitteryText from "@/components/ui/glittery-text";
import ProjectTab from "@/components/project-tabs/project-tab";
import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TextShimmer } from "@/components/ui/shimmer-text";
import { Timeline } from "@/components/experience/timeline";
import Experience from "@/components/experience/experience";
import { TextLoop } from "@/components/ui/text-loop";

const HomePage = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,

      y: 20,
    },
    animate: {
      opacity: 1,

      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: {
      opacity: 1,

      filter: "blur(0px)",
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="relative mx-auto max-w-4xl px-4 md:px-0"
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      <Box />
      <Header />
      <main className="flex-1">
        <Box />
        <motion.div className="text-primary/80 md:text-lg" variants={fadeInUp}>
          I&apos;m <TextShimmer>Apurva</TextShimmer>, a&nbsp;
          <TextLoop className="font-semibold">
            <span>full-stack developer</span>
            <span>mobile app engineer</span>
            <span>UI/UX enthusiast</span>
          </TextLoop>
          <div className="my-2" />
          <ol className="relative left-[10px] w-full list-inside list-disc leading-8 text-primary/50 md:left-[30px] md:max-w-3xl">
            <li>
              crafting digital experiences through clean interfaces and
              efficient solutions.
            </li>
            <li>
              My current focus revolves around building secure, performant web
              applications that balance modern aesthetics with technical
              excellence.
            </li>
            <li>
              Currently, I&apos;m working on a web app called{" "}
              <TextShimmer>Frugal Cove</TextShimmer>, an open-source budgeting
              platform.
            </li>
          </ol>
        </motion.div>{" "}
        <Box />
        <motion.div variants={fadeInUp}>
          <TextShimmer className="text-center text-xl font-bold">
            Work Experience
          </TextShimmer>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Experience />
        </motion.div>
        <Box className="my-2 md:my-4" />
        <motion.div variants={fadeInUp}>
          <TextShimmer className="text-xl font-bold">Projects</TextShimmer>
        </motion.div>
        <div className="my-12" />
        <motion.div variants={fadeInUp}>
          <ProjectTab />
        </motion.div>
        <div className="my-12" />
        <motion.div variants={fadeInUp}>
          <TextShimmer className="text-xl font-bold">My Writings</TextShimmer>
        </motion.div>
        <div className="my-12" />
        <motion.div variants={staggerContainer}>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex w-full items-center border-b pb-2 hover:text-primary/80"
              >
                <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between">
                  <h1>How to build a Next.js app with TypeScript</h1>
                  <span className="text-xs text-muted-foreground">
                    12th August 2023
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Box />
    </motion.div>
  );
};

export default HomePage;
