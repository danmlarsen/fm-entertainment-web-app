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

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <AuthCard>
      <AuthCardTitle>Sign Up</AuthCardTitle>
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
        <InputField
          name="confirmPassword"
          type="password"
          placeholder="Repeat password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </AuthCardBody>
      <AuthCardFooter>
        <Button>Create an account</Button>
        <p className="space-x-3 text-center">
          <span>Already have an account?</span>
          <Link className="text-primary-500" href="/login">
            Login
          </Link>
        </p>
      </AuthCardFooter>
    </AuthCard>
  );
}
