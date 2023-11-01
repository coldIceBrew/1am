import prisma from "@/lib/prisma";
import { getServers } from "dns";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Podcasts() {
  const session = await getServerSession();

  // TODO: User Id에 맞는 Podcast만 가져오기
  // TODO: 팟캐스트 만들기 기능 추가
  const podcasts = await prisma.podcast.findMany();

  return (
    <div>
      <h1>팟캐스트 목록</h1>
      {podcasts.map((podcast) => (
        <div key={podcast.id}>
          <Link href={`/podcasts/${podcast.id}/episodes`}>{podcast.title}</Link>
        </div>
      ))}
    </div>
  );
}
