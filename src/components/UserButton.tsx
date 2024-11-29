import Image from "next/image";
import ImageAvatar from "@/assets/image-avatar.png";

export default function UserButton() {
  return <Image className="size-6" src={ImageAvatar} alt="User avatar" />;
}
