import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-neutral-950 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <h2 className="text-white font-semibold italic">BEATS</h2>
          <div className="space-x-8">
            <Link href="/trending" className="text-sm font-medium">
              Trending
            </Link>
            <Link href="/recommended" className="text-sm font-medium">
              Recommended
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
