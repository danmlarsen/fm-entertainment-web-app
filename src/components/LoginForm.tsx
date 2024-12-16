"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "@/validation/loginUserSchema";

import ContinueWithGoogleButton from "@/app/(auth)/login/ContinueWithGoogleButton";
import AuthCard, {
  AuthCardBody,
  AuthCardFooter,
  AuthCardTitle,
} from "@/ui/AuthCard";
import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import { useAuth } from "@/context/auth";
import toast from "react-hot-toast";

export default function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginUserSchema>>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function submit(data: z.infer<typeof loginUserSchema>) {
    try {
      await auth?.loginWithEmail(data.email, data.password);
      toast.success("Successfully logged in. Redirecting to dashboard.");
      onSuccess?.();
    } catch (e: any) {
      // console.log({ e });
      const errorMessage =
        e?.code === "auth/invalid-credential"
          ? "Invalid email and/or password"
          : "An error occurred";
      toast.error(errorMessage);
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <fieldset disabled={isSubmitting}>
        <AuthCard>
          <AuthCardTitle>Login</AuthCardTitle>
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
              autoComplete="current-password"
            />
          </AuthCardBody>
          <AuthCardFooter>
            <Button>Login to your account</Button>
            <ContinueWithGoogleButton
              onSuccess={() => {
                onSuccess?.();
              }}
            />
            <p className="space-x-3 text-center">
              <span>Dont have an account?</span>
              <Link className="text-primary-500" href="/signup">
                Sign Up
              </Link>
            </p>
          </AuthCardFooter>
        </AuthCard>
      </fieldset>
    </form>
  );
}
