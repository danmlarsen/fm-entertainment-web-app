"use server";

import { revalidateTag } from "next/cache";

export async function logoutSuccess() {
  revalidateTag("getMedia");
  revalidateTag("getUserBookmarks");
}
