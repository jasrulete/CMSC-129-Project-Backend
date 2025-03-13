import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import ClientOnly from "./Components/ClientOnly";
import RegisterModal from "./Components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./Components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./Components/modals/RentModal";
import SearchModal from "./Components/modals/SearchModal";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sportal",
  description: "Generated by Sportal",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();


  return (
    <html lang="en">
      
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RentModal/>
          {/* <SearchModal/> */}
          <LoginModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    
    </html>
  );
}
