import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production'
    });

    const pathname = request.nextUrl.pathname;

    // Only protect /add-item route
    if (pathname.startsWith('/add-item') && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If logged in and trying to access login page, redirect to items
    if (pathname === '/login' && token) {
        return NextResponse.redirect(new URL('/items', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/add-item/:path*', '/login'],
};
