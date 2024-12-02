import MediaList from "@/components/MediaList";
import { getMovies } from "@/lib/firebase";

export default async function Page() {
  const { data: movies } = await getMovies();

  return (
    <div>
      <div className="space-y-6">
        <h2>Movies</h2>
        <MediaList data={movies} />
      </div>
    </div>
  );
}
