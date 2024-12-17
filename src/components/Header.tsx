import Logo from "../ui/Logo";
import Navigation from "./Navigation";
import UserButton from "./UserButton";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex md:p-6 lg:bottom-0 lg:right-auto lg:py-8">
      <div className="flex grow items-center justify-between gap-4 bg-secondary-700 p-4 md:rounded-lg md:p-5 lg:min-w-24 lg:flex-col lg:justify-start lg:gap-20 lg:rounded-2xl lg:py-8">
        <Logo />
        <div className="lg:flex-1">
          <Navigation />
        </div>
        <UserButton />
      </div>
    </header>
  );
}
