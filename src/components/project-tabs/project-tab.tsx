import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./project-card";

export default function ProjectTab() {
  return (
    <Tabs defaultValue="web" className="w-full">
      <TabsList className="flex gap-2 bg-transparent">
        <TabsTrigger className="font-bold" value="web">
          Web
        </TabsTrigger>
        <TabsTrigger value="app">App</TabsTrigger>
        <TabsTrigger value="cli">CLI</TabsTrigger>
      </TabsList>

      {["web", "app", "cli"].map((category) => (
        <TabsContent key={category} value={category} className="w-full">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i} className="sm:basis-full md:basis-1/2">
                  <ProjectCard
                    title={`Project ${i + 1}`}
                    description="An open-source e-commerce platform built with the latest Next.js features."
                    image="https://picsum.photos/400"
                    link="https://github.com/apurva-n-pradhan/skateshop"
                    tags={[
                      "                                    Next.js",
                      "TypeScript",
                      "Prisma",
                      "PostgreSQL",
                    ]}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </TabsContent>
      ))}
    </Tabs>
  );
}
