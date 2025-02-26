import { TextShimmer } from "@/components/ui/shimmer-text";
import { siteConfig, socialItems } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
// eslint-disable-next-line boundaries/element-types
import SocialItem from "./_components/social-link";
import {
  Code2,
  Coffee,
  Laptop,
  Monitor,
  Smartphone,
  Terminal,
} from "lucide-react";

const SelfPage = () => {
  const currentProjects = [
    {
      title: "EcoTrack",
      description:
        "A sustainable living app helping users reduce their carbon footprint",
      tech: ["React Native", "Node.js", "MongoDB"],
      status: "In Development",
    },
    {
      title: "DevFlow",
      description: "Developer productivity tools and workflow automation",
      tech: ["Next.js", "TypeScript", "Prisma"],
      status: "Beta",
    },
  ];

  const tools = {
    development: [
      { name: "VS Code", category: "Editor" },
      { name: "TypeScript", category: "Language" },
      { name: "React", category: "Framework" },
      { name: "Next.js", category: "Framework" },
      { name: "Node.js", category: "Runtime" },
      { name: "Git", category: "Version Control" },
    ],
    design: [
      { name: "Figma", category: "UI/UX" },
      { name: "Adobe XD", category: "UI/UX" },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl space-y-16 py-8">
      {/* Hero Section */}
      <div className="flex w-full flex-col justify-between gap-12 md:flex-row md:gap-24">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/static/nerdy-mascot.jpg"
            alt="Picture of the author"
            className="rounded-full"
            width={200}
            height={200}
          />
          <div className="flex flex-col items-center">
            <TextShimmer className="mb-2 text-nowrap text-xl font-bold">
              {siteConfig.name}
            </TextShimmer>
            <div className="flex flex-col items-center space-y-1">
              <span className="text-sm text-muted-foreground">
                FullStack Developer
              </span>
              <span className="text-sm text-muted-foreground">Freelancer</span>
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

        <div className="flex w-full flex-col gap-6">
          <TextShimmer className="border-b border-primary/10 pb-2 text-2xl font-bold">
            Full Stack Developer And App Developer, Based In India
          </TextShimmer>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I started my career as a web developer about 2 years ago.
              I&apos;ve tried some programming languages and tech stack, both
              Back-End, and Front-End. Even though the scope of web development
              is broad, I was very interested and focused on Front-End
              Development and UI/UX Design.
            </p>
            <p>
              I&apos;m passionate about building beautiful and functional
              applications that solve real-world problems. I&apos;m always
              looking for new challenges and opportunities to learn and grow as
              a developer.
            </p>
          </div>
        </div>
      </div>

      {/* Current Projects */}
      <section>
        <div className="flex gap-2">
          <Code2 className="h-6 w-6" />
          <TextShimmer className="mb-6 flex items-center gap-2 text-xl font-bold">
            What I&apos;m Currently Hacking On
          </TextShimmer>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {currentProjects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Badge variant="secondary">{project.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools & Technologies */}
      <section>
        <div className="flex gap-2">
          <Code2 className="h-6 w-6" />
          <TextShimmer className="mb-6 flex items-center gap-2 text-xl font-bold">
            Tools & Technologies
          </TextShimmer>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Laptop className="h-5 w-5" />
                Development
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {tools.development.map((tool) => (
                <Badge
                  key={tool.name}
                  variant="secondary"
                  className="px-3 py-1"
                >
                  {tool.name}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Design
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {tools.design.map((tool) => (
                <Badge
                  key={tool.name}
                  variant="secondary"
                  className="px-3 py-1"
                >
                  {tool.name}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Site */}
      <section>
        <TextShimmer className="mb-6 text-xl font-bold">
          About this site
        </TextShimmer>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-muted-foreground" />
                <span>Built with Next.js, TypeScript, and Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-muted-foreground" />
                <span>Fully responsive and mobile-friendly</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Online/Offline Section */}
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <TextShimmer className="mb-4 text-xl font-bold">Offline</TextShimmer>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-muted-foreground">
                <li>📚 Reading technical blogs and books</li>
                <li>🎮 Playing strategy games</li>
                <li>🏃‍♂️ Running and staying active</li>
                <li>✍️ Writing technical articles</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <TextShimmer className="mb-4 text-xl font-bold">Online</TextShimmer>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-muted-foreground">
                <li>💻 Contributing to open source</li>
                <li>🌱 Learning new technologies</li>
                <li>👥 Participating in dev communities</li>
                <li>🎯 Working on side projects</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default SelfPage;
