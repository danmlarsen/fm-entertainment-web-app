import MediaSearch from "@/components/MediaSearch";
import SectionTitle from "@/ui/SectionTitle";
import MovieList from "./MovieList";
import { Suspense } from "react";
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
      <MediaSearch placeholder="Search for movies" />
      {!searchString && (
        <div className="space-y-6">
          <SectionTitle>Movies</SectionTitle>
          <Suspense fallback={<MediaListSkeleton />}>
            <MovieList />
          </Suspense>
        </div>
      )}
      {!!searchString && (
        <MediaSearchResult searchString={searchString} category="Movie" />
      )}
    </div>
  );
}
