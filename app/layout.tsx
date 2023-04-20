import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "Lakbay PH",
  description: "PH Booking Service",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal/>
          <LoginModal/>
          <Navbar currentUser={currentUser}/>
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
