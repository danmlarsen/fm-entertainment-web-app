import MediaSearch from "@/components/MediaSearch";
import SectionTitle from "@/ui/SectionTitle";
import BookmarkedMoviesList from "./BookmarkedMoviesList";
import BookmarkedShowsList from "./BookmarkedShowsList";
import { Suspense } from "react";
import MediaSearchResult from "@/components/MediaSearchResult";

export default async function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search: searchString } = await searchParams;

  return (
    <div className="space-y-6">
      <MediaSearch placeholder="Search for bookmarked shows" />
      {!searchString && (
        <>
          <div className="space-y-6">
            <SectionTitle>Bookmarked Movies</SectionTitle>
            <Suspense fallback={<p>Loading...</p>}>
              <BookmarkedMoviesList />
            </Suspense>
          </div>
          <div className="space-y-6">
            <SectionTitle>Bookmarked TV Series</SectionTitle>
            <Suspense fallback={<p>Loading...</p>}>
              <BookmarkedShowsList />
            </Suspense>
          </div>
        </>
      )}
      {searchString && (
        <MediaSearchResult searchString={searchString} bookmarks />
      )}
    </div>
  );
}
