import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { AuthProvider } from "@/contexts/AuthContext";

import RouteTransitionProvider from "@/components/transition/RouteTransitionProvider";

import IntroLoader from "@/components/ui/IntroLoader";

import PresenceProvider from "@/components/providers/PresenceProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duckzr Studios",
  description: "Interactive game studio experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
        `}
      >

        <AuthProvider>

          <PresenceProvider/>

          <RouteTransitionProvider>

            {children}

            <IntroLoader/>

          </RouteTransitionProvider>

        </AuthProvider>

      </body>

    </html>
  );
}