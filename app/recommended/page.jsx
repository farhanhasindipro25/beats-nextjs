"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import getMusicList from "../_libs/services/getMusicList";
import RecommendedListView from "./_libs/component/RecommendedListView";

export default function RecommendedPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["songs"],
    queryFn: () => getMusicList(),
  });
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-white">Recommended Songs</h2>
      <RecommendedListView
        data={data}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}
