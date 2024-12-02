import MediaList from "@/components/MediaList";
import { getBookmarked } from "@/lib/firebase";

export default async function Page() {
  const { data: movies } = await getBookmarked("Movie");
  const { data: shows } = await getBookmarked("TV Series");

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <h2>Bookmarked Movies</h2>
        <MediaList data={movies} />
      </div>
      <div className="space-y-6">
        <h2>Bookmarked TV Series</h2>
        <MediaList data={shows} />
      </div>
    </div>
  );
}
