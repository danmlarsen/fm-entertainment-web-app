import { getMedia, getUserBookmarks } from "@/lib/firebase-service";
import SectionTitle from "@/ui/SectionTitle";
import MediaList from "./MediaList";

type AppProps = {
  searchString: string;
  category?: "all" | "Movie" | "TV Series";
  bookmarks?: boolean;
};

export default async function MediaSearchResult({
  searchString,
  category = "all",
  bookmarks = false,
}: AppProps) {
  const options = category !== "all" ? { category } : {};

  const data = await getMedia(options);
  const userBookmarks = await getUserBookmarks();

  let filteredData = [...data];
  if (bookmarks) {
    filteredData = filteredData.filter((media) =>
      Object.keys(userBookmarks).includes(media.id),
    );
  }

  filteredData = filteredData.filter((media) =>
    media.title.toLowerCase().includes(searchString.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <SectionTitle>
        Found {filteredData.length} results for '{searchString}'
      </SectionTitle>
      <MediaList data={filteredData} />
    </div>
  );
}
