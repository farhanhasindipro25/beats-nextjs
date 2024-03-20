import MusicCard from "@/app/_libs/components/ui/MusicCard";
import React from "react";

export default function RecommendedListView({ data, isLoading, isError }) {
  if (isLoading) return <h2 className="text-white">Loading...</h2>;
  if (isError) return <h2 className="text-white">Error...</h2>;

  const recommended = data.filter((song) => song.recommended === true);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {recommended?.map((song) => (
        <MusicCard key={song.id} song={song} />
      ))}
    </div>
  );
}
