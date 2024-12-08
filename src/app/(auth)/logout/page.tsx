"use client";

import { useAuth } from "@/context/auth";
import AuthCard, { AuthCardBody, AuthCardTitle } from "@/ui/AuthCard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      await Promise.all([
        auth?.logout(),
        new Promise((resolve) => setTimeout(resolve, 500)),
      ]);
      router.replace("/");
    }
    logout();
  }, []);

  return (
    <AuthCard>
      <AuthCardTitle>Please wait...</AuthCardTitle>
      <AuthCardBody>Logging out</AuthCardBody>
    </AuthCard>
  );
}
