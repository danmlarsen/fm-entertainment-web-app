import MediaList from "@/components/MediaList";
import MediaSearch from "@/components/MediaSearch";
import { getMedia } from "@/lib/firebase-service";
import SectionTitle from "@/ui/SectionTitle";

export default async function Page() {
  const [movies, shows] = await Promise.all([
    getMedia({ category: "Movie", filters: { isBookmarked: true } }),
    getMedia({ category: "TV Series", filters: { isBookmarked: true } }),
  ]);

  return (
    <div className="space-y-6">
      <MediaSearch placeholder="Search for bookmarked shows" />
      <div className="space-y-6">
        <SectionTitle>Bookmarked Movies</SectionTitle>
        <MediaList data={movies} />
      </div>
      <div className="space-y-6">
        <SectionTitle>Bookmarked TV Series</SectionTitle>
        <MediaList data={shows} />
      </div>
    </div>
  );
}
