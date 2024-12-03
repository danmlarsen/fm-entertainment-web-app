import MediaList from "@/components/MediaList";
import MediaSearch from "@/components/MediaSearch";
import { getMedia } from "@/lib/firebase-service";
import SectionTitle from "@/ui/SectionTitle";

export default async function Page() {
  const movies = await getMedia({ category: "Movie" });

  return (
    <div className="space-y-6">
      <MediaSearch placeholder="Search for movies" />
      <div className="space-y-6">
        <SectionTitle>Movies</SectionTitle>
        <MediaList data={movies} />
      </div>
    </div>
  );
}
