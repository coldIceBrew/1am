import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET(
  request: Request,
  { params }: { params: { podcastId: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { user } = session;
    const { podcastId } = params;

    const podcast = await prisma.podcast.findUnique({
      where: {
        id: Number(podcastId),
        authorId: Number(user.id),
      },
    });

    if (!podcast) {
      return new Response("Not found", { status: 404 });
    }

    return Response.json(podcast);
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { podcastId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const { podcastId } = params;

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    await prisma.podcast.update({
      where: {
        id: Number(podcastId),
        authorId: Number(session.user.id),
      },
      data: await request.json(),
    });

    return new Response("OK", { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
