import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BoomTH Dev Next.js Admin Dashboard",
  description: "Next.js Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#151c2c] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
