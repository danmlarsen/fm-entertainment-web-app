import type { Metadata } from "next";

import { Outfit } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/auth";
import { Toaster } from "react-hot-toast";

const outfitFont = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Entertainment Web App",
    default: "Entertainment Web App",
  },
  description:
    "Disclaimer: This web app is just a demo or concept. There is no streaming content here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.className} bg-secondary-900 font-light text-white antialiased`}
      >
        <AuthContextProvider>{children}</AuthContextProvider>
        <Toaster
          toastOptions={{
            duration: 2000,
          }}
        />
      </body>
    </html>
  );
}
