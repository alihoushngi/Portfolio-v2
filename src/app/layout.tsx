import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Houshangi | علی هوشنگی",
  description:
    "Ali Houshangi Frontend Developer | Develop with Javascript and work with NextJs library and coding with Typescript | design with TailwindCSS and Styled-Component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
