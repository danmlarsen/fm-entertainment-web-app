import Logo from "@/ui/Logo";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="space-y-14 px-6 py-12">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div>{children}</div>
    </main>
  );
}
