import Header from "@/components/Header";
import TransitionRouterProvider from "@/components/TransitionRouterProvider";

export default function Layout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <div className="mx-auto grid min-h-screen max-w-screen-2xl pb-6 pt-14 md:pt-24 lg:pt-16">
      <Header />

      <main className="p-4 py-6 md:p-6 lg:pl-40">
        <TransitionRouterProvider>{children}</TransitionRouterProvider>
      </main>
      {modal}
    </div>
  );
}
