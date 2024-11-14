"use client";
import MobileMenu from "@/components/features/MobileMenu";
import WrapContainer from "@/components/features/WrapContainer";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [top, setTop] = useState<boolean>(true);
  const pathname = usePathname(); // Set the current path

  // Scroll detection to toggle navbar appearance
  const scrollHandler = () => {
    setTop(window.scrollY <= 10);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 py-2 md:bg-opacity-90 transition-colors duration-300 ease-in-out border ${
        !top
          ? "bg-white backdrop-blur-md shadow-lg dark:text-black"
          : "dark:text-white"
      }`}
    >
      <WrapContainer>
        <div className="p-3 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" alt="logo" height={50} width={50} />
          </Link>

          {/* Search */}
          <div>
            <div className="space-y-2">
              <div className="relative">
                <Input
                  id="input-25"
                  className="pe-11"
                  placeholder="Search bikes..."
                  type="search"
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
                  <kbd className="inline-flex h-5 max-h-full items-center rounded border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <Link
                    href="/bike-models"
                    className={`${
                      pathname === "/bike-models" ? "text-blue-500" : "text-gray-500"
                    } transition hover:text-gray-500/75`}
                  >
                    Bike Models
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dealers"
                    className={`${
                      pathname === "/dealers" ? "text-blue-500" : "text-gray-500"
                    } transition hover:text-gray-500/75`}
                  >
                    Dealers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className={`${
                      pathname === "/services" ? "text-blue-500" : "text-gray-500"
                    } transition hover:text-gray-500/75`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compare"
                    className={`${
                      pathname === "/compare" ? "text-blue-500" : "text-gray-500"
                    } transition hover:text-gray-500/75`}
                  >
                    Compare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`${
                      pathname === "/blog" ? "text-blue-500" : "text-gray-500"
                    } transition hover:text-gray-500/75`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </WrapContainer>
    </header>
  );
};

export default Navbar;
