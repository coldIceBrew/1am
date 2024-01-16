"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRecoilValue } from "recoil";
import { currentPodcastState } from "@/lib/atom";
import { Skeleton } from "../ui/skeleton";

export default function PodcastDropdownButton() {
  const { podcast, state } = useRecoilValue(currentPodcastState);

  if (state === "null" || state === "loading") {
    return (
      <div className="flex items-center space-x-4 rounded-lg">
        <Skeleton className="h-12 w-12" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-x-3 rounded-lg border overflow-hidden dark:border-white]">
          <Image
            src={
              podcast.artwork ||
              "https://www.buzzsprout.com/images/artworks_cover.jpg"
            }
            alt="podcast artwork"
            width={54}
            height={54}
          />
          <div className="flex-1 flex justify-center items-start flex-col mr-5 min-w-[150px]">
            <p className="text-sm text-gray-500 dark:text-white">
              {podcast.title}
            </p>
            <p className="text-xs text-gray-400">피드 링크</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            redirect("/podcasts");
          }}
        >
          내 팟캐스트 목록
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
