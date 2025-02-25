import { TextShimmer } from "@/components/ui/shimmer-text";
import { siteConfig, socialItems } from "@/config/site";
import Image from "next/image";
import React from "react";
// eslint-disable-next-line boundaries/element-types
import SocialItem from "./_components/social-link";

const SelfPage = () => {
  return (
    <>
      <div className="flex w-full flex-row justify-between gap-24">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/static/nerdy-mascot.jpg"
            alt="Picture of the author"
            className="rounded-full"
            width={200}
            height={200}
          />
          <div className="flex flex-col">
            <TextShimmer className="w-full text-nowrap text-start text-sm font-bold">
              {siteConfig.name}
            </TextShimmer>
            <div className="flex flex-col text-center">
              <span className="flex-col gap-2 text-center text-sm text-muted-foreground">
                FullStack Developer
              </span>

              <span className="flex-col gap-2 text-center text-sm text-muted-foreground">
                Freelancer
              </span>

              <div className="mt-4 flex flex-row justify-center space-x-4">
                {socialItems.items.map(({ title, href, icon }) => (
                  <SocialItem
                    key={title}
                    title={title}
                    href={href}
                    icon={icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <TextShimmer className="max-w-lg border-b-[1px] border-primary/[0.15] pb-2 text-2xl font-bold">
            Full Stack Developer And App Developer, Based In India
          </TextShimmer>
          <span className="w-full max-w-xl text-primary/80">
            I started my career as a web developer about 2 years ago. I&apos;ve
            tried some programming languages and tech stack, both Back-End, and
            Front-End. Even though the scope of web development is broad, I was
            very interested and focused on Front-End Development and UI/UX
            Design.
          </span>
          <div className="font-bold">
            <h1 className="text-2xl">Todos</h1>
            <h1>What I&apos;m Currently Hacking on?</h1>
            <h1>About this site</h1>
            <h1>Usage</h1>
            <h2>
              Tools, technologies and gadgets I use on a daily basis but not
              limited to.
            </h2>
            <h1>Offline</h1>
            <h1>Online </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfPage;
