import Image from "next/image";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

export default async function PodcastsHeader() {
  const session = await getServerSession();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="flex flex-col sm:flex-row gap-y-5 items-center p-5 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end space-x-4 sm:mt-3">
          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </div>
    </header>
  );
}
