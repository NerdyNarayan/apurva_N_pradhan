import Link from "next/link";
import { type navItem } from "@/config/site";
import React from "react";

const SocialItem = ({ href, title, icon }: navItem) => {
  const Icon = icon;
  return (
    <Link href={href} legacyBehavior passHref>
      <div className="flex items-center justify-center gap-3">
        {Icon && <Icon aria-label={title} className="h-4 w-4 md:h-5 md:w-5" />}
        {!Icon && title}
      </div>
    </Link>
  );
};
export default SocialItem;
