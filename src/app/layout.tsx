import type { Metadata } from "next";

import "./globals.css";
import { TmaProvider } from "@/components/tma/provider";


export const metadata: Metadata = {
  title: "Telegram Mini App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <TmaProvider>
        {children}
        </TmaProvider>
        </body>
    </html>
  );
}
