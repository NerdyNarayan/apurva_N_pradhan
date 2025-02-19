import Link from "next/link";
import { FaGithub, FaHamburger, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ModeToggle } from "../ui/mode-toggle";
import { Menu, MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex w-full flex-row justify-between border-b backdrop-blur-sm dark:border-gray-900 dark:bg-black/50">
      <div className="flex flex-row gap-4 text-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary transition-colors duration-300 hover:text-primary/80">
            Apurva N Pradhan
          </h1>
        </Link>
        <nav className="hidden flex-row items-center gap-3 text-muted-foreground md:flex">
          <Link
            href="/about"
            className="transition-colors duration-300 hover:text-primary"
          >
            Skills & Tools
          </Link>
          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-primary"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-primary"
          >
            About
          </Link>
        </nav>
      </div>
      <div className="flex flex-row items-center gap-3">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors duration-300 hover:text-primary/80"
        >
          <FaGithub className="h-6 w-6" />
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors duration-300 hover:text-primary/80"
        >
          <FaLinkedin className="h-6 w-6" />
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors duration-300 hover:text-primary/80"
        >
          <FaXTwitter className="h-6 w-6" />
        </Link>
        <div className="hidden md:flex">
          <ModeToggle />
        </div>
        <Drawer>
          <DrawerTrigger className="flex md:hidden">
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex flex-col items-center justify-center gap-2">
              <DrawerTitle>Apurva N Pradhan</DrawerTitle>
              <div className="flex flex-row items-center gap-2">
                <FaXTwitter />
                <FaGithub />
                <FaLinkedin />
              </div>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerHeader className="py-1">Skills & Tools</DrawerHeader>

              <DrawerHeader className="py-1">Projects</DrawerHeader>

              <DrawerHeader className="py-1">Blogs</DrawerHeader>

              <DrawerHeader className="py-1">About</DrawerHeader>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
