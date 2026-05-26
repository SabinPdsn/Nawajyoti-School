"use client";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  const pathname = usePathname();

  const isStudioRoute = ["/studio"].some((url) => pathname?.startsWith(url));

  return (
    <>
      {!isStudioRoute && <Header />}
      {children}
      {!isStudioRoute && <Footer />}
    </>
  );
};
