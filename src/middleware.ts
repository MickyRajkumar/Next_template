import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const headers = new Headers(req.headers);

  // if (routesWithoutSession.includes(pathname) && data.session) {
  //   return NextResponse.redirect(new URL('/', req.url));
  // }
  // if (pathname === '/') {
  //   const resp = NextResponse.next({
  //     request: {
  //       headers
  //     }
  //   });

  //   return resp;
  // }

  // if (routesWithoutSession.indexOf(pathname) === -1 && !data.session) {
  //   return NextResponse.redirect(new URL('/login', req.url));
  // }
  const resp = NextResponse.next({
    request: {
      headers
    }
  });

  return resp;
}

//! route that can access only without session
const routesWithoutSession = [];

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/']
};
