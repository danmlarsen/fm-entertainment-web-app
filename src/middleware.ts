import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.method === "POST") {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  if (!token && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  if (token && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const decodedToken = decodeJwt(token);

  if (decodedToken.exp && (decodedToken.exp - 300) * 1000 < Date.now()) {
    return NextResponse.redirect(
      new URL(
        `/api/refresh-token?redirect=${encodeURIComponent(request.nextUrl.pathname)}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/logout",
    "/dashboard",
    "/movies",
    "/shows",
    "/bookmarked",
  ],
};
