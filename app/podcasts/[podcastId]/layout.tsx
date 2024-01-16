"use client";

import PodcastHeader from "@/components/PodcastHeader";
import PodcastNavbar from "@/components/PodcastNavbar";
import { currentPodcastState } from "@/lib/atom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function PodcastWithIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { podcastId: string };
}) {
  const { podcastId } = params;
  const setPodcast = useSetRecoilState(currentPodcastState);

  useEffect(() => {
    const fetchPodcast = async () => {
      const response = await fetch(`/api/podcasts/${podcastId}`);
      const fetchedPodcast = await response.json();
      setPodcast(fetchedPodcast);
    };
    fetchPodcast();
  });

  return (
    <div className="min-h-screen flex flex-col">
      <PodcastHeader />
      <div className="flex-1 flex">
        <PodcastNavbar id={podcastId} />
        {children}
      </div>
    </div>
  );
}
