import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "Abhishek | Professional Video Editor Portfolio",
   description:
      "Professional video editor specializing in cinematic travel videos, reels, and YouTube edits. View portfolio and hire for video editing services.",
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
