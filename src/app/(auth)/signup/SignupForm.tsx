"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupUserSchema } from "@/validation/signupUserSchema";

import AuthCard, {
  AuthCardBody,
  AuthCardFooter,
  AuthCardTitle,
} from "@/ui/AuthCard";
import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import { registerUser } from "./actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signupUserSchema>>({
    resolver: zodResolver(signupUserSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  async function submit(data: z.infer<typeof signupUserSchema>) {
    const response = await registerUser(data);

    if (!!response?.error) {
      toast.error(response.message);
      return;
    }

    toast.success("Your account was created successfully!");
    router.push("/login");
  }

  return (
    <form action="#" onSubmit={handleSubmit(submit)} noValidate>
      <fieldset disabled={isSubmitting}>
        <AuthCard>
          <AuthCardTitle>Sign Up</AuthCardTitle>
          <AuthCardBody>
            <InputField
              type="email"
              placeholder="Email address"
              {...register("email")}
              error={errors.email?.message ? errors.email.message : ""}
              autoComplete="email"
            />
            <InputField
              type="password"
              placeholder="Password"
              {...register("password")}
              error={errors.password?.message ? errors.password.message : ""}
              autoComplete="new-password"
            />
            <InputField
              type="password"
              placeholder="Repeat password"
              {...register("passwordConfirm")}
              error={
                errors.passwordConfirm?.message
                  ? errors.passwordConfirm.message
                  : ""
              }
              autoComplete="new-password"
            />
          </AuthCardBody>
          <AuthCardFooter>
            <Button className="focus-visible:ring-white" type="submit">
              Create an account
            </Button>
            <p className="space-x-3 text-center">
              <span>Already have an account?</span>
              <a className="text-primary-500" href="/login">
                Login
              </a>
            </p>
          </AuthCardFooter>
        </AuthCard>
      </fieldset>
    </form>
  );
}
