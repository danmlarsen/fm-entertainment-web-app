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

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginUserSchema>>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function submit(data: z.infer<typeof loginUserSchema>) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <AuthCard>
        <AuthCardTitle>Login</AuthCardTitle>
        <AuthCardBody>
          <InputField
            type="email"
            placeholder="Email address"
            {...register("email")}
            error={errors.email?.message ? errors.email.message : ""}
          />
          <InputField
            type="password"
            placeholder="Password"
            {...register("password")}
            error={errors.password?.message ? errors.password.message : ""}
          />
        </AuthCardBody>
        <AuthCardFooter>
          <Button>Login to your account</Button>
          <ContinueWithGoogleButton />
          <p className="space-x-3 text-center">
            <span>Dont have an account?</span>
            <Link className="text-primary-500" href="/signup">
              Sign Up
            </Link>
          </p>
        </AuthCardFooter>
      </AuthCard>
    </form>
  );
}
