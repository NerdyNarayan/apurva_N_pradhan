import { TextShimmer } from "@/components/ui/shimmer-text";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "EcoTrack",
    description:
      "A sustainable living app helping users track and reduce their carbon footprint through daily activities and challenges.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "Node.js", "MongoDB", "TypeScript"],
    liveUrl: "https://ecotrack.demo",
    githubUrl: "https://github.com/demo/ecotrack",
    featured: true,
  },
  {
    title: "DevFlow",
    description:
      "Developer productivity suite with integrated tools for workflow automation and team collaboration.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    liveUrl: "https://devflow.demo",
    githubUrl: "https://github.com/demo/devflow",
    featured: true,
  },
  {
    title: "HealthHub",
    description:
      "Telemedicine platform connecting patients with healthcare providers for virtual consultations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Express", "PostgreSQL", "WebRTC"],
    liveUrl: "https://healthhub.demo",
    featured: false,
  },
  {
    title: "ArtGallery",
    description:
      "Digital art marketplace for artists to showcase and sell their work using blockchain technology.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Solidity", "IPFS", "Ethereum"],
    githubUrl: "https://github.com/demo/artgallery",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-16 space-y-8">
        <TextShimmer className="text-3xl font-bold">Projects</TextShimmer>
        <p className="max-w-2xl text-muted-foreground">
          A collection of projects I&apos;ve built, ranging from web
          applications to mobile apps. Each project represents a unique
          challenge and learning experience.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`group relative grid grid-cols-1 gap-8 md:grid-cols-2 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
