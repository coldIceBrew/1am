"use client";

import PodcastHeader from "@/components/podcasts/PodcastHeader";
import PodcastNavbar from "@/components/podcasts/PodcastNavbar";
import { currentPodcastState } from "@/lib/atom";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function PodcastWithIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { podcastId: string };
}) {
  const { podcastId } = params;
  const [podcast, setPodcast] = useRecoilState(currentPodcastState);

  // TODO: check user have access to this podcast

  useEffect(() => {
    const fetchPodcast = async () => {
      setPodcast({ ...podcast, state: "loading" });
      const response = await fetch(`/api/podcasts/${podcastId}`);
      const fetchedPodcast = await response.json();
      setPodcast({ podcast: fetchedPodcast, state: "loaded" });
    };
    fetchPodcast();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <PodcastHeader />
      <div className="flex-1 flex">
        <PodcastNavbar id={podcastId} />
        <div className="container max-w-6xl pt-[40px] pb-[50px]">
          {children}
        </div>
      </div>
    </div>
  );
}
