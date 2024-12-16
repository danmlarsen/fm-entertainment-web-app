import { getCachedUserBookmarks, getMedia } from "@/lib/firebase-service";
import SectionTitle from "@/ui/SectionTitle";
import MediaList from "./MediaList";
import { cookies } from "next/headers";

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

  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;
  const userBookmarks = await getCachedUserBookmarks(token);

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
    <div className="space-y-6 md:space-y-10">
      <SectionTitle>
        Found {filteredData.length} results for &apos;{searchString}&apos;
      </SectionTitle>
      <MediaList data={filteredData} />
    </div>
  );
}
