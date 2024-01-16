"use client";

import Loading from "@/components/Loading";
import PodcastForm from "@/components/podcasts/PodcastForm";
import { currentPodcastState } from "@/lib/atom";
import { useRecoilValue } from "recoil";

export default function PodcastsInfo() {
  const { podcast, state } = useRecoilValue(currentPodcastState);

  if (state === "null" || state === "loading") {
    // TODO: 로딩 화면 만들기
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-2xl font-thin mb-10 border-b">마이페이지</h1>
      <PodcastForm podcast={podcast} />
    </>
  );
}
