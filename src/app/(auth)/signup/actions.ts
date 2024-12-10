"use server";

import { auth } from "@/firebase/server";
import { signupUserSchema } from "@/validation/signupUserSchema";

export async function registerUser(data: {
  email: string;
  password: string;
  passwordConfirm: string;
}) {
  const validation = signupUserSchema.safeParse(data);

  if (!validation.success) {
    return {
      error: true,
      message: validation.error.issues[0]?.message ?? "An error occured",
    };
  }

  try {
    await auth.createUser({
      email: data.email,
      password: data.password,
    });
  } catch (e: any) {
    return {
      error: true,
      message: e.message ?? "Could not register user",
    };
  }
}
