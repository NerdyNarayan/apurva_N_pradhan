"use client";
import ProjectTab from "@/components/project-tabs/project-tab";
import Box from "@/components/ui/box";
import { TextShimmer } from "@/components/ui/shimmer-text";
import Experience from "@/components/experience/experience";
import { TextLoop } from "@/components/ui/text-loop";
import WritingList from "@/features/writings/components/writing-list";

const HomePage = () => {
  return (
    <div className="h-full">
      <Box />
      I&apos;m <TextShimmer>Apurva</TextShimmer>, a&nbsp;
      <TextLoop className="font-semibold">
        <span>full-stack developer</span>
        <span>mobile app engineer</span>
        <span>UI/UX enthusiast</span>
      </TextLoop>
      <div className="my-2" />
      <ol className="relative left-[10px] w-full list-inside list-[circle] leading-8 text-primary/50 md:left-[30px] md:max-w-3xl">
        <li>
          crafting digital experiences through clean interfaces and efficient
          solutions.
        </li>
        <li>
          My current focus revolves around building secure, performant web
          applications that balance modern aesthetics with technical excellence.
        </li>
        <li>
          Currently, I&apos;m working on a web app called{" "}
          <TextShimmer>Frugal Cove</TextShimmer>, an open-source budgeting
          platform.
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
