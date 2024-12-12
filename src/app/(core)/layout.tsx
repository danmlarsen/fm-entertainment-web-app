import Header from "@/components/Header";

export default function Layout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] md:py-6 lg:grid-cols-[auto_1fr] lg:grid-rows-none">
      <Header />
      <main className="p-4 py-6 md:p-6">{children}</main>
      {modal}
    </div>
  );
}
