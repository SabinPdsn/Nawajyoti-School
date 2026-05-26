"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import Logo from "@/public/logos/logo.png";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

type NavKey =
  | "Home"
  | "About"
  | "Academics"
  | "Notice Board"
  | "Gallery"
  | "Downloads";
type MenuChild = { label: string; href: string };
type MenuItem = { label: NavKey; href?: string; children?: MenuChild[] };

const MENU: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Introduction", href: "/about/introduction" },
      { label: "Our Staff", href: "/about/staffs" },
    ],
  },
  { label: "Academics", href: "/academics" },
  { label: "Notice Board", href: "/notice" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
];

export function Header() {
  const pathname = usePathname();
  const [aboutOpen, setAboutOpen] = React.useState(false);

  // Determine active navigation based on current pathname
  const getActiveNav = (): NavKey | null => {
    if (pathname === "/") return "Home";
    if (pathname.startsWith("/about")) return "About";
    if (pathname.startsWith("/academics")) return "Academics";
    if (pathname.startsWith("/notice")) return "Notice Board";
    if (pathname.startsWith("/gallery")) return "Gallery";
    if (pathname.startsWith("/downloads")) return "Downloads";
    return null;
  };

  const active = getActiveNav();

  const getNavClass = (isActive?: boolean | null) =>
    [
      navigationMenuTriggerStyle(),
      "relative inline-flex items-center bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
      "px-3 py-2 text-[15.5px] lg:text-[16.5px] font-medium text-gray-800 transition-colors duration-200",
      "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0",
      "after:h-0.5 after:w-0 after:rounded-full after:bg-scarlet after:transition-[width] after:duration-200 after:ease-out",
      isActive
        ? "text-scarlet after:w-[70%]"
        : "hover:text-scarlet hover:after:w-[70%]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scarlet/80 focus-visible:ring-offset-2",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid h-[4.25rem] sm:h-[4.85rem] lg:h-[5.5rem] grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center">
          <div className="justify-self-start">
            <Link
              href="/"
              aria-label="Shree Nawajyoti Secondary School"
              className="flex items-center gap-2 sm:gap-3"
            >
              <Image
                src={Logo}
                alt="Shree Nawajyoti School logo"
                width={60}
                height={60}
                className="h-9 w-9 sm:h-11 sm:w-11 lg:h-16 lg:w-16 object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:block justify-self-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {MENU.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger
                          className={getNavClass(active === item.label)}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[240px] gap-1 p-2">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink
                                  href={child.href}
                                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-scarlet hover:underline decoration-scarlet underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scarlet/80"
                                >
                                  {child.label}
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={item.href!}
                        className={getNavClass(active === item.label)}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}

                <NavigationMenuIndicator className="top-full z-10 flex h-1.5 items-end justify-center overflow-hidden">
                  <div className="relative top-[60%] h-2 w-2 rotate-45 bg-scarlet/80" />
                </NavigationMenuIndicator>
                <NavigationMenuViewport className="mt-2 w-radix-navigation-menu-viewport sm:w-radix-navigation-menu-viewport" />
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center justify-self-end gap-2">
            <Link href="/contact" className="hidden lg:block">
              <Button className="rounded-md bg-scarlet px-5 py-2.5 text-base text-white shadow-sm ring-1 ring-scarlet/20 transition hover:bg-scarlet/90 cursor-pointer">
                Contact Us
              </Button>
            </Link>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="ml-auto"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] sm:w-[360px]">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Site Navigation</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-2">
                    <ul className="space-y-1">
                      {MENU.map((item) =>
                        item.children ? (
                          <li key={item.label}>
                            <button
                              onClick={() => setAboutOpen((v) => !v)}
                              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base text-gray-800 transition-colors hover:text-scarlet"
                              aria-expanded={aboutOpen}
                              aria-controls="mobile-about-submenu"
                            >
                              <span>{item.label}</span>
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  aboutOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {aboutOpen && (
                              <div
                                id="mobile-about-submenu"
                                className="mt-1 pl-3"
                              >
                                {item.children.map((child) => (
                                  <MobileLink
                                    key={child.label}
                                    href={child.href}
                                    label={child.label}
                                  />
                                ))}
                              </div>
                            )}
                          </li>
                        ) : (
                          <li key={item.label}>
                            <MobileLink href={item.href!} label={item.label} />
                          </li>
                        )
                      )}
                    </ul>
                  </nav>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="w-full rounded-md bg-scarlet py-3 text-white shadow-sm hover:bg-scarlet/90 cursor-pointer"
                    >
                      Contact Us
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className="block rounded-lg px-3 py-2 text-base text-gray-800 transition-colors hover:text-scarlet hover:underline decoration-scarlet underline-offset-4"
      >
        {label}
      </Link>
    </SheetClose>
  );
}
