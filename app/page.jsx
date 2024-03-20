"use client";
import SearchByTextField from "./_libs/components/ui/SearchByTextField";
import { useQuery } from "@tanstack/react-query";
import getMusicList from "./_libs/services/getMusicList";
import MusicListView from "./_libs/components/ui/MusicListView";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["songs"],
    queryFn: () => getMusicList(),
  });

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
        <MusicListView data={data} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
}
