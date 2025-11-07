import "./globals.scss";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Mohammed Fawwaz - Full Stack Developer | SDE | Programmer",
  description:
    "Mohammed Fawwaz is a proficient Software Engineer and Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.",
  keywords: [
    "mohammed fawwaz",
    "fawwaz",
    "full stack developer",
    "indian developer",
    "fawwaz github",
  ],
};

const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={manrope.className}>

      <body>
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
