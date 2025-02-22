import { writings } from "#site/content";
import Box from "@/components/ui/box";
import { TextShimmer } from "@/components/ui/shimmer-text";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

function getData() {
  const posts = writings.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  return {
    props: {
      posts,
    },
  };
}

const WritingList = () => {
  const { posts } = getData().props;

  return (
    <div>
      <TextShimmer className="w-full border-b-[1px] border-primary/[0.15] pb-2 text-start text-xl font-bold">
        My Writings
      </TextShimmer>
      <Box />
      {posts.map((post) => (
        <Link
          className={cn(
            "-mx-2 flex flex-row justify-between rounded-md px-2 py-2",
            "border-b-[1px] hover:text-primary/80",
            "transition-all duration-200",
          )}
          href={`/${post.slug}`}
          key={post.slug}
        >
          <span className="mr-2 flex-grow truncate">{post.title}</span>
          <span className="flex-shrink-0">
            <span>{format(new Date(post.date), "dd MMMM yyyy")}</span>
          </span>
        </Link>
      ))}
      <Box />
    </div>
  );
};

export default WritingList;
