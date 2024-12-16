import MediaSearch from "@/components/MediaSearch";
import SectionTitle from "@/ui/SectionTitle";
import { Suspense } from "react";
import ShowList from "./ShowList";
import MediaSearchResult from "@/components/MediaSearchResult";
import MediaListSkeleton from "@/components/MediaListSkeleton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const { search: searchString } = await searchParams;

  return (
    <div className="space-y-6 md:space-y-10">
      <MediaSearch placeholder="Search for TV Series" />
      {!searchString && (
        <div className="space-y-6">
          <SectionTitle>TV Series</SectionTitle>
          <Suspense fallback={<MediaListSkeleton />}>
            <ShowList />
          </Suspense>
        </div>
      )}
      {!!searchString && (
        <MediaSearchResult searchString={searchString} category="TV Series" />
      )}
    </div>
  );
}
