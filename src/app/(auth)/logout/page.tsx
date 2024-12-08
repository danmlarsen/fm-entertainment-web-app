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
      await auth?.logout();
      router.push("/");
    }
    logout();
  }, []);

  return (
    <AuthCard>
      <AuthCardTitle>Logging out...</AuthCardTitle>
      {/* <AuthCardBody></AuthCardBody> */}
    </AuthCard>
  );
}
