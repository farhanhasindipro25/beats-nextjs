import React from "react";
import Image from "next/image";

export default function MusicCard({ song }) {
  const {
    band_name,
    song_name,

    song_cover,
  } = song;
  return (
    <div className="w-full p-4 bg-neutral-900 rounded-lg space-y-4">
      <Image
        src={song_cover}
        alt={song_name}
        width={640}
        height={480}
        priority
        className="rounded-md object-cover aspect-square"
      />
      <div>
        <h2 className="text-white text-sm font-semibold truncate">
          {song_name}
        </h2>
        <h2 className="text-neutral-500 text-sm truncate font-medium">
          {band_name}
        </h2>
      </div>
    </div>
  );
}
