import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { user } = session;

    const podcasts = await prisma.podcast.findMany({
      where: {
        authorId: Number(user.id),
      },
    });

    return Response.json(podcasts);
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
