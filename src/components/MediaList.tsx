import { getCachedUserBookmarks } from "@/lib/firebase-service";
import MediaListItem from "./MediaListItem";
import { MediaType } from "@/types/MediaType";
import { cookies } from "next/headers";

export default async function MediaList({ data }: { data: MediaType[] }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;
  const userBookmarks = await getCachedUserBookmarks(token);

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(9.375rem,1fr))] gap-4 sm:grid-cols-[repeat(auto-fill,minmax(11.25rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(13.75rem,1fr))] md:gap-8 lg:grid-cols-[repeat(auto-fill,minmax(17.5rem,1fr))] lg:gap-10">
      {data.map((media) => (
        <MediaListItem
          key={media.title}
          data={{
            ...media,
            isBookmarked: userBookmarks[media.id],
          }}
        />
      ))}
    </ul>
  );
}
