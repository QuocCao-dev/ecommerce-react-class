"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Notification from "@/app/components/Notification";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useRef(new QueryClient());

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient.current}>
          {children}
          <Notification />
        </QueryClientProvider>
      </body>
    </html>
  );
}
