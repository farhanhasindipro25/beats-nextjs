"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getMusicList from "../_libs/services/getMusicList";
import TrendingListView from "./_libs/components/TrendingListView";

export default function TrendingPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["songs"],
    queryFn: () => getMusicList(),
  });
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Trending Songs</h2>
      <TrendingListView data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}
