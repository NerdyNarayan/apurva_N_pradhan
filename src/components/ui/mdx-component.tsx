import React from "react";
import Image from "next/image";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import * as runtime from "react/jsx-runtime";
import { CodeBlock } from "./code-block";
type HTMLProps<T extends keyof JSX.IntrinsicElements> =
  React.ComponentProps<T> & {
    className?: string;
  };

const components = {
  Button,
  CodeBlock,
  h1: ({ className, ...props }: HTMLProps<"h1">) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-3xl font-bold tracking-tight",
        className,
      )}
      {...props}
    ></h1>
  ),
  h2: ({ className, ...props }: HTMLProps<"h2">) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b-[1px] border-none pb-1 text-xl font-semibold tracking-tight text-primary/80 first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLProps<"h3">) => (
    <h3
      className={cn(
        "text mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-primary/80",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HTMLProps<"h4">) => (
    <h4
      className={cn(
        "text mt-8 scroll-m-20 text-sm font-semibold tracking-tight text-primary/80",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HTMLProps<"h5">) => (
    <h5
      className={cn(
        "text mt-8 scroll-m-20 text-xs font-semibold tracking-tight text-primary/80",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HTMLProps<"h6">) => (
    <h6
      className={cn(
        "text mt-8 scroll-m-20 text-base font-semibold tracking-tight text-primary/80",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: HTMLProps<"a">) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: HTMLProps<"p">) => (
    <p
      className={cn(
        "leading-7 text-primary/90 [&:not(:first-child)]:mt-6",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: HTMLProps<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: HTMLProps<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: HTMLProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: HTMLProps<"blockquote">) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: HTMLProps<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: (props: HTMLProps<"hr">) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: HTMLProps<"table">) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: HTMLProps<"tr">) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLProps<"th">) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLProps<"td">) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: HTMLProps<"pre">) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: HTMLProps<"code">) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string;
}
const useMDXComponent = (code: string) => {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function(code);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  return fn({ ...runtime }).default;
};
export const Mdx: React.FC<MdxProps> = ({ code }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
};
