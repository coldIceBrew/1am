"use client";

import { Podcast } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Podcasts() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await fetch("/api/podcasts");
      const fetchedPodcasts = await response.json();
      setPodcasts(fetchedPodcasts);
    };
    fetchPodcasts();
  }, []);

  return (
    <div>
      <div className="flex gap-x-5 items-center mb-8">
        <h1 className="text-xl font-thin">팟캐스트 목록</h1>
      </div>
      {podcasts.length > 0 ? (
        podcasts.map((podcast) => (
          <div key={podcast.id}>
            <Link href={`/podcasts/${podcast.id}`} prefetch={false}>
              {podcast.title}
            </Link>
          </div>
        ))
      ) : (
        <div>팟캐스트가 없습니다.</div>
      )}
    </div>
  );
}
