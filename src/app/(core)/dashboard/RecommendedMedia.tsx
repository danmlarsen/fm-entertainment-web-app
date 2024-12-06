import MediaList from "@/components/MediaList";
import { getCachedMedia } from "@/lib/firebase-service";
import { cookies } from "next/headers";

export default async function RecommendedMedia() {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  const recommendedData = await getCachedMedia(token, {
    filters: { isTrending: false },
  });

  return <MediaList data={recommendedData} />;
}
