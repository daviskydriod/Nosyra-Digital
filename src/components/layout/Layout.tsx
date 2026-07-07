import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "../ui/CustomCursor";
import WhatsAppButton from "../ui/WhatsAppButton";

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
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
