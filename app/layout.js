import Footer from "./_components/Footer";
import Header from "./_components/header/Header";
import { StoreContextProvider } from "./_context/ContextStore";

import "./globals.css";

export const metadata = {
  title: {
    template: "%s / Loft-Gallery",
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
          <main className="mx-auto min-h-screen">{children}</main>
        </StoreContextProvider>
        <Footer />
      </body>
    </html>
  );
}
