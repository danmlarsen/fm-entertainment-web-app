import Logo from "../ui/Logo";
import Navigation from "./Navigation";
import UserButton from "./UserButton";

export default function Header() {
  return (
    <header className="md:px-6">
      <div className="flex items-center justify-between bg-secondary-700 p-4 md:rounded-lg md:p-5 lg:min-h-[calc(100vh-48px)] lg:min-w-24 lg:flex-col lg:justify-start lg:rounded-2xl lg:py-8">
        <Logo />
        <div className="lg:mt-20 lg:flex-1">
          <Navigation />
        </div>
        <UserButton />
      </div>
    </header>
  );
}
