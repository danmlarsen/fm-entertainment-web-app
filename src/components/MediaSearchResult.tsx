import { getMedia } from "@/lib/firebase-service";
import SectionTitle from "@/ui/SectionTitle";
import { cookies } from "next/headers";
import MediaList from "./MediaList";
import { MediaType } from "@/types/MediaType";

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
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value!;

  const options = category !== "all" ? { category } : {};

  const data = await getMedia(token, options);

  let filteredData = [...data];
  if (bookmarks) {
    filteredData = filteredData.filter((media) => media.isBookmarked);
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
