import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Nikhil Rajput",
  description:
    "Nikhil Rajput is a proficient Software Engineer and Full Stack Developer from India, skilled in front-end and back-end development using modern tech stacks.",
  keywords: [
    "nikhil rajput",
    "nikhil",
    "nixrajput",
    "nikhil-rajput",
    "rajput nikhil",
    "founder of nixlab",
    "nixlab founder",
    "full stack developer",
    "indian developer",
    "nixrajput github",
  ],
};

const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>

      <body>
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
