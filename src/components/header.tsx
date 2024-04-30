"use client";

import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Account",
    path: "/account",
  },
];

const Header = () => {
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2">
      <Logo />
      <nav>
        <ul className="flex  gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                className={cn(
                  "text-white/70 rounded-sm px-2 py-1 hover:text-white focus:text-white transition",
                  {
                    " bg-black/10 text-white": activePathname === route.path,
                  }
                )}
                href={route.path}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
