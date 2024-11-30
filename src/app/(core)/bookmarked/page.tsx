import { getMovies, getShows } from "@/lib/data-service";

import MediaList from "@/components/MediaList";

export default function Page() {
  const movies = getMovies().filter((movie) => movie.isBookmarked);
  const shows = getShows().filter((show) => show.isBookmarked);

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
