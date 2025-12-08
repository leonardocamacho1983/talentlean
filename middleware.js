import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/insights")) {
    const stripped = url.pathname.replace("/insights", "") || "/";
    url.hostname = "ghost.talentlean.com";
    url.protocol = "https";
    url.pathname = stripped;

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/insights/:path*"]
};