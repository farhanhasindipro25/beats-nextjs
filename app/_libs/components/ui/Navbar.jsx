"use client";
import React from "react";
import Link from "next/link";
import { navOptions } from "../../statics/navOptions";
import {
  ACTIVE_TAB_STYLES,
  DEFAULT_STYLES,
  DEFAULT_TAB_STYLES,
} from "../../constants/NavbarStyleKit";
import cn from "../../helpers/Utilskit";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="bg-neutral-950 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-semibold italic">
            BEATS
          </Link>
          <div className="hidden gap-8 lg:flex">
            {navOptions?.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className={cn(
                  DEFAULT_STYLES,
                  pathname === item.href
                    ? ACTIVE_TAB_STYLES
                    : DEFAULT_TAB_STYLES
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
