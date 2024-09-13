import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const token = cookies().get("token-user")?.value;
  const refresh_token = cookies().get("refresh-token")?.value;

  if (token) {
    try {
      const secret = new TextEncoder().encode(
        process.env.NEXT_PUBLIC_JWT_SECRET
      );
      const { payload } = await jose.jwtVerify(token, secret, {});
      if (payload) {
        const response = NextResponse.next();
        response.headers.set("X-User-Sub", payload.sub as string);
        response.headers.set("X-User-Name", payload.username as string);
        response.headers.set("X-User-Role", payload.role as string);
        response.headers.set("X-User-Img", payload.img as string);
        return response;
      }
    } catch (error: any) {
      console.log(error);
    }
  } else {
    console.log("token not found");
  }

//   if (refresh_token) {
//     try {
//       const secret = new TextEncoder().encode(
//         process.env.NEXT_PUBLIC_JWT_SECRET
//       );
//       const { payload: refreshPayload } = await jose.jwtVerify(
//         refresh_token,
//         secret,
//         {}
//       );
//       const newToken = await new jose.SignJWT({
//         id: refreshPayload.id,
//         username: refreshPayload.username,
//         role: refreshPayload.role,
//         img: refreshPayload.img,
//       })
//         .setProtectedHeader({ alg: "HS256" })
//         .setExpirationTime("1d")
//         .sign(secret);

//       // เก็บ access token ใหม่ลงคุกกี้
//       cookies().set("token-user", newToken, {
//         secure: true,
//         httpOnly: true,
//         expires: Date.now() + 60 * 60 * 1000,
//         path: "/",
//         sameSite: "strict",
//       });
//     } catch (error: any) {
//       console.log(error);
//     }
//   }

  const isLoggedIn = token;
  const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
  const next = NextResponse.next();
  const loginPage = NextResponse.redirect(new URL("/login", request.nextUrl));
  const dashboardPage = NextResponse.redirect(
    new URL("/dashboard", request.nextUrl)
  );

  if (isOnDashboard) {
    if (isLoggedIn) {
      return next;
    } else {
      return loginPage;
    }
  } else if (isLoggedIn) {
    return dashboardPage;
  }
  return next;
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login"],
};
