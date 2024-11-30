import Header from "@/components/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] lg:grid-cols-[auto_1fr] lg:grid-rows-none">
      <Header />
      <main className="p-4 md:p-6">{children}</main>
    </div>
  );
}
