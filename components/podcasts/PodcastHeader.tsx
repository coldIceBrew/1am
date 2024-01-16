"use client";

import ModeToggle from "../ModeToggle";
import Logo from "../Logo";
import PodcastDropdownButton from "./PodcastDropdownButton";

export default function PodcastHeader() {
  return (
    <header className="flex items-center px-8 py-5">
      <Logo />
      <div className="flex-1"></div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <PodcastDropdownButton />
      </div>
    </header>
  );
}
