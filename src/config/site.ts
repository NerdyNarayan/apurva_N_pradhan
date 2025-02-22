import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { type IconType } from "react-icons/lib";

export const siteConfig = {
  name: "Apurva Narayan Pradhan",
  description: "Apurva Pradhan's Portfolio",
  url: "https://apurva-n-pradhan.vercel.app",
  links: {
    github: "https://github.com/NerdyNarayan",
    linkedin: "https://www.linkedin.com/in/apurva-narayan-pradhan",
    twitter: "https://twitter.com/NerdyNarayan",
  },
};
export type navItem = {
  title: string;
  href: string;
  icon?: IconType;
};
const home = {
  title: "Home",
  href: "/",
};
const project = {
  title: "Projects",
  href: "/projects",
};
const skills = {
  title: "Skills",
  href: "/skill",
};
const writing = {
  title: "Writing",
  href: "/writing",
};
const about = {
  title: "About",
  href: "/about",
};

export const socialItems = {
  items: [
    {
      title: "GitHub",
      href: siteConfig.links.github,
      icon: FaGithub,
    },
    {
      title: "LinkedIn",
      href: siteConfig.links.linkedin,
      icon: FaLinkedin,
    },
    {
      title: "Twitter",
      href: siteConfig.links.twitter,
      icon: FaXTwitter,
    },
  ],
};
export const navItems = {
  items: [project, skills, home, writing, about],
};
export type NavItems = typeof navItems;
export type SiteConfig = typeof siteConfig;
