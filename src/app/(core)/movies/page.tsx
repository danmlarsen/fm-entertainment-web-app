import MediaSearch from "@/components/MediaSearch";
import SectionTitle from "@/ui/SectionTitle";
import MovieList from "./MovieList";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="space-y-6">
      <MediaSearch placeholder="Search for movies" />
      <div className="space-y-6">
        <SectionTitle>Movies</SectionTitle>
        <Suspense fallback={<p>Loading...</p>}>
          <MovieList />
        </Suspense>
      </div>
    </div>
  );
}
