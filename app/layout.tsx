import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"],variable:'--font-inter' });
const ibmPlex = IBM_Plex_Serif({ subsets: ["latin"],weight:['400','600'], variable:'--font-ibm-plex-serif' });

export const metadata: Metadata = {
  title: "Vault Vibes Bankikng",
  description: "Online Banking Platform",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlex.variable}`}>{children}</body>
    </html>
  );
}
