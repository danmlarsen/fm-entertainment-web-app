"use server";

import { revalidateTag } from "next/cache";

export async function loginSuccess() {
  revalidateTag("getMedia");
  revalidateTag("getUserBookmarks");
}
