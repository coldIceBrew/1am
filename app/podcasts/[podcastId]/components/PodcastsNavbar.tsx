"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export default function PodcastsNavbar() {
  const { podcastId } = useParams();
  const pathname = usePathname();

  const activeClass = "font-bold";
  const nonActiveClass = "hover:text-blue-500";

  return (
    <nav>
      <ul className="flex flex-row gap-x-5 my-3">
        <li>
          <Link
            href={`/podcasts/${podcastId}/episodes`}
            className={
              pathname === `/podcasts/${podcastId}/episodes`
                ? activeClass
                : nonActiveClass
            }
          >
            Episodes
          </Link>
        </li>
        <li>
          <Link
            href={`/podcasts/${podcastId}/info`}
            className={
              pathname === `/podcasts/${podcastId}/info`
                ? activeClass
                : nonActiveClass
            }
          >
            Podcast Info
          </Link>
        </li>
      </ul>
    </nav>
  );
}
