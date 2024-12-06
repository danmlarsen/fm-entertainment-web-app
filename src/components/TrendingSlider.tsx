import { getCachedMedia } from "@/lib/firebase-service";
import TrendingSliderList from "./TrendingSliderList";
import { cookies } from "next/headers";

export default async function TrendingSlider() {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  const trendingData = await getCachedMedia(token, {
    filters: { isTrending: true },
  });

  return (
    <div className="relative min-h-[140px] overflow-x-hidden md:min-h-[230px]">
      <TrendingSliderList data={trendingData} />
    </div>
  );
}
