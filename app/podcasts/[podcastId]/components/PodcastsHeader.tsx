import Image from "next/image";
import PodcastsDropdownButton from "./PodcastsDropdownButton";

export default function PodcastsHeader() {
  return (
    <header>
      <div className="flex flex-row justify-between items-center">
        <Image src={"/logo.svg"} alt={"Main Logo"} width={300} height={100} />
        <PodcastsDropdownButton />
      </div>
    </header>
  );
}
