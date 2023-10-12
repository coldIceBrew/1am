"use client";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";

type DropdownOption = {
  value: string;
  to: string;
};

export default function PodcastsDropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownOptions: DropdownOption[] = [
    {
      value: "로그아웃",
      to: "/api/auth/signout",
    },
  ];

  return (
    <div className="relative">
      <EllipsisHorizontalIcon
        className="w-8 h-8 hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute divide-y rounded-md divide-gray-100 z-10 border border-gray-100 shadow-lg text-sm right-0 whitespace-nowrap bg-white text-center">
          {dropdownOptions.map((option, idx) => (
            <ul className="px-8 py-2 hover:bg-gray-100">
              <li>
                <Link href={option.to}>{option.value}</Link>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
