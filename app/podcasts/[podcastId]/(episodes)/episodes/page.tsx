"use client";

import Loading from "@/components/Loading";
import { currentEpisodesQuery, currentPodcastState } from "@/lib/atom";
import { Episode, Podcast } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";

function EpisodeBox({
  podcast,
  episode,
}: {
  podcast: Podcast;
  episode: Episode;
}) {
  return (
    <Link href={`/podcasts/${podcast.id}/episodes/${episode.id}`}>
      <div className="flex shadow-xl p-4 border">
        <Image
          src={"https://www.buzzsprout.com/images/artworks_cover.jpg"}
          alt="episode artwork"
          width={54}
          height={54}
        />
        <div className="ml-4">
          <h1 className="text-lg">{episode.title}</h1>
          <p className="text-gray-500">{episode.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function PodcastsEpisodes() {
  const { podcast, state } = useRecoilValue(currentPodcastState);
  const episodes = useRecoilValue(currentEpisodesQuery);

  if (state === "null" || state === "loading") {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-2xl font-thin mb-10 border-b">에피소드 관리하기</h1>
      {episodes.length === 0 ? (
        <p>에피소드가 없습니다.</p>
      ) : (
        <div className="flex flex-col gap-y-4">
          {episodes.map((episode) => (
            <EpisodeBox podcast={podcast} episode={episode} />
          ))}
        </div>
      )}
    </>
  );
}
