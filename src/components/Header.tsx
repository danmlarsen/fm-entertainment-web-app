import Logo from "./Logo";
import Navigation from "./Navigation";
import UserButton from "./UserButton";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between bg-secondary-700 p-4">
        <Logo />
        <Navigation />
        <UserButton />
      </div>
    </header>
  );
}
