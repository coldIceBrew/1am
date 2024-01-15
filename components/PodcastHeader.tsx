"use client";

import ModeToggle from "./ModeToggle";
import Logo from "./Logo";
import UserButton from "./UserButton";

export default function PodcastHeader() {
  return (
    <header className="flex items-center px-8 py-5">
      <Logo />
      <div className="flex-1"></div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <UserButton />
      </div>
    </header>
  );
}
