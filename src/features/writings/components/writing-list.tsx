import { writings } from "#site/content";
import Box from "@/components/ui/box";
import { TextShimmer } from "@/components/ui/shimmer-text";
import { cn } from "@/lib/utils";
import { MdOutlineArrowOutward } from "react-icons/md";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

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
          href={post.slug}
          key={post.slug}
          className="group my-3 flex flex-col gap-2 text-primary/50 md:flex-row"
        >
          <span className="text-primary/70 transition-all duration-300 group-hover:text-primary/80">
            {post.title}
          </span>
          <div className="flex flex-row items-center gap-1">
            <span className="mr-1 text-xs transition-all duration-300 group-hover:text-primary/70">
              {format(post.date, "MMMM dd, yyyy")}
            </span>
            <span className="">·</span>

            <span className="text-xs transition-all duration-300 group-hover:text-primary/60">
              {post.readingTime}
            </span>
          </div>
        </Link>
      ))}
      <Box />
    </div>
  );
};

export default WritingList;
