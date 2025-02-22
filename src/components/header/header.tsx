"use client";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import { MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { navItems, socialItems } from "@/config/site";
import SiteNavItem from "./nav-item";
import { NavigationMenu } from "../ui/navigation-menu";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/utils";
export default function Header() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="sticky top-0 z-50 flex w-full flex-row items-center justify-between border-b pt-2 backdrop-blur-sm dark:border-gray-900 dark:bg-black/40"
    >
      <div className="flex flex-row gap-4">
        <Link href="/">
          <h1 className="text-lg font-bold text-primary transition-colors duration-300 hover:text-primary/80 md:text-lg">
            Apurva N Pradhan
          </h1>
        </Link>
        <NavigationMenu className="mt-1 hidden list-none flex-row items-center gap-3 text-sm text-muted-foreground md:flex">
          {navItems.items
            .filter((p) => p.title !== "Home")
            .map(({ title, href }) => (
              <SiteNavItem href={href} key={title} title={title} />
            ))}
        </NavigationMenu>
      </div>
      <NavigationMenu className="hidden list-none flex-row items-center gap-3 text-xs md:flex">
        {socialItems.items.map(({ title, href, icon }) => (
          <SiteNavItem href={href} key={title} icon={icon} title={title} />
        ))}
        <ModeToggle />
      </NavigationMenu>
      <Drawer>
        <DrawerTrigger className="flex md:hidden">
          <MenuIcon className="h-4 w-4" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex flex-col items-center justify-center gap-2">
            <DrawerTitle className="flex items-center justify-center">
              <span className=" ">Apurva N Pradhan</span>

              <div className="absolute right-10 justify-end">
                <ModeToggle />
              </div>
            </DrawerTitle>
            <div className="flex flex-row items-center gap-2">
              {
                <NavigationMenu className="list-none gap-4">
                  {socialItems.items.map(({ title, href, icon }) => (
                    <SiteNavItem
                      href={href}
                      key={title}
                      icon={icon}
                      title={title}
                    />
                  ))}
                </NavigationMenu>
              }
            </div>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex flex-col items-center">
              {navItems.items.map(({ title, href }) => (
                <DrawerHeader className="py-1" key={title}>
                  <Link href={href}>{title}</Link>
                </DrawerHeader>
              ))}
              <div className="absolute right-10 top-8"></div>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </motion.div>
  );
}
