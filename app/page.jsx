"use client";
import SearchByTextField from "./_libs/components/ui/SearchByTextField";
import { useQuery } from "@tanstack/react-query";
import getMusicList from "./_libs/services/getMusicList";
import MusicListView from "./_libs/components/ui/MusicListView";
import { useState } from "react";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["songs"],
    queryFn: () => getMusicList(),
  });
  const [searchKey, setSearchKey] = useState("");

  const searchedData = data
    ? data.filter((song) => {
        const { song_name, band_name } = song;
        const searchTerm = searchKey.toLowerCase();
        return (
          song_name.toLowerCase().includes(searchTerm) ||
          band_name.toLowerCase().includes(searchTerm)
        );
      })
    : [];

  return (
    <div className="space-y-10">
      <SearchByTextField
        label="Search"
        name="search"
        id="search"
        placeholder="Search by song title, or band name"
        onChange={(e) => setSearchKey(e.target.value)}
        onReset={() => setSearchKey("")}
        value={searchKey}
      />
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-white">All songs</h2>
        {searchKey && (
          <h2 className="text-sm font-normal text-white">
            Showing{" "}
            <span className="font-semibold">{searchedData.length}</span>{" "}
            {searchedData.length > 0
              ? searchedData.length === 1
                ? "result"
                : "results"
              : null}{" "}
            for <span className="font-semibold italic">{searchKey}</span>.
          </h2>
        )}
        <MusicListView
          data={searchedData}
          isLoading={isLoading}
          isError={isError}
        />
      </div>
    </div>
  );
}
