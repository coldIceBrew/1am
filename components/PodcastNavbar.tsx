"use client";

import { Cog6ToothIcon, PlusIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const podcastNavbarItemList = [
  {
    href: "/settings",
    icon: <UserIcon className="w-5 h-5 mr-3" />,
    content: "마이페이지",
  },
  {
    href: "/episodes/create",
    icon: <PlusIcon className="w-5 h-5 mr-3" />,
    content: "에피소드 만들기",
  },
  {
    href: "/episodes",
    icon: <Cog6ToothIcon className="w-5 h-5 mr-3" />,
    content: "에피소드 관리하기",
  },
];

function PodcastNavbarItem({
  href,
  icon,
  content,
}: {
  href: string;
  icon: React.ReactNode;
  content: string;
}) {
  return (
    <Link href={href}>
      <div className="flex items-center mb-5">
        {icon}
        <span>{content}</span>
      </div>
    </Link>
  );
}

export default function PodcastNavbar() {
  // QUESTION: 왼쪽에 네비게이션 바가 붙어있어야 하는지?
  // TODO: href 만들기
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="bg-gray-100 rounded-tr-3xl pt-10 px-14 min-h-full">
      {podcastNavbarItemList.map((item) => (
        <PodcastNavbarItem
          key={item.content}
          href={pathname}
          icon={item.icon}
          content={item.content}
        />
      ))}
    </nav>
  );
}
