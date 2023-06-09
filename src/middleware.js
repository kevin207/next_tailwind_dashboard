import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(NextRequest) {
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
