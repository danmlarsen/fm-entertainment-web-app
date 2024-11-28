import type { Metadata } from "next";

import { Outfit } from "next/font/google";
import "./globals.css";

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
        <main className="grid min-h-screen place-items-center">{children}</main>
      </body>
    </html>
  );
}
