import React from "react";
import Image from "next/image";
import { MusicalNoteIcon } from "@heroicons/react/20/solid";

export default function MusicCard(props) {
  const {
    album_name,
    band_name,
    song_name,
    genre,
    ratings,
    trending,
    recommended,
  } = props;
  return (
    <div className="w-full p-4 bg-neutral-950 border border-neutral-700 rounded-lg">
      <MusicalNoteIcon className="w-5 h-5 text-neutral-400" />
    </div>
  );
}
