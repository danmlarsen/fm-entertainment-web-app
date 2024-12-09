import { z } from "zod";
import { passwordValidation } from "./passwordValidation";

export const signupUserSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password: passwordValidation,
    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        message: "Passwords do not match",
        path: ["passwordConfirm"],
        code: "custom",
      });
    }
  });
