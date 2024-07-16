import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--fonts-inter' });
const  ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--fonts-ibm-blex-serif'
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is the next gen banking platdform",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
