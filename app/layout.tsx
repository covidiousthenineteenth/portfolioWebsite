import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";  // New component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Poma - Portfolio",
  description: "Innovative developer portfolio showcasing projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-cosmic text-white`}>
        <ParticlesBackground />  {/* Use the new component here */}
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}