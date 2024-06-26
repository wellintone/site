import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "@/components/NavbarMain/Navbar";
import Footer from "@/components/Footer/Footer";
import { AnimationChangePage } from "@/animation/AnimationChangePage/AnimationChangePage";

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
const playfair_display_init = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair_display",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto_init.variable} ${playfair_display_init.variable} theme-light`}
      >
        <AnimationChangePage />
        <Navbar linkColor="white" textBold={800} />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
