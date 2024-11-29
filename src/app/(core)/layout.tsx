import Header from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
}
