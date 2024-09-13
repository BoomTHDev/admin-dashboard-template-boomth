import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest) {

    const token = cookies().get('token-user')?.value

    const isLoggedIn = token;
    const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')
    const next = NextResponse.next()
    const loginPage = NextResponse.redirect(new URL('/login', request.nextUrl))
    const dashboardPage = NextResponse.redirect(new URL('/dashboard', request.nextUrl))

    if (isOnDashboard) {
        if (isLoggedIn) {
            return next
        } else {
            return loginPage
        }
    } else if (isLoggedIn) {
        return dashboardPage
    }
    return next
}

export const config = {
    matcher: ['/', '/dashboard/:path*', '/login']
}