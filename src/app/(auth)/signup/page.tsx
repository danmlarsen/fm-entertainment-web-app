import SignupForm from "@/app/(auth)/signup/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};

export default function Page() {
  return <SignupForm />;
}
