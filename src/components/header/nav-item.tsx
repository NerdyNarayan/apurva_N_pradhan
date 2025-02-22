import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import { useActiveNav } from "@/hooks/use-active-nav";
import { cn } from "@/lib/utils";
import { type navItem } from "@/config/site";
import React from "react";

const SiteNavItem = ({ href, title, icon }: navItem) => {
  const Icon = icon;
  const isActive = useActiveNav(href);
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={cn(isActive && "text-primary")}>
          <div className="flex items-center justify-center gap-3">
            {Icon && (
              <Icon aria-label={title} className="h-4 w-4 md:h-5 md:w-5" />
            )}
            {!Icon && title}
          </div>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
export default SiteNavItem;
