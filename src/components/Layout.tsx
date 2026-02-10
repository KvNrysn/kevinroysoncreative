import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20 page-background relative overflow-hidden">
        {/* Blue orb effects for connected background */}
        <div className="orb orb-blue-1" />
        <div className="orb orb-blue-2" />
        <div className="orb orb-blue-3" />
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
