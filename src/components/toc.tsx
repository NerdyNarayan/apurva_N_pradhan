"use client";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
interface TocEntry {
  items: TocEntry[];
  url: string;
  title: string;
}
interface TocProps {
  toc: TocEntry[];
}
interface TreeProps {
  tree: TocEntry[];
  level?: number;
  activeItem?: string | null;
}
export function TableOfContents({ toc }: TocProps) {
  const itemIds = useMemo(
    () =>
      toc
        ? toc
            .flatMap((item) => [item.url, item.items.map((i) => i.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id.split("#")[1])
        : [],
    [toc],
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();
  return mounted ? (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  ) : null;
}
function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = useState<string>("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -80% 0px",
      },
    );
    itemIds.forEach((id) => {
      if (!id) {
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        observer.unobserve(element);
      }
    });
  }, [itemIds]);
  return activeId;
}
function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree.length && level < 3 ? (
    <ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
      {tree.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline",
                item.url === `#${activeItem}`
                  ? "font-medium text-primary"
                  : "text-sm text-muted-foreground",
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree
                tree={item.items}
                level={level + 1}
                activeItem={activeItem}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}
