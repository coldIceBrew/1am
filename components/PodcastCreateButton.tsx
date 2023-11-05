import React from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import prisma from "@/lib/prisma";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

async function PodcastCreateButton() {
  const session = await getServerSession(authOptions);

  async function createPodcast() {
    "use server";
    console.log("TEST");
    const podcast = await prisma.podcast.create({
      data: {
        title: `${session?.user.name}의 팟캐스트`,
        authorId: Number(session?.user.id),
        description: "bla bla",
        artwork: "https://picsum.photos/id/237/300/300",
      },
    });

    redirect(`/podcasts/${podcast.id}/info`);
  }
  return (
    <form action={createPodcast}>
      <Button variant="outline" size="icon" type="submit">
        <PlusIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Create podcast</span>
      </Button>
    </form>
  );
}

export default PodcastCreateButton;
