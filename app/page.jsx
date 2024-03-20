"use client";
import SearchByTextField from "./_libs/components/ui/SearchByTextField";
import { useQuery } from "@tanstack/react-query";
import getMusicList from "./_libs/services/getMusicList";
import MusicCard from "./_libs/components/ui/MusicCard";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["songs"],
    queryFn: () => getMusicList(),
  });

  if (isLoading) return <h2 className="text-white">Loading...</h2>;
  if (isError) return <h2 className="text-white">Error...</h2>;
  return (
    <div className="space-y-10">
      <SearchByTextField
        label="Search"
        name="search"
        id="search"
        placeholder="Search by song title, album name, or band name"
        // onChange={() => {}}
      />
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white">All songs</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data?.map((song) => (
            <MusicCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
}
