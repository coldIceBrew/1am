import PodcastForm from "@/components/PodcastForm";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";

async function PodcastsInfo({ params }: { params: { podcastId: string } }) {
  // TODO: podcast에 대한 인가 확인 필요
  const { podcastId } = params;

  const podcast = await prisma.podcast.findUnique({
    where: {
      id: Number(podcastId),
    },
  });

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-3 pr-10">
        <PodcastForm podcast={podcast} />
      </div>

      <div className="col-start-5 col-span-2">
        <div className="flex flex-row">
          <p className="text-xl font-medium">미리보기</p>
          <hr className="" />
        </div>
      </div>
    </div>
  );
}

export default PodcastsInfo;
