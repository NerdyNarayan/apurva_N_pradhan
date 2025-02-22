import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <Card className="group relative overflow-hidden rounded-sm border-none">
        <div className="absolute right-0 top-0 z-10 hidden w-full flex-row justify-end gap-2 p-1 group-hover:flex">
          <Badge
            variant={"outline"}
            className="flex border-none hover:text-white"
          >
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <LiaExternalLinkAltSolid className="h-7 w-7" />
            </Link>
          </Badge>
        </div>

        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="mb-1 text-lg font-bold text-foreground">{title}</h3>
          <p className="mb-3 text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.04 }}
                className="inline-flex cursor-pointer items-center bg-muted px-3 py-1 text-xs font-medium text-foreground/80 ring-1 ring-inset ring-gray-500/10"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
