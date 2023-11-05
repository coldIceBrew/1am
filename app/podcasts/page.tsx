import PodcastCreateButton from "@/components/PodcastCreateButton";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { PlusIcon } from "@heroicons/react/24/solid";
import { getServers } from "dns";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Podcasts() {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized User");
  }

  const podcasts = await prisma.podcast.findMany({
    where: {
      authorId: Number(session?.user.id),
    },
  });

  return (
    <div>
      <div className="flex gap-x-5 items-center mb-8">
        <h1 className="text-xl font-thin">팟캐스트 목록</h1>
        <PodcastCreateButton />
      </div>
      {podcasts.length > 0 ? (
        podcasts.map((podcast) => (
          <div key={podcast.id}>
            <Link href={`/podcasts/${podcast.id}/episodes`} prefetch={false}>
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
