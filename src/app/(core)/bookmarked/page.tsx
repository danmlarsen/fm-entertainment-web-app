import MediaSearch from "@/components/MediaSearch";
import SectionTitle from "@/ui/SectionTitle";
import BookmarkedMoviesList from "./BookmarkedMoviesList";
import BookmarkedShowsList from "./BookmarkedShowsList";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="space-y-6">
      <MediaSearch placeholder="Search for bookmarked shows" />
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
    </div>
  );
}
