import Header from "@/components/Header";
import TransitionRouterProvider from "@/components/TransitionRouterProvider";

export default function Layout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <div className="mx-auto grid min-h-screen max-w-screen-2xl grid-rows-[auto_1fr] md:py-6 lg:grid-cols-[auto_1fr] lg:grid-rows-none">
      <Header />

      <main className="p-4 py-6 md:p-6">
        <TransitionRouterProvider>{children}</TransitionRouterProvider>
      </main>
      {modal}
    </div>
  );
}
