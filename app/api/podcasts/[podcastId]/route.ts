import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET(
  request: Request,
  { params }: { params: { podcastId: string } }
) {
  try {
    const { podcastId } = params;
    const podcast = await prisma.podcast.findUnique({
      where: {
        id: Number(podcastId),
      },
    });

    if (!podcast) {
      return new Response("Not found", { status: 404 });
    }

    const session = await getServerSession(authOptions);
    if (!session || Number(session.user.id) !== podcast.authorId) {
      return new Response("Unauthorized", { status: 403 });
    }

    return Response.json(podcast);
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
