"use client";

import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container mx-auto max-w-[400px] space-y-10 rounded-lg bg-secondary-700 p-6">
      <h1 className="text-3xl">Login</h1>
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
      </div>
      <div className="grid gap-6">
        <Button>Login to your account</Button>
        <p className="space-x-3 text-center">
          <span>Dont have an account?</span>
          <Link className="text-primary-500" href="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
