import React from "react";
import Image from "next/image";

export default function MusicCardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 animate-pulse">
      {[...Array(30).keys()].map((item) => (
        <div
          key={item}
          className="animate-pulse w-full p-4 bg-neutral-900 rounded-lg space-y-4"
        >
          <Image
            src="/no-image.jpg"
            alt="no-image"
            width={640}
            height={480}
            priority
            className="rounded-md object-cover aspect-square"
          />
          <div className="space-y-2">
            <div className="w-full h-5 bg-neutral-800 rounded-full" />
            <div className="w-full h-3 bg-neutral-800 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
