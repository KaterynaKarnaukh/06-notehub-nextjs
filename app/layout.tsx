// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import TanStackProvider from "@/app/components/TanStackProvider/TanStackProvider";
 
export const metadata: Metadata = {
  title: "NoteHub",
  description: "Simple and efficient application for managing personal notes",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
 

