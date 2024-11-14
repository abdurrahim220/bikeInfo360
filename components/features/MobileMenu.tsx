"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to close the menu if clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMobileMenu(false);
    }
  };

  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenu]);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      <Button onClick={() => setIsMobileMenu(!isMobileMenu)}>
        {isMobileMenu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </Button>

      {isMobileMenu && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2"
          onClick={() => setIsMobileMenu(false)} // Close when clicking anywhere inside the menu
        >
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/bike-models"
                className={`block px-4 py-2 ${
                  pathname === "/bike-models" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100`}
              >
                Bike Models
              </Link>
            </li>
            <li>
              <Link
                href="/dealers"
                className={`block px-4 py-2 ${
                  pathname === "/dealers" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100`}
              >
                Dealers
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block px-4 py-2 ${
                  pathname === "/services" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/compare"
                className={`block px-4 py-2 ${
                  pathname === "/compare" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100`}
              >
                Compare
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block px-4 py-2 ${
                  pathname === "/blog" ? "text-blue-500" : "text-gray-700"
                } hover:bg-gray-100`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
