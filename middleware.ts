import { NextRequest, NextResponse } from "next/server";
import { betterFetch } from "@better-fetch/fetch";
import { session } from "./lib/types";

const protectedRouters = ["/", "/calendar"]

export async function middleware(request: NextRequest) {
    const {data} = await betterFetch<session>("/api/auth/get-session", {
        baseURL: request.nextUrl.origin,
        headers: {
            cookie: request.headers.get("cookie") || ""
        }
    }) 

    const isAuthed = !!data?.user
    if(protectedRouters.includes(request.nextUrl.pathname) && !isAuthed) {
        return NextResponse.redirect(new URL("/auth", request.url))
    } else if(request.nextUrl.pathname === "/auth" && isAuthed) {
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: [
   '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
  }