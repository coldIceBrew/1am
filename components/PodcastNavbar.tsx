"use client";

import { Cog6ToothIcon, PlusIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface PodcastNavbarItem {
  subPath: string;
  icon: React.ReactNode;
  content: string;
}

const podcastNavbarItemList: PodcastNavbarItem[] = [
  {
    subPath: "",
    icon: <UserIcon className="w-5 h-5 mr-3" />,
    content: "마이페이지",
  },
  {
    subPath: "/episodes/create",
    icon: <PlusIcon className="w-5 h-5 mr-3" />,
    content: "에피소드 만들기",
  },
  {
    subPath: "/episodes",
    icon: <Cog6ToothIcon className="w-5 h-5 mr-3" />,
    content: "에피소드 관리하기",
  },
];

function PodcastNavbarItem({
  href,
  icon,
  content,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  content: string;
  active: boolean;
}) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center mb-5 ${
          active ? "font-bold" : "hover:text-gray-500"
        }`}
      >
        {icon}
        <span>{content}</span>
      </div>
    </Link>
  );
}

export default function PodcastNavbar({ id: podcastId }: { id: string }) {
  // QUESTION: 왼쪽에 네비게이션 바가 붙어있어야 하는지?
  // TODO: href 만들기
  const basePath = `/podcasts/${podcastId}`;
  const pathname = usePathname();

  return (
    <nav className="bg-gray-100 rounded-tr-3xl pt-10 px-14 min-h-full">
      {podcastNavbarItemList.map((item) => (
        <PodcastNavbarItem
          key={item.content}
          href={basePath + item.subPath}
          icon={item.icon}
          content={item.content}
          active={pathname === basePath + item.subPath}
        />
      ))}
    </nav>
  );
}
