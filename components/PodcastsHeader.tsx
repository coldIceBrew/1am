import Image from "next/image";
import PodcastsDropdownButton from "./PodcastsDropdownButton";
import UserButton from "./UserButton";
import { getServers } from "dns";
import { getServerSession } from "next-auth";

export default async function PodcastsHeader() {
  const session = await getServerSession();

  return (
    <header className="py-3 px-5 border-b border-bottom-sub">
      <div className="flex flex-row justify-between items-center">
        <Image src={"/logo.svg"} alt={"Main Logo"} width={300} height={100} />
        <UserButton session={session} />
      </div>
    </header>
  );
}
