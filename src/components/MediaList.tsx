import { getCachedUserBookmarks } from "@/lib/firebase-service";
import MediaListItem from "./MediaListItem";
import { MediaType } from "@/types/MediaType";
import { cookies } from "next/headers";

export default async function MediaList({ data }: { data: MediaType[] }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;
  const userBookmarks = await getCachedUserBookmarks(token);

  return (
    <ul className="md: grid grid-cols-[repeat(auto-fill,minmax(164px,1fr))] gap-[15px] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] md:gap-[30px] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:gap-10">
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
