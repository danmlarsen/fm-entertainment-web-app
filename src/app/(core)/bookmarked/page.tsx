import MediaSearch from "@/components/MediaSearch";
import SectionTitle from "@/ui/SectionTitle";
import BookmarkedMoviesList from "./BookmarkedMoviesList";
import BookmarkedShowsList from "./BookmarkedShowsList";
import { Suspense } from "react";
import MediaSearchResult from "@/components/MediaSearchResult";
import { getCachedUserBookmarks } from "@/lib/firebase-service";
import { cookies } from "next/headers";
import MediaListSkeleton from "@/components/MediaListSkeleton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const { search: searchString } = await searchParams;

  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;
  const userBookmarks = await getCachedUserBookmarks(token);

  return (
    <div className="space-y-6">
      <MediaSearch placeholder="Search for bookmarked shows" />
      {!searchString && (
        <>
          <div className="space-y-6">
            <SectionTitle>Bookmarked Movies</SectionTitle>
            <Suspense fallback={<MediaListSkeleton numItems={6} />}>
              <BookmarkedMoviesList bookmarks={Object.keys(userBookmarks)} />
            </Suspense>
          </div>
          <div className="space-y-6">
            <SectionTitle>Bookmarked TV Series</SectionTitle>
            <Suspense fallback={<MediaListSkeleton numItems={6} />}>
              <BookmarkedShowsList bookmarks={Object.keys(userBookmarks)} />
            </Suspense>
          </div>
        </>
      )}
      {!!searchString && (
        <MediaSearchResult searchString={searchString} bookmarks />
      )}
    </div>
  );
}
