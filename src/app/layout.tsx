import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Simonas Stonkus",
  description: "Simonas Stonkus",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} inter-tnum`}>
        <MantineProvider>{children}</MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
