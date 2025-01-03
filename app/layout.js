import { Toaster } from "react-hot-toast";
import Footer from "./_components/Footer";
import Header from "./_components/header/Header";
import { StoreContextProvider } from "./_context/ContextStore";

import "./globals.css";

export const metadata = {
  title: {
    template: "Loft-Gallery / %s ",
    default: "Welcome / Loft-Gallery",
  },
  description: " store that sell ",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <StoreContextProvider>
          <Header />

          <main className="mx-auto min-h-screen">
            {" "}
            <Toaster position=" center-center" />
            {children}
          </main>
        </StoreContextProvider>
        <Footer />
      </body>
    </html>
  );
}
