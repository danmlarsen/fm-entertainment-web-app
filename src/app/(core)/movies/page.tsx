import { getMovies } from "@/lib/data-service";

import MediaList from "@/components/MediaList";

export default function Page() {
  const movies = getMovies();

  return (
    <div>
      <div className="space-y-6">
        <h2>Movies</h2>
        <MediaList data={movies} />
      </div>
    </div>
  );
}
