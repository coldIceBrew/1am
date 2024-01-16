import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { podcastId: string } }
) {
  try {
    const { podcastId } = params;

    const episodes = await prisma.episode.findMany({
      where: {
        podcastId: Number(podcastId),
      },
    });

    return new Response(JSON.stringify(episodes), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
