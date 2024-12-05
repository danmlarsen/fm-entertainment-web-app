import type { Metadata } from "next";

import { Outfit } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/auth";

const outfitFont = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entertainment Web App",
  description: "Entertainment Web App",
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
      </body>
    </html>
  );
}
