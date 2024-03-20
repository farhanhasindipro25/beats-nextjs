import MusicCard from "@/app/_libs/components/ui/MusicCard";
import React from "react";

export default function TrendingListView({ data, isLoading, isError }) {
  if (isLoading) return <h2 className="text-white">Loading...</h2>;
  if (isError) return <h2 className="text-white">Error...</h2>;

  const trending = data.filter((song) => song.trending === true);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {trending?.map((song) => (
        <MusicCard key={song.id} song={song} />
      ))}
    </div>
  );
}
