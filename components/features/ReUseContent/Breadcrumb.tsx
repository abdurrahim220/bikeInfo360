import React from "react";
import { FaHome } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link";

interface BreadcrumbProps {
  paths: { name: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
  return (
    <nav className="flex items-center space-x-2 text-gray-600">
     
      <Link href="/" className="flex items-center hover:text-blue-500">
        <FaHome className="mr-1" />
        Home
      </Link>

      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <HiChevronRight className="text-gray-400" />
          <Link href={path.href} className="hover:text-blue-500 capitalize">
            {path.name}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
