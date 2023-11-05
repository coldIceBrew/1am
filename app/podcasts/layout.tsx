import PodcastsHeader from "@components/PodcastsHeader";

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PodcastsHeader />
      <div className="xl:container xl:max-w-7xl mx-auto p-5">{children}</div>
    </>
  );
}
