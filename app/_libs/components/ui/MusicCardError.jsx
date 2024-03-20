import React from "react";
import Image from "next/image";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export default function MusicCardError() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <ExclamationTriangleIcon className="w-8 h-8 bg-red-500 rounded-full p-1 text-white" />
        <h2 className="text-red-500 font-medium">
          The server ran into an issue. Please try again later!
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {[...Array(30).keys()].map((item) => (
          <div
            key={item}
            className="w-full p-4 bg-neutral-900 rounded-lg space-y-4"
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
    </div>
  );
}
