"use client";
import ProjectTab from "@/components/project-tabs/project-tab";
import Box from "@/components/ui/box";
import { TextShimmer } from "@/components/ui/shimmer-text";
import Experience from "@/components/experience/experience";
import { TextLoop } from "@/components/ui/text-loop";
import WritingList from "@/features/writings/components/writing-list";
const HomePage = () => {
  return (
    <div className="mx-auto h-full max-w-4xl">
      <Box />
      Hey, I&apos;m{" "}
      <TextShimmer className="font-bold text-primary">Apurva</TextShimmer>,
      a&nbsp;
      <TextLoop className="font-bold">
        <span>full-stack developer</span>
        <span>mobile app engineer</span>
        <span>UI/UX enthusiast</span>
      </TextLoop>
      <div className="my-2" />
      <ol className="relative left-[10px] w-full list-inside list-[circle] leading-8 text-primary/70 md:left-[15px] md:max-w-2xl">
        <li className="marker:text-primary">
          I love building minimal, modern, and beautiful websites and mobile
          apps.
        </li>
        <li className="marker:text-primary">
          I am passionate about building things that solve my problems, some of
          my solutions are &nbsp;
          <TextShimmer className="text-primary/90">Slowmodoro</TextShimmer> and
          &nbsp;
          <TextShimmer className="text-primary/90">Frugal Cove</TextShimmer>
        </li>
        <li className="marker:text-primary">
          Currently, I&apos;m working on a web app called{" "}
          <TextShimmer className="text-primary/90">Frugal Cove</TextShimmer>, an
          open-source budgeting platform.
        </li>
      </ol>
      <Box />
      <Experience />
      <Box />
      <ProjectTab />
      <Box />
      <WritingList />
    </div>
  );
};

export default HomePage;
