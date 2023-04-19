import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

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
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal/>
          <Navbar />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
