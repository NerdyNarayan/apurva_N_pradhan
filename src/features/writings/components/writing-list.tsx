import Box from "@/components/ui/box";
import { TextShimmer } from "@/components/ui/shimmer-text";
import { cn } from "@/lib/utils";
import { allWritings } from "contentlayer/generated";
import { pick } from "contentlayer2/client";
import Link from "next/link";
import React from "react";

function getData() {
  const posts = allWritings
    .map((post) => pick(post, ["slug", "title", "summary", "publishedAt"]))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
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
          href={`/writing/${post.slug}`}
          key={post.slug}
        >
          <span className="mr-2 flex-grow truncate">{post.title}</span>
          <span className="flex-shrink-0">
            <span>{post.publishedAt}</span>
          </span>
        </Link>
      ))}
      <Box />
    </div>
  );
};

export default WritingList;
