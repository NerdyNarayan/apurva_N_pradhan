import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./project-card";
export default function ProjectTab() {
  return (
    <Tabs defaultValue="web" className="w-full">
      <TabsList className="gap-2 bg-transparent">
        <TabsTrigger className="font-bold" value="web">
          Web
        </TabsTrigger>
        <TabsTrigger value="app">App</TabsTrigger>

        <TabsTrigger value="cli">CLI</TabsTrigger>
      </TabsList>
      <TabsContent value="web">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ProjectCard
            title="Skateshop"
            description="An open-source e-commerce platform built with the latest Next.js features."
            image="https://picsum.photos/200
"
            link="https://github.com/apurva-n-pradhan/skateshop"
            tags={[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "PostgreSQL",
            ]}
          />
          <ProjectCard
            title="Skateshop"
            description="An open-source e-commerce platform built with the latest Next.js features."
            image="https://picsum.photos/200
"
            link="https://github.com/apurva-n-pradhan/skateshop"
            tags={[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "PostgreSQL",
            ]}
          />

          <ProjectCard
            title="Skateshop"
            description="An open-source e-commerce platform built with the latest Next.js features."
            image="https://picsum.photos/200"
            link="https://github.com/apurva-n-pradhan/skateshop"
            tags={[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Prisma",
              "PostgreSQL",
            ]}
          />
        </div>
      </TabsContent>
      <TabsContent value="app">Change your password here.</TabsContent>

      <TabsContent value="cli">Change your password here.</TabsContent>
    </Tabs>
  );
}
