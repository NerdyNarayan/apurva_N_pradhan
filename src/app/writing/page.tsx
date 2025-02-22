import { cn } from "@/lib/utils";
import { allWritings } from "contentlayer/generated";
import { pick } from "contentlayer2/client";
import Link from "next/link";
import React from "react";

async function getData() {
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

const Writing = async () => {
  const { posts } = (await getData()).props;
  return (
    <div>
      {" "}
      {posts.map((post) => (
        <Link
          className={cn(
            "-mx-2 flex flex-row justify-between rounded-md px-2 py-2",
            "hover:bg-gray-200 dark:hover:bg-gray-800",
            "transition-all duration-200",
          )}
          href={`/writing/${post.slug}`}
          key={post.slug}
        >
          <span className="mr-2 flex-grow truncate text-primary">
            {post.title}
          </span>
          <span className="text-tertiary flex-shrink-0">
            <span>{post.publishedAt}</span>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Writing;
