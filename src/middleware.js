import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
    const token = await getToken({ req: request });
    const isAuthPage = request.nextUrl.pathname.startsWith('/login');
    const isProtectedPage = request.nextUrl.pathname.startsWith('/add-item');

    if (isProtectedPage && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (isAuthPage && token) {
        return NextResponse.redirect(new URL('/items', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/add-item', '/login'],
};
