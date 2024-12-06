import { getCachedMedia } from "@/lib/firebase-service";
import { cookies } from "next/headers";
import TrendingMediaCarouselList from "./TrendingMediaCarouselList";

export default async function TrendingMediaCarousel() {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  const trendingData = await getCachedMedia(token, {
    filters: { isTrending: true },
  });

  return <TrendingMediaCarouselList data={trendingData} />;
}
