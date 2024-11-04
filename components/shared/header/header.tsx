"use client";

import Logo from "@/components/features/logo";
import Search from "@/components/features/search";
import { ModeToggle } from "@/components/features/toggle-mode";
import { useState, useEffect } from "react";


// import MobileMenu from './mobile-menu'

export default function NavHeader() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="bg-red-500 px-4 rounded-full">
      <nav className="flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center justify-center gap-3">
          <Logo h={14} w={14}/>
        </div>
        <Search />
        {/* menu link */}
        <ul className="flex items-center justify-center gap-4">
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          {/* theme */}
          <div>
            <ModeToggle/>
          </div>
        </ul>
      </nav>
    </header>
  );
}
