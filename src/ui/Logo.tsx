import Image from "next/image";
import IconLogo from "@/assets/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image className="w-[25px]" src={IconLogo} alt="Logo" />
    </Link>
  );
}
