"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactComponent } from "@/types/types";
import { menuTypes } from "./MenuTypes";

const Menu: ReactComponent<menuTypes> = ({ open }) => {
  const routeName = usePathname();

  const MenuItemList = [
    {
      href: "/",
      className: `menu-item ${routeName === "/" ? "active-menu-item" : ""}`,
      name: "Home",
    },
    {
      href: "/about",
      className: `menu-item ${
        routeName === "/about" ? "active-menu-item" : ""
      }`,
      name: "About",
    },
    {
      href: "/project",
      className: `menu-item ${
        routeName === "/project" ? "active-menu-item" : ""
      }`,
      name: "Project",
    },
    {
      href: "/contact",
      className: `menu-item ${
        routeName === "/contact" ? "active-menu-item" : ""
      }`,
      name: "Contact",
    },
    {
      href: "/blog",
      className: `menu-item ${routeName === "/blog" ? "active-menu-item" : ""}`,
      name: "Blog",
    },
  ];

  return (
    <div
      className={`bg-[#0f0f0f] z-[60] max-md:fixed max-md:left-0 max-md:right-0 max-md:top-0 max-md:overflow-x-hidden max-md:pt-24 max-md:pb-6 max-md:flex max-md:items-center max-md:justify-center max-md:w-full max-md:transform max-md:origin-center max-md:transition-all max-md:duration-500 max-md:h-[100vh] ${
        open ? "max-md:opacity-100" : "max-md:opacity-0"
      } ${open ? "max-md:visible" : "max-md:invisible"}
      ${open ? "max-md:translateOpen" : "max-md:translateClose"}
      `}
    >
      <ul className="flex flex-col gap-8 m-0 p-0 items-center text-center md:flex-row md:w-full">
        {MenuItemList.map((data, index) => {
          return (
            <li key={index} className="tranistion-custom hover:text-white">
              <Link href={data.href} className={data.className}>
                {data.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
