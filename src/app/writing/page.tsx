import { writings } from "#site/content";
import { Badge } from "@/components/ui/badge";
import { TextShimmer } from "@/components/ui/shimmer-text";
import { format } from "date-fns";
import Link from "next/link";

export default async function WritingPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <TextShimmer className="mb-8 w-full border-b-[1px] border-primary/[0.25] pb-2 text-3xl font-bold">
        Writings
      </TextShimmer>

      <div className="flex flex-col space-y-2">
        {writings.map((writing) => (
          <article
            key={writing.slug}
            className="group rounded-sm p-2 hover:bg-secondary"
          >
            <div className="flex flex-row justify-between">
              <Link href={`/writing/${writing.slugAsParams}`}>
                <h2 className="text-lg">{writing.title}</h2>
              </Link>
              <div className="text-xs text-muted-foreground">
                {format(new Date(writing.date), "dd MMMM yyyy")}
              </div>
            </div>
            {writing.description && (
              <p className="mb-2 text-xs text-muted-foreground">
                {writing.description}
              </p>
            )}
            {writing.tags && (
              <div className="flex flex-wrap gap-2">
                {writing.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={"outline"}
                    className="cursor-pointer text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
