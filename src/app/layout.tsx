import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar2 from "../components/navbar";

const archivo = localFont({
  src: [
    {
      path: "./fonts/Archivo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Archivo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "conzooming",
  description:
    "No 1 food, groceries, and delivery app. Seamless ordering; where fast meets fresh",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${archivo.className} flex min-h-full flex-col`}>
        <Navbar2 />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
