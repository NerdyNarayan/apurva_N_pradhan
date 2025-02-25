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
    <div className="mx-auto">
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
      <div className="flex flex-col space-y-2">
        {writings
          .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
          .map((writing) => (
            <article
              key={writing.slug}
              className="group rounded-lg border-primary/10 p-2 transition-all duration-100 hover:border-[1px]"
            >
              <Link href={`/writing/${writing.slugAsParams}`}>
                <div className="flex flex-row justify-between">
                  <span className="font flex flex-row gap-1 font-semibold text-primary group-hover:text-primary/80">
                    {writing.title}
                  </span>
                  <div className="flex flex-col text-xs text-muted-foreground">
                    <span className="mr-1 text-xs transition-all duration-300 group-hover:text-primary/70">
                      {format(writing.date, "MMMM dd, yyyy")}
                    </span>

                    <span className="text-xs transition-all duration-300 group-hover:text-primary/60">
                      {writing.readingTime}
                    </span>
                  </div>
                </div>
                {writing.description && (
                  <p className="mb-2 text-xs text-muted-foreground">
                    {writing.description}
                  </p>
                )}
                {/* {writing.tags && (
                <div className="  flex flex-wrap gap-2">
                  {writing.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={"outline"}
                      className="cursor-pointer  border-0 bg-primary/10 hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

              )} */}
              </Link>
            </article>
          ))}
      </div>
    </div>
  );
}
