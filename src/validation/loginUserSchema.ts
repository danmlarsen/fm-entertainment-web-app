import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Can't be empty"),
});
