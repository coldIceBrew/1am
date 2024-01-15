"use client";

import PodcastForm from "@/components/PodcastForm";
import { currentPodcastState } from "@/lib/atom";
import { useRecoilValue } from "recoil";

export default function PodcastsInfo() {
  const podcast = useRecoilValue(currentPodcastState);

  if (!podcast) {
    return null;
  }

  return (
    <div className="container py-5">
      <h1 className="text-2xl font-thin mb-10 border-b">마이페이지</h1>
      <PodcastForm podcast={podcast} />
      <form></form>
    </div>
  );
}
