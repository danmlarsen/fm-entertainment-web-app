import Image from "next/image";
import IconLogo from "@/assets/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/dashboard"
      className="transition duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-500"
    >
      <Image className="w-6 md:w-8" src={IconLogo} alt="Logo" />
    </Link>
  );
}
