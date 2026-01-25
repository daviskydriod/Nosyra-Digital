import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "../ui/CustomCursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background cursor-custom">
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
