"use client";

import AuthCard, {
  AuthCardBody,
  AuthCardFooter,
  AuthCardTitle,
} from "@/ui/AuthCard";
import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthCard>
      <AuthCardTitle>Login</AuthCardTitle>
      <AuthCardBody>
        <InputField
          name="email"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </AuthCardBody>
      <AuthCardFooter>
        <Button>Login to your account</Button>
        <p className="space-x-3 text-center">
          <span>Dont have an account?</span>
          <Link className="text-primary-500" href="/signup">
            Sign Up
          </Link>
        </p>
      </AuthCardFooter>
    </AuthCard>
  );
}
