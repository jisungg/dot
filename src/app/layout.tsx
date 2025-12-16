import type { Metadata } from "next";
import {
  Geist_Mono,
  Mrs_Saint_Delafield,
} from "next/font/google";

import "dotenv/config";
import "./globals.css";

const Delafield = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: ["400"],
  variable:
    "--font-mrs_saint_delafield",
});

const GeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: ".note",
  description:
    "Manage notes in one place and transform them into an intelligent study companion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistMono.className} ${Delafield.variable} antialiased overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
