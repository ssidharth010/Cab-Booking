import Header from "@/components/header/page";
import {ClerkProvider} from "@clerk/nextjs";
import './globals.css'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Form Builder',
  description: 'Create forms easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="container bg-background">
      <ClerkProvider>
        <Header />
        {children}
      </ClerkProvider>
      </body>
    </html>
  );
}
