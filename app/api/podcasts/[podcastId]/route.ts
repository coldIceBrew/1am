import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from "uuid";
import * as fs from "fs";
import { IMAGE_PATH, PUBLIC_BASE_PATH } from "@/lib/env";

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

    const formData = await request.formData();
    const { json, file } = Object.fromEntries(formData.entries());

    const data = JSON.parse(json as string);
    const image = file as File;

    if (image) {
      if (!PUBLIC_BASE_PATH || !IMAGE_PATH) {
        throw new Error("PUBLIC_BASE_PATH or IMAGE_PATH is not defined");
      }

      // TODO: Remove old image

      const uuid = uuidv4();
      const dirName = `${PUBLIC_BASE_PATH}/${IMAGE_PATH}`;
      const fileName = `${uuid}.${image.type.split("/")[1]}`;
      const imagePath = `${dirName}/${fileName}`;

      if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
      }
      const buffer = Buffer.from(await image.arrayBuffer());
      fs.writeFileSync(imagePath, buffer);
      data.artwork = fileName;
    }

    await prisma.podcast.update({
      where: {
        id: Number(podcastId),
        authorId: Number(session.user.id),
      },
      data,
    });

    return new Response("OK", { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
