// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

const PUBLIC_ROUTES = ['/login', '/register', '/forgot-password']
const PRIVATE_ROUTES = ['/dashboard', '/profile', '/settings']
const API_SECURE_PREFIX = '/api/secure'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 1️⃣ Obtener sesión (solo si usás next-auth)
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  // --- 🟢 Rutas públicas ---
  if (PUBLIC_ROUTES.some((path) => pathname.startsWith(path))) {
    // Si tiene sesión e intenta ir a /login, lo redirigís al dashboard
    if (session) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    return NextResponse.next()
  }

  // --- 🔒 Rutas privadas ---
  if (PRIVATE_ROUTES.some((path) => pathname.startsWith(path))) {
    // Si no hay sesión, lo mandás a login
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
    return NextResponse.next()
  }

  // --- 🧱 Rutas de API protegidas con token ---
  if (pathname.startsWith(API_SECURE_PREFIX)) {
    const authHeader = req.headers.get('authorization')
    const token = authHeader?.split(' ')[1]

    if (!token || token !== process.env.API_SECRET_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.next()
  }

  // 🟦 Si ninguna condición aplica, continuar normalmente
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Protege las rutas del dashboard
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',

    // Protege las APIs seguras
    '/api/secure/:path*',

    // Aplica también a las rutas públicas
    '/login',
    '/register',
    '/forgot-password',
  ],
}
