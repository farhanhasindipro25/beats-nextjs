import React from "react";
import MusicCard from "./MusicCard";
import MusicCardSkeleton from "./MusicCardSkeleton";

export default function MusicListView({ data, isLoading, isError }) {
  if (isLoading) return <MusicCardSkeleton />;
  if (isError) return <h2 className="text-white">Error...</h2>;
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {data?.map((song) => (
        <MusicCard key={song.id} song={song} />
      ))}
    </div>
  );
}
