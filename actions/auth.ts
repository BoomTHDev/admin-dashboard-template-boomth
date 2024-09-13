"use server";

import db from "@/db/db";
import bcrpyt from "bcrypt";
import * as jose from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    const user = await db.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new Error("Invalid user!");
    }

    const isValidPassword = await bcrpyt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid password!");
    }

    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

    const token = await new jose.SignJWT({
      id: user.id,
      username: user.username,
      role: user.isAdmin === true ? "Admin" : "Client",
      img: user.img,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .setSubject(user.id.toString())
      .sign(secret);

    cookies().set("token-user", token, {
      secure: true,
      httpOnly: true,
      expires: Date.now() + 24 * 60 * 60 * 1000,
      path: "/",
      sameSite: "strict",
    });
  } catch (error: any) {
    console.log(error);
    return { error: error.message, success: false };
  }

  redirect("/dashboard");
}

export async function signOut() {
  cookies().set("token-user", "", {
    secure: true,
    httpOnly: true,
    expires: Date.now() - 1000,
    path: "/",
    sameSite: "strict",
  });

  cookies().set("refresh-token", "", {
    secure: true,
    httpOnly: true,
    expires: Date.now() - 1000,
    path: "/",
    sameSite: "strict",
  });
  redirect("/login");
}

