import { writings } from "#site/content";
import { Mdx } from "@/components/ui/mdx-component";
import { TextShimmer } from "@/components/ui/shimmer-text";
import { siteConfig } from "@/config/site";
import { type Metadata } from "next";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
interface WritingPageProps {
  params: Promise<{
    slug: string[];
  }>;
}
async function getWritingFromParams(params: WritingPageProps["params"]) {
  const slugWait = await params;
  const slug = slugWait.slug?.join("/");
  const writing = writings.find((p) => p.slug === `writing/${slug}`);
  return writing;
}
export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const writing = await getWritingFromParams(params);
  if (!writing) {
    return {};
  }
  return {
    title: writing.title,
    description: writing.description,
    authors: { name: siteConfig.name },
    openGraph: {
      title: writing.title,
      description: writing.description,
      type: "article",
      url: writing.slug,
    },
    twitter: {
      card: "summary_large_image",
      title: writing.title,
      description: writing.description,
    },
  };
}

// export async function generateStaticParams(): Promise<WritingPageProps["params"][]> {
//   return Promise.resolve(writings.map((post) => ({ slug: post.slugAsParams.split("/") })));
// }

export default async function Page({ params }: WritingPageProps) {
  const writing = await getWritingFromParams(params);

  if (!writing) {
    return null;
  }
  const formattedDate = format(new Date(writing.date), "dd MMMM yyyy");
  return (
    <>
      <div className="flex flex-row items-center justify-between text-center">
        <TextShimmer className="w-full pb-2 text-start text-2xl font-bold">
          {writing.title}
        </TextShimmer>

        <span className="flex-shrink-0 text-sm text-primary/80">
          {formattedDate}
        </span>
      </div>
      <span className="text-sm text-muted-foreground">
        {writing.description}
      </span>
      <div className="mb-8 mt-4 flex flex-row gap-2 pb-2">
        {writing.tags?.map((tag) => (
          <Badge
            key={tag}
            variant={"outline"}
            className="cursor-pointer text-xs"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <Mdx code={writing.body} />
    </>
  );
}
