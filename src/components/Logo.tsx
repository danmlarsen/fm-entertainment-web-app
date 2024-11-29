import Image from "next/image";
import IconLogo from "@/assets/logo.svg";

export default function Logo() {
  return <Image className="w-[25px]" src={IconLogo} alt="Logo" />;
}
