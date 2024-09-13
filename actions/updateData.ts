"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { cookies } from "next/headers";

export async function updateUser(formData: FormData) {
  const id = formData.get("id") as string;
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const isAdmin = formData.get("isAdmin") as string;
  const isActive = formData.get("isActive") as string;

  try {
    if (password) {
      if (!password.startsWith("$2b$10$")) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const userUpdatePW = await db.user.update({
          where: { id },
          data: {
            username,
            email,
            password: hash,
            phone,
            address,
            isAdmin: isAdmin === "true" ? true : false,
            isActive: isActive === "true" ? true : false,
          },
        });
        await refreshToken(userUpdatePW.id);
      } else {
        const userUpdate = await db.user.update({
          where: { id },
          data: {
            username,
            email,
            phone,
            address,
            isAdmin: isAdmin === "true" ? true : false,
            isActive: isActive === "true" ? true : false,
          },
        });
        cookies().set("token-user", "", {
            secure: true,
            httpOnly: true,
            expires: Date.now() - 1000,
            path: "/",
            sameSite: "strict",
        });
        await refreshToken(userUpdate.id);
      }
    }
  } catch (error: any) {
    console.log(error);
    return { error: "failed to update user", success: false };
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function updateProduct(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  const price = formData.get("price") as string;
  const stock = formData.get("stock") as string;
  const color = formData.get("color") as string;
  const size = formData.get("size") as string;

  try {
    await db.product.update({
      where: { id },
      data: {
        title,
        desc,
        price: Number(price),
        stock: Number(stock),
        color,
        size,
      },
    });
  } catch (error: any) {
    console.log(error);
    return { error: "failed to update product", success: false };
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function refreshToken(id: string) {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new Error("user not found");
    }

    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

    const newToken = await new jose.SignJWT({
      id: user.id,
      username: user.username,
      role: user.isAdmin === true ? "Admin" : "Client",
      img: user.img,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .setSubject(user.id.toString())
      .sign(secret);

    cookies().set("token-user", newToken, {
      secure: true,
      httpOnly: true,
      expires: Date.now() + 24 * 60 * 60 * 1000 * 7,
      path: "/",
      sameSite: "strict",
    });
  } catch (error: any) {
    console.log(error);
    return { error: "failed to refresh token", success: false };
  }
}
