"use client";
import Header from "@/components/header/header";
import ProjectTab from "@/components/project-tabs/project-tab";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
const HomePage = () => {
  return (
    <div className="relative mx-auto mt-16 max-w-4xl px-4">
      <div className="my-12" />
      <Header />
      <main className="flex-1">
        <div className="my-12" />
        <div className="text-sm leading-7 md:text-xl md:leading-10">
          I&apos;m <span className="font-bold">Apurva</span>, building things
          for the web. I enjoy working on UI/UX design, open-source projects,
          playing video games. Currently, I&apos;m building frugal cove, an
          open-source budgeting platform built with the latest Next.js features.
        </div>
        <div className="my-12" />
        <h1 className="text-xl font-bold">Work Experience</h1>
        <div className="my-[400px]" />

        <h1 className="text-xl font-bold">Projects</h1>

        <div className="my-12" />
        <ProjectTab />

        <div className="my-12" />

        <h1 className="text-xl font-bold">My Writings</h1>

        <div className="my-12" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            {" "}
            <div className="flex w-[600px] flex-col gap-2">
              <h1>How to build a Next.js app with TypeScript</h1>
              <span className="text-xs text-muted-foreground">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim ea commodo consequat.
              </span>
            </div>
            <div className="hidden text-sm text-muted-foreground md:block">
              12th August 2023
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            {" "}
            <div className="flex w-[600px] flex-col gap-2">
              <h1>How to build a Next.js app with TypeScript</h1>
              <span className="text-xs text-muted-foreground">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim ea commodo consequat.
              </span>
            </div>
            <div className="hidden text-sm text-muted-foreground md:block">
              12th August 2023
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
