import prisma from "@/app/libs/prisma";
import Link from "next/link";

export default async function Podcasts() {
  const podcasts = await prisma.podcast.findMany();

  return (
    <div>
      {podcasts.map((podcast) => (
        <div key={podcast.id}>
          <Link href={`/podcasts/${podcast.id}/episodes`}>{podcast.title}</Link>
        </div>
      ))}
    </div>
  );
}
