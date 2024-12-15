"use client";

import { useAuth } from "@/context/auth";
import AuthCard, { AuthCardBody, AuthCardTitle } from "@/ui/AuthCard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Logout() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function logout() {
      try {
        await Promise.all([
          auth?.logout(),
          new Promise((resolve) => setTimeout(resolve, 500)),
        ]);

        toast.success("Successfully logged out.");
      } catch (e) {
        console.error(e);
        toast.error("An unknown error occurred while logging out.");
      }

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
