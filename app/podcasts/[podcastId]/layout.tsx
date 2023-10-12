import PodcastsHeader from "./components/PodcastsHeader";
import PodcastsNavbar from "./components/PodcastsNavbar";

export default function PodcastLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { podcastId: string };
}) {
  return (
    <>
      <div className="xl:container xl:max-w-6xl  xl:mx-auto mx-3 mt-16">
        <PodcastsHeader />
        <PodcastsNavbar />
        <hr className="mb-12 border-2 border-sub opacity-30" />
        {children}
      </div>
    </>
  );
}
