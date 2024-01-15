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
import { authOptions } from "@/lib/auth";

export default function UserButton() {
  // TODO: podcast 로딩 구현
  const podcast = useRecoilValue(currentPodcastState);

  if (!podcast) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-x-3 rounded-lg border border-gray-300 overflow-hidden">
          <Image
            src={podcast.artwork || ""}
            alt="user avatar"
            width={54}
            height={54}
          />
          <div className="flex-1 flex justify-center items-start flex-col mr-5 min-w-[150px]">
            <p className="text-sm text-gray-500">{podcast.title}</p>
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
