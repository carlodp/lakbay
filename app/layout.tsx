import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

export const metadata = {
  title: "Lakbay PH",
  description: "PH Booking Service",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
