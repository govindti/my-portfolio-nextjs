import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

// Font imports
const firaCode = Fira_Code({
  variable: "--font-fira-code", 
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto", 
  subsets: ["latin"],
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Govind Tiwari | Software Engineer",
  description: "Created by Govind Tiwari",
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} ${roboto.variable} antialiased max-w-screen-md mx-auto px-4`} 
      >
        {children}
      </body>
    </html>
  );
}
