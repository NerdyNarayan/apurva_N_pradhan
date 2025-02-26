import { writings } from "#site/content";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { TextShimmer } from "@/components/ui/shimmer-text";
import { compareDesc, format } from "date-fns";
import Link from "next/link";

export default async function WritingPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <NavigationMenu className="my-20 flex list-none flex-row items-center justify-center gap-4 font-serif text-3xl">
        <NavigationMenuItem className="mb-8 w-full text-primary">
          <Link href="/writing">
            <TextShimmer className="text-primary"> Blogs</TextShimmer>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="mb-8 w-full text-muted-foreground">
          Notes
        </NavigationMenuItem>
      </NavigationMenu>
      <div className="space-y-6">
        {writings
          .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
          .map((writing) => (
            <Link
              key={writing.slug}
              href={`/writing/${writing.slugAsParams}`}
              className="block"
            >
              <h2 className="text-lg">{writing.title}</h2>
              <div className="mb-3 flex items-center space-x-4 text-sm text-muted-foreground">
                <time className="transition-colors duration-300 group-hover:text-primary/70">
                  {format(writing.date, "MMMM dd, yyyy")}
                </time>
                <span className="transition-colors duration-300 group-hover:text-primary/60">
                  {writing.readingTime}
                </span>
              </div>
              {writing.description && (
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {writing.description}
                </p>
              )}
              {writing.tags && (
                <div className="flex flex-wrap gap-2">
                  {writing.tags.map((tag) => (
                    <Badge
                      variant="secondary"
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </Link>
          ))}
      </div>
    </div>
  );
}
