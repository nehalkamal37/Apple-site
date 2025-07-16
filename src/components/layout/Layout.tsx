import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen" lang="en">
      <Header />
      <main
        className="flex-grow pt-20"
        role="main"
        id="main-content"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
