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
import { MusicalNoteIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="bg-neutral-950 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <Link
            href="/"
            className="text-white font-semibold italic flex items-center gap-2"
          >
            <MusicalNoteIcon className="w-5 h-5" />
            BEATS
          </Link>
          <div className="gap-4 sm:gap-8 flex">
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
