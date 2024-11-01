import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the paths that should not be protected by the middleware
const PUBLIC_PATHS = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  // If the token exists, but the user is trying to access a public page, redirect to the homepage
  if (accessToken && PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If the token does not exist and the user is not on a public page, redirect to the login page
  if (!accessToken && !PUBLIC_PATHS.includes(request.nextUrl.pathname)) {

    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Otherwise, allow the request to proceed
  return NextResponse.next();
}

// Specify which routes should be protected by the middleware
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
