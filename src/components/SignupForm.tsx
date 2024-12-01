"use client";

import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import Link from "next/link";
import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="container mx-auto max-w-[400px] space-y-10 rounded-lg bg-secondary-700 p-6">
      <h1 className="text-3xl">Sign Up</h1>
      <div className="space-y-6">
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
      </div>
      <div className="grid gap-6">
        <Button>Create an account</Button>
        <p className="space-x-3 text-center">
          <span>Already have an account?</span>
          <Link className="text-primary-500" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
