import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mimipoint",
  description: "mimipoint is a VTU application, that allows you to buy airtime, data, pay bills and exchange money in different currency over the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
