import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "Macou 2",
  description: "Macou 2 est une grande maison de vacances se situant dans le périgord. elle contient un spa, ce qui est un atout majeur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <meta name="google-site-verification" content="v_WbGzz1R9V-ybvkeHIPB9J8dQWbmgd-hjBNjLHmzrU" />
      <body className={GeistSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
