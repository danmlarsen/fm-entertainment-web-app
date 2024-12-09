import { z } from "zod";

export const passwordValidation = z
  .string()
  .min(1, "Can't be empty")
  .refine(
    (value) => {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      return regex.test(value);
    },
    {
      message: "Password is not secure.",
    },
  );
