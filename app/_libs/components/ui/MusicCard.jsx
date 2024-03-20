import React from "react";
import Image from "next/image";
import { MusicalNoteIcon } from "@heroicons/react/20/solid";

export default function MusicCard({ song }) {
  const {
    album_name,
    band_name,
    song_name,
    genre,
    ratings,
    trending,
    recommended,
    song_cover,
  } = song;
  return (
    <div className="w-full p-4 bg-neutral-900 rounded-lg space-y-4">
      <Image
        src={song_cover}
        alt={song_name}
        width={640}
        height={480}
        className="rounded-md object-cover aspect-square"
      />
      <div>
        <h2 className="text-white text-sm font-semibold">{song_name}</h2>
        <h2 className="text-neutral-500 text-sm font-medium">{band_name}</h2>
      </div>
    </div>
  );
}
